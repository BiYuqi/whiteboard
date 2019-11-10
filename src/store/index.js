import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isMobile: /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent),
  devicePixelRatio: (window && window.devicePixelRatio) || 1,
  currentBrush: 'pencil',
  currentBrushSize: 6,
  currentCanvasColor: 'rgba(255, 255, 255, 1)',
  svgInfo: {
    fontSize: '28px'
  },
  svgSettingInfo: {
    fontSize: '16px'
  },
  ctx: null,
  context: null,
  ctxInitialProperty: {
    lineWidth: 6,
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
    state.ctxInitialProperty.strokeStyle = color
  },
  setCurrentCanvasColor (state, status) {
    state.currentCanvasColor = status
  },
  setCurrentBrushSize (state, size) {
    state.currentBrushSize = size
  },
  setCanvasInstance (state, canvas) {
    state.ctx = canvas
  },
  setCanvasContext (state, context) {
    state.context = context
  }
}

const getters = {
  ctx: state => state.ctx,
  context: state => state.context,
  isMobile: state => state.isMobile,
  ctxInitialProperty: state => state.ctxInitialProperty,
  devicePixelRatio: state => state.devicePixelRatio
}

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
