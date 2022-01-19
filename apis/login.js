import Vue from 'vue'
const vm = new Vue()

import config from '@/common/config.js'
const { BASE_API } = config


// 登录
export function login(params, ContentType, needToken) {
  return vm.$u.post(`${BASE_API}/sysUserExtend/login`, params, ContentType, needToken)
}

// 用户信息
export function getLoginUser(params, ContentType) {
  return vm.$u.get(`${BASE_API}/getLoginUser`, params, ContentType)
}


// 金额统计
export function statisticsBill(params, ContentType) {
  return vm.$u.get(`${BASE_API}/sysUserExtend/statisticsBill`, params, ContentType)
}





