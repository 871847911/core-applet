
import Vue from 'vue'
const vm = new Vue()

import config from '@/common/config.js'
const { BASE_API } = config

//首页数据
export function mainPageList(params, ContentType) {
  return vm.$u.get(`${BASE_API}/mainPage/list`, params, ContentType)
}
//banner
export function bannerList(params, ContentType) {
  return vm.$u.get(`${BASE_API}/banner/page`, params, ContentType)
}

//搜索
export function getSearch(params, ContentType) {
  return vm.$u.get(`${BASE_API}/mainPage/hist`, params, ContentType)
}
export function bnbInfo(params, ContentType) {
  return vm.$u.get(`${BASE_API}/mainPage/bnbInfo`, params, ContentType)
}

//活动列表
export function activities(params, ContentType) {
  return vm.$u.get(`${BASE_API}/mainPage/activities`, params, ContentType)
}

//热门城市
export function hotCityPage(params, ContentType) {
  return vm.$u.get(`${BASE_API}/hotCity/page`, params, ContentType)
}

//套餐详情
export function packDetail(params, ContentType) {
  return vm.$u.get(`${BASE_API}/mainPage/packDetail`, params, ContentType)
}

//套餐list
export function queryPack(params, ContentType) {
  return vm.$u.get(`${BASE_API}/mainPage/queryPack`, params, ContentType)
}
//设备list
export function facilities(params, ContentType) {
  return vm.$u.get(`${BASE_API}/facilities/page`, params, ContentType)
}


//优惠券下单
export function mainPageOrder(params, ContentType) {
  return vm.$u.get(`${BASE_API}/mainPage/order`, params, ContentType)
}

//下单
export function checkinOrder(params, ContentType) {
  return vm.$u.get(`${BASE_API}/mainPage/checkin_order`, params, ContentType)
}
//获取套餐分类
export function packCategoryPage(params, ContentType) {
  return vm.$u.get(`${BASE_API}/packCategory/page`, params, ContentType)
}

//充值
export function rechargeAdd(params, ContentType) {
  return vm.$u.post(`${BASE_API}/recharge/add`, params, ContentType)
}

//保证金充值记录
export function rechargePage(params, ContentType) {
  return vm.$u.get(`${BASE_API}/recharge/page`, params, ContentType)
}


//退款
export function refundAdd(params, ContentType) {
  return vm.$u.post(`${BASE_API}/refund/add`, params, ContentType)
}

//房费一键补足
export function makeRoomRate(params, ContentType) {
  return vm.$u.post(`${BASE_API}/sysUserExtend/makeRoomRate`, params, ContentType)
}




