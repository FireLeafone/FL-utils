# log

> pm log 🚀⏲

## 0.4.0

`2020-04-02`

- ⏳ 优化整改代码目录结构，适应按需加载
- 🚀 采用 `fire-tools` 进行编译打包

## 0.3.3

`2019-12-30`

- `hexToRgb` 修复bug，缺少`a`

## 0.3.2

`2019-12-27`

- `getIP` 部分低版本浏览器不支持, 添加try-catch，返回false

## 0.3.1

`2019-12-23`

- ➕ `getIP` 获取IP
- 优化打包lodash, 减少打包代码体积

## 0.2.3

`2019-11-07`

- ➕ `getValueByPath` 通过path 获取值
- `hexToRgb` 支持传入透明度，默认0.8
- `arrayTreeCallBack` 支持 前序DLR、后续LRD遍历
- `addNums` 支持单位保存（同单位相加）

## 0.2.2

`2019-09-26`

- `numpoints` 优化，逻辑，不传则返回所有小数

## 0.2.0

`2019-09-04`

- 使用`webpack`打包库
- 去除无用依赖
- 打包min.js

## 0.1.10

`2019-07-26`

- 依赖整理，去除`@babel/runtime-corejs2`
- 补充一部分code测试

## 0.1.9

`2019-07-09`

- `numpoints`默认小数位为 `2 => 0`
- 升级babel、jest依赖版本

## 0.1.8

`2019-06-19`

- ➕ `filterTreeFn` tree结构数据过滤，返回函数定义过滤
- ➕ `addNums` 浮点数精准相加
- ➕ `randomColor` 随记颜色

## 0.1.7

`2019-03-28`

- `uniqueArray`🐛

## 0.1.6

`2019-03-25`

- ➕ `unBindAntdForm`，解绑FormData
- ➕ `hexToRgb` && `rgbToHex` 颜色转换
- `downloadLink`优化 url

## 0.1.5

`2019-02-21`

- isArray 低版本浏览器兼容
- 新增`treeFilter`, `throttle`, `randomId`
- 优化部分函数中参数判断

## 0.1.4

`2019-01-22`

- 修复bug🐛

## 0.1.0

`2019-01-04` ☘

- 开启项目， start
