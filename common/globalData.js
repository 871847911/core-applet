import Vue from 'vue'
const vm = new Vue()
const globalData = {
  //0:待支付  1 进行中 2 已结束 3 已取消-超时自动取消 4.已取消-医生主动取消
  inStatus: ['待支付', '进行中', '已结束', '已取消', '已取消'], //问诊订单状态
  //获取手机基本信息用来判断是否是iphoneX 及以上版本
  checkIsIPhoneX() {
    uni.getSystemInfo({
      success: (res) => {
        // x及以上的异形屏top为44，非异形屏为20
        this.systemInfo = res
        if (res.safeArea.top > 20) {
          this.isIPX = true
        }
      },
    })
  },
  //退出登录
  logOut(params = {}) {
    const { showToast = true, toastText = '已成功退出登录' } = params
    uni.removeStorageSync('USERINFO') //清除用户信息
    uni.removeStorageSync('VUEX_DATA') //清除VUEX 缓存数据
    uni.removeStorageSync('TOKEN') //清除token
    vm.$u.vuex('IS_LOGIN', false) //修改登录状态
    vm.$u.vuex('USERINFO', {})
    if (showToast) uni.showToast({ title: toastText, icon: 'none', mask: true })
    setTimeout(() => {
      uni.redirectTo({
        url: '/pages/account/auth/login/login',
      })
    }, 1000)
  },
  //获取用户信息 
  async getUserInfo() {
    vm.$api.login.getLoginUser().then((res) => {
      vm.$u.vuex('IS_LOGIN', true)
      uni.setStorageSync('USERINFO', res)
      vm.$u.vuex('USERINFO', res)
    })

  },
}
export { globalData }
