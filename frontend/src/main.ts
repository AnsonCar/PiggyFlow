import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import 'sober';
import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './i18n';
import './index.css';
import router from './routes/routes';
import pinia from './stores';

const app = createApp(App);
app.use(i18n);
app.use(pinia);
app.use(autoAnimatePlugin);
app.use(router);
app.mount('#app');
