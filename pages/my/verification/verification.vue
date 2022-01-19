<template>
  <view class="warp">
    <view class="box">
      <view class="box-one">
        <view class="box-one-left"> 手机号码 </view>
        <view class="box-one-right">
          <input type="text" value="184****8220" />
        </view>
      </view>
      <view class="box-two">
        <view class="box-two-left"> 验证码 </view>
        <view class="box-two-center">
          <input type="text" value="" placeholder="请输入验证码" />
        </view>
        <view class="box-two-right"> 获取验证码 </view>
      </view>
    </view>
    <view class="button"> 确定 </view>
    <view class="footer"> 无法接收短信？ </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="scss">
  .warp {
    height: 100vh;
    background-color: #f5f5f5;
    padding-top: 20rpx;
  }
  .box {
    margin: 0rpx 32rpx;
    background-color: #fff;
    padding: 20rpx;
    border-radius: 10rpx;
    .box-one {
      display: flex;
      align-items: center;
      padding-bottom: 20rpx;
      border-bottom: 2rpx solid #f5f5f5;
      .box-one-left {
        width: 120rpx;
        margin-right: 60rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
      .box-one-right {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
    }
    .box-two {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      .box-two-left {
        width: 120rpx;
        margin-right: 60rpx;
        font-size: 28rpx;
        color: #333333;
      }
      .box-two-center {
        font-size: 28rpx;
        color: #cccccc;
      }
      .box-two-right {
        font-size: 26rpx;
        color: #00bbcc;
      }
    }
  }

  .button {
    width: 686rpx;
    height: 80rpx;
    background: linear-gradient(270deg, #3dcccc 0%, #00bbcc 100%);
    border-radius: 40rpx;
    line-height: 80rpx;
    text-align: center;
    color: #fff;
    margin: 40rpx 32rpx 20rpx;
  }
  .footer {
    font-size: 22rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    text-align: center;
  }
</style>
