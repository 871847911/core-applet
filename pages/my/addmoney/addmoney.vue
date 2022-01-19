<template>
  <view class="warp">
    <view class="content">
      <view class="title">追加保证金</view>
      <view class="flex-box">
        <view
          @click="activeKey = index"
          :class="{
            active: activeKey === index,
          }"
          class="priceBox"
          v-for="(c, index) in 6"
          :key="index"
        >
          {{ (index + 1) * 1000 }}
        </view>
      </view>
      <view class="title">增加后的额外权益</view>
      <view class="shouyi">
        <view class="left">金米粒</view>
        <view class="right">+{{ (activeKey + 1) * 1000 }}</view>
      </view>
      <view class="shouyi">
        <view class="left">平台房费</view>
        <view class="right">+{{ (activeKey + 1) * 1000 }}</view>
      </view>
      <view class="title">缴费记录</view>
      <view class="list-order" v-for="item in 2">
        <view class="list-order-left">
          <view class="list-order-one">+5000</view>
          <view class="list-order-two">有效期：2021-03-20 13:24:22</view>
        </view>
        <view class="list-order-right" @click="goedit">
          <view class="tuikuan">申请退款</view>
        </view>
      </view>
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
        // uni.navigateTo({
        //   url: '../newaddress/newaddress',
        // })
        const params = {}
        this.$api.home.rechargeAdd().then((res) => {})
      },
      // 编辑地址
      goedit() {
        uni.navigateTo({
          url: '../tuikuan/tuikuan',
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
  .title {
    clear: both;
    font-size: 34rpx;
    color: #333333;
    padding: 20rpx 0;
  }
  .shouyi {
    padding: 10rpx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex-box {
    clear: both;
    .priceBox {
      width: 30%;
      padding: 50rpx 0;
      float: left;
      text-align: center;
      line-height: 32rpx;
      margin-right: 3%;
      background: #fafafa;
      font-size: 34rpx;
      margin-bottom: 20rpx;
    }
    .active {
      background: rgba(0, 187, 204, 0.1);
      font-weight: 500;
      color: #00bbcc;
    }
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
  .list-order {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0;
    align-items: center;
    border-top: 1rpx solid #f5f5f5;
    .list-order-left {
      .list-order-one {
        outline-offset: 30rpx;
        color: #333;
        font-weight: 700;
        font-family: PingFangSC-Regular, PingFang SC;
        margin-bottom: 10rpx;
      }
      .list-order-two {
        font-size: 24rpx;
        color: #999;
      }
    }
    .list-order-right {
      outline-offset: 28rpx;
      color: #333;
      font-weight: 700;
      .tuikuan {
        width: 152rpx;
        height: 60rpx;
        background: #14cc70;
        border-radius: 6px;
        text-align: center;
        line-height: 60rpx;
        color: #fff;
      }
    }
  }
</style>
