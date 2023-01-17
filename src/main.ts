import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
// 引入element-plus
import { setupElementPlus } from '@/plugins/elementPlus'

// 创建实例
const setupAll = async () => {
    const app = createApp(App)
  
    // await setupI18n(app)
  
    // setupStore(app)
  
    // setupGlobCom(app)
  
    setupElementPlus(app)
  
    // setupRouter(app)
    app.use(router)
  
    // setupPermission(app)
  
    app.mount('#app')
  }
  
  setupAll()