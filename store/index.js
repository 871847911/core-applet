import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
const saveStateKeys = ['TOKEN', 'USERINFO']

// 保存变量到本地存储中
const saveLocalData = function (key, value) {
  // 判断变量名是否在需要存储的数组中
  if (saveStateKeys.indexOf(key) != -1) {
    // 获取本地存储的vuexData对象，将变量添加到对象中
    let tmp = uni.getStorageSync('VUEX_DATA')
    // 第一次打开APP，不存在vuexData变量，故放一个{}空对象
    tmp = tmp || {}
    tmp[key] = value
    // 执行这一步后，所有需要存储的变量，都挂载在本地的vuexData对象中
    uni.setStorageSync('VUEX_DATA', tmp)
  }
}

const store = new Vuex.Store({
  state: {
    TOKEN: '',
    USERINFO: {}, //用户信息
    IS_LOGIN: false, //登陆状态
  },
  getters: {},
  mutations: {
    $uStore(state, payload) {
      // 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
      const nameArr = payload.name.split('.')
      let saveKey = ''
      const len = nameArr.length
      if (nameArr.length >= 2) {
        let obj = state[nameArr[0]]
        for (let i = 1; i < len - 1; i++) {
          obj = obj[nameArr[i]]
        }
        obj[nameArr[len - 1]] = payload.value
        saveKey = nameArr[0]
      } else {
        // 单层级变量，在state就是一个普通变量的情况
        state[payload.name] = payload.value
        saveKey = payload.name
      }
      // 保存变量到本地，见顶部函数定义
      saveLocalData(saveKey, state[saveKey])
    },
  },
  actions: {},
  modules: {},
})

// 从缓存中取得相同的key进行覆盖操作
const localData = uni.getStorageSync('VUEX_DATA') || {}
for (const key in localData) {
  if (store.state.hasOwnProperty(key)) {
    store.commit('$uStore', {
      name: key,
      value: localData[key],
    })
  }
}

export default store
