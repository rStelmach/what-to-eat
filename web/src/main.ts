import { createApp } from 'vue';
import './registerServiceWorker';
import VueSmoothScroll from 'vue3-smooth-scroll';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import store from './store';
import router from './router';
import './style.scss';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueSmoothScroll, {});
app.use(VueAxios, axios);
app.mount('#app');
