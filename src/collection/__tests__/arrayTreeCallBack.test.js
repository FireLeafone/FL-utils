import arrayTreeCallBack from '../arrayTreeCallBack';

describe('tree array item callback', () => {
  const tree = [{
    id: '0',
    name: 'parent',
    children: [
      {
        id: '01',
        pid: '0',
        name: 'child1'
      },
      {
        id: '02',
        pid: '0',
        name: 'child2',
        children: [
          {
            id: '021',
            pid: '02',
            name: 'child2-child'
          }
        ]
      }
    ]
  }];
  it('item callback', () => {
    expect(arrayTreeCallBack(tree, (item, i, parent) => {
      item.age = i;
      item.parentkey = parent ? parent.id : '';
      return item;
    })).toEqual([
      {
        id: '0',
        parentkey: '',
        name: 'parent',
        age: 0,
        children: [
          {
            id: '01',
            pid: '0',
            parentkey: '0',
            age: 0,
            name: 'child1'
          },
          {
            id: '02',
            pid: '0',
            parentkey: '0',
            age: 1,
            name: 'child2',
            children: [
              {
                id: '021',
                pid: '02',
                parentkey: '02',
                age: 0,
                name: 'child2-child'
              }
            ]
          }
        ]
      }
    ]);
  });
});