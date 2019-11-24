
import store from './store/main.js'
import router from './router/root.js'
import app from './component/app.js'

new Vue({
  store,
  router,
  render: h => h(app),
}).$mount('#app')