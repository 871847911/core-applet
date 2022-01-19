// common/http.api.js

import * as login from './login.js'
import * as home from './home.js'
// api 接口管理
const install = (Vue, vm) => {
  Vue.prototype.$api = {
    // modules import
    login,
    home
  }
}

export default {
  install,
}
