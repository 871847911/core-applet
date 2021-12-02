const install = (Vue, vm) => {
  Vue.prototype.$t = {
    // 测试toast
    toast(msg) {
      vm.$u.toast(msg)
    },
  }

  Vue.prototype.$onLaunched = new Promise((resolve) => {
    Vue.prototype.$isResolve = resolve
  })
}
export default {
  install,
}
