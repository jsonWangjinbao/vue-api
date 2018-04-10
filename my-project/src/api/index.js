import httpRequest from './requestPackage'

const data = {'author': '解骏'}
const LATENCY = 16

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}

export function createMessage ({ api, params, type }, cb) {
  httpRequest.weatherHttp[type](api, params).then(
    (data) => {
      let message
      message = (data.data.forecasts ? data.data.forecasts[0] : '')
      cb(message)
    }
  )
}
