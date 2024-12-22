import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

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



createApp(App)
.use(router)
.mount('#app')
