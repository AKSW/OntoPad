import { createRouter, createWebHistory } from 'vue-router'
import { useRdfStore } from '../stores/rdf'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    // {
    //   path: '/voc',
    //   name: 'VocPad',
    //   component: () => import('../views/VocPad.vue')
    // },
    // {
    //   path: '/edit',
    //   name: 'EditForm',
    //   component: () => import('../views/EditForm.vue')
    // },
    // {
    //   path: '/rdform',
    //   name: 'RDFormDemo',
    //   component: () => import('../views/RDFormDemo.vue')
    // },
    // {
    //   path: '/add',
    //   name: 'InputForm',
    //   component: () => import('../views/InputForm.vue')
    // },
    {
      path: '/source',
      name: 'Source',
      component: () => import('../views/Source.vue')
    }
  ]
})

router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const store = useRdfStore()

})

export default router
