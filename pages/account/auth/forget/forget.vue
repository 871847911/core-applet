<template>
  <view class="abslrtb flex-column a-center wrap">
    <qui-navbar title="忘记密码"></qui-navbar>
    <view class="topbox flex-column aj-center">
      <image class="logoimg" src="/static/logo.jpg" mode=""></image>
    </view>

    <view class="form">
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
            value=""
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
            :password="password"
            class="qui-input"
            type="text"
            value=""
            placeholder="请输入验证码"
          />
        </view>
        <view>
          <text style="opacity: 0.8" class="fs28 ptb20 main-color yzm">获取验证码</text>
        </view>
      </view>
      <view class="flex a-center form-item">
        <view class="label">
          <text>新密码</text>
        </view>
        <image class="label_icon" src="/static/images/icon_pw.png" mode=""></image>
        <view class="label_fgs"></view>
        <view class="flex-1">
          <input
            :password="password"
            placeholder-class="placeholder"
            class="qui-input"
            type="text"
            value=""
            placeholder="请输入新密码"
          />
        </view>
      </view>
    </view>
    <view class="btns">
      <view class="qbtn">
        <text class="btn-text-color fs30">确认</text>
      </view>
      <view class="flex ptb30 mlr20 aj-center">
        <view @click="goLogin()" class="">
          <text class="fs26 nav-text-color underline">返回登录</text>
        </view>
      </view>
    </view>

    <view class="bottom"> </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        password: true,
      }
    },
    methods: {
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
  // @import "../styles/skin01.scss";
</style>
