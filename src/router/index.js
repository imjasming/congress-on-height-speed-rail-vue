import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Home = r => require.ensure([], () => r(require('@/views/home/Home')), 'home')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {//404 notfound
      path: '*',

      name: '404notfound'
    }
  ]
})

export default router
