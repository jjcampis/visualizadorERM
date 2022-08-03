import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
// import { mapState } from 'vuex'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */
      /* webpackPrefetch: true */ "../views/login.vue"),
  }
]

const router = new VueRouter({
  mode: "hash",//no se opta por history para evitar error de navegacion
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async(to, from, next) => {
  console.log(to,from);
  let isAuthenticated= false;
  if(store.state.logueado){
    isAuthenticated = true;
  }else{
    isAuthenticated = false;
  }
  
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'login'
  ) {
    console.log(isAuthenticated);
    // redirect the user to the login page
    // return { name: 'login' }
    next({ name: 'login' })
  }else{
    next();
  }
  //next();
})
export default router
