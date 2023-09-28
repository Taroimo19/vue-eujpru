//const { createApp } = require('vue');
import { createApp } from 'vue'
import App from './App.vue';
import router from './router'

//createApp(App).mount('#app');
const app1 = createApp(App)
// app1.use(router)
app1.mount('#app')

// 定義
// var init = () => {
//   window.vue = new Vue({
//     el:'#app',
//     router,
//     components: { App },
//     template: '<App/>'
//   })
// }

// 実行
// init();
