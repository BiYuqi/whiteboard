import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  ColorPicker,
  Tooltip,
  Slider,
  Popover,
  Button,
  InputNumber
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import SvgIcon from '@/components/SvgIcon'
Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false
Vue.use(ColorPicker)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Slider)
Vue.use(Popover)
Vue.use(Button)
Vue.use(InputNumber)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
