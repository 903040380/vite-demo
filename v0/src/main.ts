import { render } from './render'
import { initState } from './state'

render()
initState()

// 监听子模块更新进行热更新
if (import.meta.hot) {
  import.meta.hot.accept(['./render.ts', './state.ts'], (modules) => {
    // 自定义更新
    const [renderModule, stateModule] = modules
    if (renderModule) {
      renderModule.render()
    }
    if (stateModule) {
      stateModule.initState()
    }
  })
}
