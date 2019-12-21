import Vue from 'vue'
import App from './App'
import store from '@/utils/store'
import property from '@/utils/property'

Vue.prototype.$store = store
Vue.use(property)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
