import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL] (state, { messages }) {
    addMessage(state, messages)
  },

  [types.RECEIVE_MESSAGE] (state, { message, dataName }) {
    addMessage(state, message, dataName)
  }
}

function addMessage (state, message, dataName) {
  Vue.set(state.messages, dataName, message)
}
