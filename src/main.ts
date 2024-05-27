import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import axios from 'axios';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

axios.defaults.baseURL = import.meta.env.VITE_VUE_APP_IP_ADDRESS;

import { createPinia } from 'pinia'
import { ComponentOptions, createApp } from 'vue'


import 'primevue/resources/primevue.css';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import './assets/theme.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


const app = createApp(App as ComponentOptions)

app.use(createPinia())
app.use(router)

app.use(ToastService);
app.component('AppToast', Toast);

app.use(PrimeVue, {
  ripple: true,
  locale: {
    dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: 'Hoje',
    firstDayOfWeek: 0,
    dateFormat: 'dd/mm/yy',
    week: 'Semana',
    dateIs: 'Dia',
    dateIsNot: 'Não é dia',
    dateBefore: 'Ontem',
    dateAfter: 'Amanhã',
    aria: {
      falseLabel: '',
      pageLabel: {
        replace: (value: number) => `${value}`,
      }
    },
  }
});

app.mount('#app')