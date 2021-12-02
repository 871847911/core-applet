<script>
  import { globalData } from '@/common/globalData.js'
  export default {
    globalData: {
      ...globalData,
    },
    onLaunch(options = {}) {
      console.log('App onLaunch')
      this.globalData.checkIsIPhoneX()
      this.initLoginStatus()
    },
    onShow: function (options = {}) {
      console.log('App Show')
    },
    onHide: function () {
      //全局事件监听预防锁屏等事件
      this.appHide()
      console.log('App Hide')
    },
    methods: {
      //小程序onHide事件
      appHide() {
        uni.$emit('appHide', '我是监听小程序onHide事件')
      },
      /**
       * 初始化登录状态
       */
      initLoginStatus() {
        const token = uni.getStorageSync('TOKEN')
        if (token) {
          this.globalData.getUserInfo()
        }
      },
      /**
       * 小程序更新
       */
      getUpdateManager() {
        // 获取小程序更新机制兼容
        if (uni.canIUse('getUpdateManager')) {
          const updateManager = wx.getUpdateManager()
          updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            if (res.hasUpdate) {
              updateManager.onUpdateReady(function () {
                uni.showModal({
                  title: '更新提示',
                  confirmColor: '#00bbcc',
                  content: '新版本已经准备好，是否重启应用？',
                  success: function (res) {
                    if (res.confirm) {
                      // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                      updateManager.applyUpdate()
                    } else if (res.cancel) {
                      //如果需要强制更新，则给出二次弹窗，如果不需要，则这里的代码都可以删掉了
                      uni.showModal({
                        title: '温馨提示~',
                        content: '本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~',
                        showCancel: false, //隐藏取消按钮
                        confirmColor: '#00bbcc',
                        confirmText: '确定更新', //只保留确定更新按钮
                        success: function (res) {
                          //第二次提示后，强制更新
                          if (res.confirm) {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                            updateManager.applyUpdate()
                          }
                        },
                      })
                    }
                  },
                })
              })
              updateManager.onUpdateFailed(function () {
                // 新的版本下载失败
                uni.showModal({
                  title: '已经有新版本了哟~',
                  content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
                })
              })
            }
          })
        }
      },
    },
  }
</script>

<style lang="scss">
  @import 'uview-ui/index.scss';
  view,
  text {
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
  }
</style>
