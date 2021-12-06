import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import 'semantic-ui-css/semantic.css';

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')