import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
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
  contextConfig: state => state.contextConfig,
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
