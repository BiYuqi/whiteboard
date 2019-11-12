import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isMobile: /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent),
  devicePixelRatio: (window && window.devicePixelRatio) || 1,
  currentBrush: 'pencil',
  currentBrushSize: 10,
  currentCanvasColor: 'rgba(255, 255, 255, 1)',
  svgInfo: {
    fontSize: '28px'
  },
  svgSettingInfo: {
    fontSize: '16px'
  },
  ctx: null,
  context: null,
  instance: null,
  contextConfig: {
    globalCompositeOperation: 'source-over',
    lineWidth: 10,
    strokeStyle: 'rgba(34, 34, 34, 1)',
    lineCap: 'round',
    lineJoin: 'round',
    shadowBlur: 1,
    shadowColor: 'black'
  }
}

const mutations = {
  setCurrentBrush (state, status) {
    state.currentBrush = status
  },
  setCurrentBrushColor (state, color) {
    state.contextConfig.strokeStyle = color
    state.contextConfig.shadowColor = color
  },
  setCurrentCanvasColor (state, status) {
    state.currentCanvasColor = status
  },
  setCurrentBrushSize (state, size) {
    state.currentBrushSize = size
    state.contextConfig.lineWidth = size
  },
  setGlobalCompositeOperation (state, opt) {
    state.contextConfig.globalCompositeOperation = opt
  },
  setCanvasInstance (state, canvas) {
    state.ctx = canvas
  },
  setCanvasContext (state, context) {
    state.context = context
  },
  setInstance (state, instance) {
    state.instance = instance
  }
}

const getters = {
  ctx: state => state.ctx,
  context: state => state.context,
  isMobile: state => state.isMobile,
  contextConfig: state => state.contextConfig,
  devicePixelRatio: state => state.devicePixelRatio,
  strokeStyle: state => state.contextConfig.strokeStyle,
  currentBrush: state => state.currentBrush,
  instance: state => state.instance
}

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
