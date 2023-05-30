import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/views/auth/login.vue'
import SignUp from '@/views/auth/signup.vue'
import Suppliers from '@/views/dashboard/suppliersListing.vue'
import Supplier from '@/views/dashboard/supplierDetail.vue'
import Quotes from '@/views/dashboard/quotesListing.vue'
import NotFound from '@/views/error/not-found.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Suppliers,
    },
    {
      path: '/login',
      name: 'Login',
      component: LogIn,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp,
    },
    {
      path: '/supplier/:id',
      name: 'Supplier',
      component: Supplier,
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes,
    },
    { path: '/404', component: NotFound },
    { path: '/:catchAll(.*)', redirect: '/404' }, // Redirect all other unmatched routes to 404
  ],
})

export default router
