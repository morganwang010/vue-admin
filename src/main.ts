import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import {setupRouter} from '@/router'
// 引入element-plus
import { setupElementPlus } from '@/plugins/elementPlus'
// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n'

// 引入状态管理
import { setupStore } from '@/store'

// 全局组件
import { setupGlobCom } from '@/components'
//引入权限
import { setupPermission } from './directives'
import 'element-plus/dist/index.css'

// 创建实例
const setupAll = async () => {
    const app = createApp(App)
  
    await setupI18n(app)
  
    setupStore(app)
  
    // setupGlobCom(app)
  
    setupElementPlus(app)
  
    setupRouter(app)
    // app.use(router)
  
    setupPermission(app)
  
    app.mount('#app')
  }
  
  setupAll()