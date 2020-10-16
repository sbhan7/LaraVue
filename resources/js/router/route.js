import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)


let routes = [
    { path: '/dashboard', component: require('../components/Dashboard.vue').default },
    { path: '/profile', component: require('../components/Profile.vue').default }
  ]


let router = new VueRouter({
    routes 
  })
  

const app = new Vue({
    el: '#app',
    router
});
