import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './types/google-maps.d.ts';

import Home from "./components/HomePage.vue";
import Menu from "./components/MenuPage.vue";
import Contact from "./components/ContactInfo.vue";
import ContactA from "./components/ContactAnonymous.vue"
import ContactB from "./components/ContactThird.vue"
import Media from "./components/MediaCollection.vue"
import Carousel from "./components/ImageCarousel.vue"
import Test from "./components/TestComponent.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: Home},
      { path: '/menu', component: Menu},
      { path: '/contact', component: Contact },
      { path: '/contacta', component: ContactA},
      { path: '/contactb', component: ContactB},
      { path: '/media', component: Media},
      { path: '/carousel', component: Carousel},
      { path: '/test', component: Test}
  ]
});


const app = createApp(App)
app.use(router)
app.mount('#app')


