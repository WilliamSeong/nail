import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './types/google-maps.d.ts';

import Home from "./components/HomePage.vue";
import Menu from "./components/MenuPage.vue";
import Contact from "./components/ContactInfo.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: Home},
      { path: '/menu', component: Menu},
      { path: '/contact', component: Contact },
  ]
});


const app = createApp(App)
app.use(router)
app.mount('#app')


