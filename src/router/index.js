import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import WhiteBoard from '@/components/WhiteBoard'

Vue.use(Router)

export const routes = [
  {
    path: '',
    name: 'whiteborad-entry',
    component: Main,
    redirect: '/whiteboard',
    children: [
      {
        path: '/whiteboard',
        name: 'whiteboard',
        component: WhiteBoard
      }
    ]
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (to.path) window._hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  next()
})

export default router
