import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './types/google-maps.d.ts';

import Home from "./components/HomePage.vue";
import Menu from "./components/menu/NewMenu.vue";
import Authorize from "./components/gmail/AuthorizeToken.vue";
import Contact from "./components/gmail/ContactInfo.vue";

import Test from "./components/TestComponent.vue";
import Test2 from "./components/TestComponent2.vue";


import EmployeeAdd from "./components/employee/EmployeeAdd.vue";
import EmployeeSearch from "./components/employee/EmployeeSearch.vue";
import EmployeePage from "./components/employee/EmployeePage.vue";
import EmployeeEdit from "./components/employee/EmployeeEdit.vue";

import ReservationSearch from "./components/reservation/ReservationSearch.vue";
import ReservationGenerator from "./components/reservation/ReservationGenerator.vue";
import ReservationPage from "./components/reservation/ReservationPage.vue";

import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: Home},
      { path: '/menu', component: Menu},
      
      { path: '/test', component: Test},
      { path: '/test2', component: Test2},


      { path: '/employee/add', component: EmployeeAdd},
      { path: '/employee/search', component: EmployeeSearch},
      { path: '/employee/page/:id', component: EmployeePage},
      { path: '/employee/edit/:id', component: EmployeeEdit},

      { path: '/reservation/search', component: ReservationSearch},
      { path: '/reservation/add', component: ReservationGenerator},
      { path: '/reservation/:id', component: ReservationPage},

      { path: '/authorize', component: Authorize},
      { path: '/contact', component: Contact},

      { path: '/:pathMatch(.*)*', component: NotFound }
  ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')


