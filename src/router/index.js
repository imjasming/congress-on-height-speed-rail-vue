import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Home = r => require.ensure([], () => r(require('@/views/home/Home')), 'home')
const Speaker = r => require.ensure([], () => r(require('@/views/speaker/Speaker')), 'speaker')
const News = r => require.ensure([], () => r(require('@/views/news/News')), 'news')
const Events = r => require.ensure([], () => r(require('@/views/events/Events')), 'events')
const Elements = r => require.ensure([], () => r(require('@/views/elements/Elements')), 'elements')
const Contact = r => require.ensure([], () => r(require('@/views/contact/Contact')), 'contact')


Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/speaker',
      name: 'speaker',
      component: Speaker,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {//404 notfound
      path: '*',

      name: '404notfound'
    }
  ]
})

export default router
