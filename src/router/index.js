import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import Helloworld from './components/HelloWorld.vue'
import Test2 from './components/testApp2.vue'
import Test3 from './components/testApp3/testApp3.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name : 'Home',
        component: index
      },
      {
        path: '/testApp2',
        name : 'Test2',
        component: Test2
      },
      {
        path: '/testApp3',
        name : 'Test3',
        component: Test3
      }
    ]
})