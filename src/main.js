import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'
import 'firebase/firestore'
import VCalendar from 'v-calendar'

Vue.use(VCalendar)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyC8nwRvnF4XaCqndq_dlkG7YRZ__17of78",
  authDomain: "meurato-2074d.firebaseapp.com",
  databaseURL: "https://meurato-2074d.firebaseio.com",
  projectId: "meurato-2074d",
  storageBucket: "",
  messagingSenderId: "785319052219",
  appId: "1:785319052219:web:e7979831009b2732edfa9e"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
