// export const weatherDetail = state => {
//   console.warn('解骏3', state)
//   return state.messages
// }
export default {
  weatherDetail (state) {
    return (state.messages.weather && state.messages.weather.city) || state.messages.moren
  },
  weatherNanJingDetail (state) {
    return (state.messages.nanJing && state.messages.nanJing.city) || state.messages.moren
  }
}
