# code-splitting

## 解决的问题

在传统的单 chunk 打包模式下：

- 无法做到按需加载，即使是当前页面不需要的代码也会进行加载。
- 线上缓存复用率极低，改动一行代码即可导致整个 bundle 产物缓存失效。

## Vite 默认拆包策略

生产环境下 Vite 完全利用 Rollup 进行构建，因此拆包也是基于 Rollup 来完成的，但 Rollup 本身是一个专注 JS 库打包的工具，对应用构建的能力还尚为欠缺，Vite 正好是补足了 Rollup 应用构建的能力

- Vite 实现了自动 CSS 代码分割的能力
- Vite 基于 Rollup 的 manualChunksAPI 实现了应用拆包的策略， Vite 2.9 之前 initial chunk 分离 vendor,之后不分离,Async Chunk 而言 ，动态 import 的代码会被拆分成单独的 chunk，如上述的 Dynacmic 组件

## 自定义拆包策略

Vite 的底层打包引擎 Rollup 提供了 manualChunks

- 对象的配置
- 函数进行更加灵活的配置，但是函数配置的坑点是循环引用问题，见 example 示例

使用 vite-plugin-chunk-split 解决
