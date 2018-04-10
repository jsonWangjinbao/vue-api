'use strict'

import axios from 'axios'
import qs from 'qs'

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常,状态码404'
  }
}

function checkCode (res) {
  // 如果code异常(即网络请求码或者后台返回数据异常)(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (res.data.info !== 'OK')) {
    alert('请求错误提示' + res.data.info)
  } else {
    console.log('数据返回成功')
  }
  return res
}

export default {
  weatherHttp: {
    post (url, data) {
      return axios({
        method: 'post',
        baseURL: 'http://restapi.amap.com',
        url,
        data: qs.stringify(data),
        timeout: 1000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then(
        (response) => {
          return checkStatus(response)
        }
      ).then(
        (res) => {
          return checkCode(res)
        }
      )
    },
    get (url, params) {
      return axios({
        method: 'get',
        baseURL: 'http://restapi.amap.com',
        url,
        params,
        timeout: 1000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(
        (response) => {
          return checkStatus(response)
        }
      ).then(
        (res) => {
          return checkCode(res)
        }
      )
    }
  }
}
