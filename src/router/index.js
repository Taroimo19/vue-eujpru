import Vue from 'vue'
import Router from 'vue-router'
import index from './components/TestApp.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        component: index
      }
    ]
})