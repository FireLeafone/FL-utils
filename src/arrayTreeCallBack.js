/**
 * @name arrayTreeCallBack, 树形数组节点callback
 * @param {array} treeNodes
 * @param {function} Fn (item, i, parent)
 * @param {object} config
 * @returns
 */

import isArray from './isArray';

function arrayTreeCallBack(treeNodes, Fn, config = {}) {
  if (!isArray(treeNodes)) {
    return new Error('data params is array type');
  }
  if (!treeNodes.length) return [];
  const defaultOpt = {
    childrenKeyName: 'children',
    traversal: 'DLR', // LRD 后序遍历；DLR 前序遍历
  };
  const options = { ...defaultOpt, ...config };

  function treeMap(tree, parent) {
    return tree.map((t, i) => {
      let item = { ...t };
      if (options.traversal === 'DLR') {
        item = Fn(item, i, parent);
        if (
          item[options.childrenKeyName] &&
          item[options.childrenKeyName].length
        ) {
          const children = item[options.childrenKeyName];
          item[options.childrenKeyName] = treeMap(children, item);
        }
      } else if (options.traversal === 'LRD') {
        if (
          item[options.childrenKeyName] &&
          item[options.childrenKeyName].length
        ) {
          const children = item[options.childrenKeyName];
          item[options.childrenKeyName] = treeMap(children, item);
        }
        item = Fn(item, i, parent);
      }
      return item;
    });
  }

  return treeMap(treeNodes);
}

export default arrayTreeCallBack;
