import * as api from '../api/index'
import * as types from './mutation-types'

export default {
  getAllMessages: ({ commit }) => {
    api.getAllMessages(messages => {
      commit(types.RECEIVE_ALL, {
        messages
      })
    })
  },
  sendMessage: ({ commit }, payload) => {
    api.createMessage(payload, message => {
      commit(types.RECEIVE_MESSAGE, {
        message, dataName: payload.dataName
      })
    })
  }
}
