import Vue from 'vue'
const vm = new Vue()

import config from '@/common/config.js'
const { BASE_API } = config


// post请求，获取菜单
export function login(params, ContentType, needToken) {
  return vm.$u.post(`${BASE_API}/sysUserExtend/login`, params, ContentType, needToken)
}
// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export function one(params, ContentType) {
  return vm.$u.post(`${BASE_API}/wxapi/publics/config`, params, ContentType)
}