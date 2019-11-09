import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isMobile: /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent),
  devicePixelRatio: (window && window.devicePixelRatio) || 1,
  currentBrush: 'pencil',
  currentBrushColor: 'rgba(28, 166, 129, 1)',
  svgInfo: {
    fontSize: '30px'
  },
  svgSettingInfo: {
    fontSize: '16px'
  },
  ctx: null,
  context: null,
  ctxInitialProperty: {
    lineWidth: '',
    fillStyle: '',
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
  setCurrentBrushColor (state, status) {
    state.currentBrushColor = status
  },
  setCanvasInstance (state, canvas) {
    state.ctx = canvas
  },
  setCanvasContext (state, context) {
    state.context = context
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
