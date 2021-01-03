import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

// Widgets
import widgets from '../views/widgets'

// UI Components
import alerts from '../views/ui-components/alerts'
import badges from '../views/ui-components/badges'
import breadcrumbs from '../views/ui-components/breadcrumbs'
import buttons from '../views/ui-components/buttons'
import carousel from '../views/ui-components/carousel'
import dropdowns from '../views/ui-components/dropdowns'
import icons from '../views/ui-components/icons'
import modals from '../views/ui-components/modals'
import paginations from '../views/ui-components/paginations'
import progress from '../views/ui-components/progress'
import tables from '../views/ui-components/tables'
import typography from '../views/ui-components/typography'
import tabs from '../views/ui-components/tabs'
import tooltips from '../views/ui-components/tooltips'

// Form Components
import forms from '../views/forms/forms'

// Sample Pages
import subDriverReq from '../views/sample-pages/sup-drivers-requests'
import subOwnDriverReq from '../views/sample-pages/sup-drivers-own-requests'
import supOwnCars from '../views/sample-pages/sup-car-own'
import OkaDrivers from '../views/sample-pages/oka-drivers'

import error500 from '../views/sample-pages/error-500'
import addCar from '../views/sample-pages/add-car'
import addDriver from '../views/sample-pages/add-driver'
import logIn from '../views/sample-pages/login'
import ForgetPassword from '../views/sample-pages/forget-password'
import register from '../views/sample-pages/register'
import SuccesfulRegister from '../views/sample-pages/SuccesfulRegister'
import wallet from '../views/sample-pages/wallet'
import {checkIfSupplier} from '../../src/functions/auth'
import {store} from '../store/store'

import axios from 'axios'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [{
    path: '/',
    name: 'dashboard',
    component: dashboard,
    meta: { requiresAuth: false }
  },
  {
    path: '/supDriversReq',
    name: 'sup-drivers-requests',
    component: subDriverReq,
    meta: { requiresAuth: false }
  },
    {
      path: '/supOwnDriversReq',
      name: 'sup-own-drivers-requests',
      component: subOwnDriverReq,
      meta: { requiresAuth: false }
    },
    {
      path: '/supOwnCars',
      name: 'sup-car-requests',
      component: supOwnCars,
      meta: { requiresAuth: false }
    },
  {
    path: '/500',
    name: 'error-500',
    component: error500
  },
  {
    path: '/addCar',
    name: 'add-car',
    component: addCar,
    meta: { requiresAuth: false }
  },
  {
    path: '/addDriver',
    name: 'add-driver',
    component: addDriver,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: logIn
  },
  {
    path: '/forgetpassword',
    name: 'fprgetpassword',
    component: ForgetPassword
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/succesfulregister',
    name: 'succesfulregister',
    component: SuccesfulRegister
  },
  {
    path: '/okadrivers',
    name: 'okadrivers',
    component: OkaDrivers
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: wallet
  }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = store.state.currentUser;
  if(requiresAuth && currentUser) {
    //checkIfSupplier(axios).then(supplier=>{
      next();
    // }).catch(err=>{
    //   store.commit("logout");
    //   next({
    //     path: '/login',
    //     query: {
    //       redirect: to.fullPath,
    //     },
    //   });
    // });
  }
  else if (requiresAuth && !currentUser){
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    });
  }
  else if((to.path == '/login'||to.path == '/register') && currentUser) {
    next('/');
  } else {
    next();
  }
});







export default router;
