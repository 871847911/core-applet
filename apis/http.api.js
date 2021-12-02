// common/http.api.js

import * as login from './login.js'
// api 接口管理
const install = (Vue, vm) => {
  Vue.prototype.$api = {
    // modules import
    login
  }
}

export default {
  install,
}
