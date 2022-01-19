
import Vue from 'vue'
const vm = new Vue()

import config from '@/common/config.js'
const { BASE_API } = config

//首页数据
export function mainPageList(params, ContentType) {
  return vm.$u.get(`${BASE_API}/bnbcore/mainPage/list`, params, ContentType)
}
//搜索
export function getSearch(params, ContentType) {
  return vm.$u.get(`${BASE_API}/bnbcore/mainPage/hist`, params, ContentType)
}
export function bnbInfo(params, ContentType) {
  return vm.$u.get(`${BASE_API}/bnbcore/mainPage/bnbInfo`, params, ContentType)
}

//充值
export function rechargeAdd(params, ContentType) {
  return vm.$u.get(`${BASE_API}/recharge/add`, params, ContentType)
}

