<template>
  <view class="warp">
    <view class="content">
      <view class="title">本次退款</view>
      <view class="price">1400</view>
      <view class="title">备注</view>
      <textarea placeholder="请具体描述本次退还保证金原因" class="textarea"></textarea>
    </view>
    <view class="footer">
      <view class="footer-one" @click="gonewaddress()"> 确定 </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        activeKey: 0,
      }
    },
    methods: {
      gonewaddress() {
        uni.navigateTo({
          url: '../newaddress/newaddress',
        })
      },
      // 编辑地址
      goedit() {
        uni.navigateTo({
          url: '../editaddress/editaddress',
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    padding: 32rpx;
    height: 100vh;
    background-color: #f5f5f5;
  }
  .content {
    padding: 20rpx;
    background: #fff;
    border-radius: 20rpx;
  }
  .title {
    font-size: 28rpx;
    padding: 20rpx 0;
  }
  .price {
    font-size: 60rpx;
  }
  .textarea {
    width: 100%;
    height: 400rpx;
    border: 2rpx solid #f5f5f5;
    padding: 20rpx;
  }
  .footer {
    height: 100rpx;
    position: fixed;
    bottom: 70rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer-one {
      height: 80rpx;
      width: 686rpx;
      line-height: 80rpx;
      text-align: center;
      color: #fff;

      background: linear-gradient(270deg, #3dcccc 0%, #00bbcc 100%);
      border-radius: 40rpx;
    }
  }
</style>
