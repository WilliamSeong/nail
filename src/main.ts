import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './types/google-maps.d.ts';

import Home from "./components/HomePage.vue";
import Menu from "./components/menu/MenuPage.vue";
import Authorize from "./components/AuthorizeToken.vue";
import Contact from "./components/ContactInfo.vue";
import Test from "./components/TestComponent.vue";
import Employee from "./components/EmployeeManagement.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: Home},
      { path: '/menu', component: Menu},
      { path: '/test', component: Test},
      { path: '/employee', component: Employee},
      { path: '/authorize', component: Authorize},
      { path: '/contact', component: Contact}
  ]
});


const app = createApp(App)
app.use(router)
app.mount('#app')


