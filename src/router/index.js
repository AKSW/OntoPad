import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: "/dashboard" },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/instances',
      name: 'InstanceList',
      component: () => import('../components/InstanceList.vue')
    },
    {
      path: '/edit',
      name: 'EditForm',
      component: () => import('../views/EditForm.vue')
    },
    {
      path: '/add',
      name: 'InputForm',
      component: () => import('../views/InputForm.vue')
    },
    {
      path: '/source',
      name: 'Source',
      component: () => import('../views/Source.vue')
    }
  ]
})

export default router
