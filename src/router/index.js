import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profiles/Profiles.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    redirect: '/msite' 
  },

  { 
    path: '/msite',
    component: Msite,
    meta: { showFooter: true }
  },

  { 
    path: '/search',
    component: Search,
    meta: { showFooter: true }
  },

  { 
    path: '/order', 
    component: Order,
    meta: { showFooter: true }
  },
  
  { 
    path: '/profile',
    component: Profile,
    meta: { showFooter: true }
  },
  {
    path:'/login',
    component: Login
  } 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
