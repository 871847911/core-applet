import Vue from 'vue'
const vm = new Vue()

import config from '@/common/config.js'
const { BASE_API } = config


// post请求，获取菜单
export function requestGetcate(params, ContentType) {
  return vm.$u.post(`${BASE_API}/wxapi/publics/config`, params, ContentType)
}
// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export function one(params, ContentType) {
  return vm.$u.post(`${BASE_API}/wxapi/publics/config`, params, ContentType)
}