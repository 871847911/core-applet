<template>
  <view class="abslrtb flex-column a-center wrap">
    <view class="topbox flex-column aj-center">
      <image class="logoimg" src="/static/logo.jpg" mode=""></image>
    </view>
    <view class="flex tabs mb30">
      <view @click="tab(0)" class="flex-1 flex aj-center" :class="tabIndex == 0 && 'active'">
        <text class="fs30 fw600 text-gray" :class="tabIndex == 0 && 'curtext'">账号登录</text>
      </view>
      <view @click="tab(1)" class="flex-1 flex aj-center" :class="tabIndex == 1 && 'active'">
        <text class="fs30 fw600 text-gray" :class="tabIndex == 1 && 'curtext'">手机登录</text>
      </view>
    </view>
    <view class="form" v-if="tabIndex == 0">
      <view class="flex a-center form-item">
        <view class="label">
          <text>账号</text>
        </view>
        <image class="label_icon" src="/static/images/icon_user.png" mode=""></image>
        <view class="label_fgs"></view>
        <view class="flex-1">
          <input
            placeholder-class="placeholder"
            class="qui-input"
            type="text"
            v-model="user"
            placeholder="请输入账号"
          />
        </view>
      </view>
      <view class="flex a-center form-item">
        <view class="label">
          <text>密码</text>
        </view>
        <image class="label_icon" src="/static/images/icon_pw.png" mode=""></image>
        <view class="label_fgs"></view>
        <view class="flex-1">
          <input
            placeholder-class="placeholder"
            :password="true"
            class="qui-input"
            type="text"
            v-model="password"
            placeholder="请输入密码"
          />
        </view>
      </view>
    </view>

    <view class="form" v-if="tabIndex == 1">
      <view class="flex a-center form-item">
        <view class="label">
          <text>手机号</text>
        </view>
        <image class="label_icon" src="/static/images/icon_phone.png" mode=""></image>
        <view class="label_fgs"></view>
        <view class="flex-1">
          <input
            placeholder-class="placeholder"
            class="qui-input"
            type="text"
            v-model="user"
            placeholder="请输入手机号"
          />
        </view>
      </view>
      <view class="flex a-center form-item">
        <view class="label">
          <text>验证码</text>
        </view>
        <image class="label_icon" src="/static/images/icon_code.png" mode=""></image>
        <view class="label_fgs"></view>
        <view class="flex-1">
          <input
            placeholder-class="placeholder"
            :password="true"
            class="qui-input"
            type="text"
            value=""
            placeholder="请输入验证码"
          />
        </view>
        <view>
          <text style="opacity: 0.8" class="yzm fs28 ptb20 main-color">获取验证码</text>
        </view>
      </view>
    </view>
    <view class="btns">
      <view class="qbtn" @click="login">
        <text class="btn-text-color fs30">登录</text>
      </view>
      <view class="flex ptb30 mlr20 space-between">
        <view @click="goRegister" class="">
          <!-- <text class="fs26 nav-text-color underline">注册</text> -->
        </view>
        <view class="" @click="goForget">
          <text class="fs26 nav-text-color underline">忘记密码</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        user: '',
        password: '',
        tabIndex: 0,
      }
    },
    methods: {
      onKeyInput(event) {
        this.user = event.target.value
      },
      onKeyInput(event) {
        this.password = event.target.value
      },
      login() {
        if (!this.user) return uni.showToast({ title: '账号不能为空', icon: 'none' })
        if (!this.password) return uni.showToast({ title: '密码不能为空', icon: 'none' })
        uni.showLoading({ title: '正在登录', mask: true })
        uni.login({
          success: (res) => {
            if (res.code) {
              let params = {
                account: this.user,
                appId: 'wx29117971d55461fc',
                code: res.code,
                password: this.password,
              }
              console.log(params)
              this.$api.login.login(params, 'json', false).then((res) => {
                uni.hideLoading()
                this.$u.vuex('IS_LOGIN', true)
                uni.setStorageSync('TOKEN', res)
                getApp().globalData.getUserInfo()
                uni.switchTab({ url: '/pages/index/index' })
              })
            }
          },
        })
      },
      tab(index) {
        this.tabIndex = index
      },
      goLogin() {
        uni.navigateTo({
          url: '/pages/account/auth/login/login',
        })
      },
      goRegister() {
        uni.navigateTo({
          url: '/pages/account/auth/register/register',
        })
      },
      goForget() {
        uni.navigateTo({
          url: '/pages/account/auth/forget/forget',
        })
      },
    },
  }
</script>

<style lang="scss">
  @import '@/common/styles/qui_weex.scss';
  @import '@/pages/account/auth/styles/skin05.scss';
</style>
