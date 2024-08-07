import { createApp } from 'vue';

import { router } from './router';
//import style
import './assets/scss/main.scss';

//import vue root component
import App from './App.vue';

createApp(App).use(router).mount('#app');
