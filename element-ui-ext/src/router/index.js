import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/stepform'
  },
  {
    path: '/stepform',
    name: 'StepForm',
    component: () => import('@/views/stepForms')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})
export default router
