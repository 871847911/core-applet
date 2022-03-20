// common/http.interceptor.js

const ContentType = {
  form: 'application/x-www-form-urlencoded',
  text: 'application/text',
  json: 'application/json;charset=UTF-8',
}

const install = (Vue, vm) => {
  // 此为自定义配置参数，具体参数见上方说明
  Vue.prototype.$u.http.setConfig({
    showLoading: false,
    originalData: true,
    header: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
  })

  // 请求拦截部分，如配置，每次请求前都会执行
  Vue.prototype.$u.http.interceptor.request = (config) => {
    //动态设置token 应对部分接口不需要token的情况
    const token = uni.getStorageSync('TOKEN')
    if (config.needToken) config.header.Authorization = 'Bearer ' + token
    //动态设置 Content-Type
    config.header = {
      ...config.header,
      'Content-Type': ContentType[config.ContentType],
    }
    return config
    // 如果return一个false值，则会取消本次请求
    // if(config.url == '/user/rest') return false; // 取消某次请求
  }

  // 响应拦截，如配置，每次请求结束都会执行本方法
  Vue.prototype.$u.http.interceptor.response = (res) => {
    console.log('<=======请求response======>', res)
    // 返回成功
    if (res.statusCode == 200) {
      const result = res.data
      if (result.code == 200 || result.pageNo === 1) {
        return result.result || result.data || result.rows
      } else if (result.code === 1011008 || result.code == 1011006) {
        const token = uni.getStorageSync('TOKEN')
        vm.$u.toast(!token ? '未登录，正在跳转登录...' : '登陆已过期，请重新登录')
        getApp().globalData.logOut({ showToast: false })
      } else {

        uni.showToast({ title: result.msg || result.message, icon: 'none' })
      }
    } else {
      //接口异常判断网络状态
      uni.getNetworkType({
        success: (res) => {
          console.log('==================网络类型' + res.networkType + '====================')
          let title = '系统异常请联系客服人员'
          if (res.networkType === 'none') {
            title = '当前网络不太顺畅哦，请检查网络状态'
          }
          uni.showToast({ title, icon: 'none', duration: 3000 })
        },
      })
    }
    return false
  }
}

export default {
  install,
}
