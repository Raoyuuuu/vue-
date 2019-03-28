import Vue from 'vue'
import App from './App'
import router from './router/index'
import iView from 'iview'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css'



Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(iView);
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    user:'',
    role:[],
    uri:[],
    power:[],
    employeeList: [],
    dailyReportList: [],
    menuContent:{},
    reportContent:{},
    uriContent:{},
    title:'null',
  },
  mutations: {
    increment (state) {
      
    }
  }
})

new Vue({
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
