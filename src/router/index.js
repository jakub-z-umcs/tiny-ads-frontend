import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ads',
    component: () => import('../views/Ads.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/ads',
    name: 'Ads',
    component: () => import('../views/Ads.vue')
  },
    {
    path: '/favourites',
    name: 'Favourites',
    component: () => import('../views/Favourites.vue')
  },
    {
    path: '/ads/new',
    name: 'NewAd',
    component: () => import('../views/NewAd.vue')
  },
  { path: '/categories/:id', component: () => import('../views/CategoryList.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
