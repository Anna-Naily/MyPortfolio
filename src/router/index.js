import Vue from 'vue';
import VueRouter from 'vue-router';
import HelpEnhance from '../views/HelpEnhance.vue';
import HelpTense from '../views/HelpTense.vue';
import OnlineStore from '../views/OnlineStore.vue';
import PersonalFinance from '../views/PersonalFinance.vue';
import WebIntegrator from '../views/WebIntegrator.vue';
import FitnessProject from '../views/FitnessProject.vue';
import HomePage from '../views/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title: 'Home Page'
    }
  },
  {
    path: '/helpenhance',
    name: 'HelpEnhance',
    component: HelpEnhance,
    meta: {
      title: 'Help Enhance'
    }
  },
  {
    path: '/helptense',
    name: 'HelpTense',
    component: HelpTense,
    meta: {
      title: 'Help Tense'
    }
  },
  {
    path: '/onlinestore',
    name: 'OnlineStore',
    component: OnlineStore,
    meta: {
      title: 'Online Store'
    }
  },
  {
    path: '/personalfinance',
    name: 'PersonalFinance',
    component: PersonalFinance,
    meta: {
      title: 'Personal Finance'
    }
  },
  {
    path: '/webintegrator',
    name: 'WebIntegrator',
    component: WebIntegrator,
    meta: {
      title: 'WEB Integrator'
    }
  },
  {
    path: '/fitnessproject',
    name: 'FitnessProject',
    component: FitnessProject,
    meta: {
      title: 'Fitness Project'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;
