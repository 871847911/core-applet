<template>
  <view class="warp">
    <view class="content">
      <view class="card">
        <!-- <view class="card-title">
          <view class="card-title-left">
            <image src="../../../static/images/编组%202@2x%20-%20万能看图王.png" mode=""></image
            >当前余额（元）
          </view>
          <view class="card-title-right" @click="gotrade()">明细 </view>
        </view>
        <view class="card-one"> ￥<text>100</text> </view>
        <view class="card-flex">
          <view class="child flex-left">待结算：<text>¥1290.00</text></view>
          <view class="child flex-right">已结算：<text>¥1290.00</text></view>
        </view>
        <view class="getMoney">立即提现</view> -->
        <view class="card-two">
          <view class="card-two-one">
            <view class="card-two-two">{{ dataSourse.gold || 0.0 }}</view>
            <view class="card-two-three"> 金米粒 </view>
          </view>
          <view class="card-two-one">
            <view class="card-two-two">{{ dataSourse.roomRate || 0.0 }}</view>
            <view class="card-two-three"> 平台房费 </view>
          </view>
          <view class="card-two-one">
            <view class="card-two-two">{{ dataSourse.guaranteeMoney || 0.0 }}</view>
            <view class="card-two-three"> 保证金 </view>
          </view>
        </view>
      </view>

      <view class="list">
        <view class="list-title">
          <view class="list-title-left"> 其他资产 </view>
          <view class="list-title-right">
            <view @click="gotrade()">明细 </view>
          </view>
        </view>
        <view class="list-order">
          <view class="list-order-left">
            <view class="list-order-one">金米粒</view>
          </view>
          <view class="list-order-right"
            >不足100，尽快前往补足<image src="@/static/images/全部.png" mode=""></image
          ></view>
        </view>
        <view class="list-order">
          <view class="list-order-left">
            <view class="list-order-one">房费</view>
          </view>
          <view class="list-order-right"
            ><image src="@/static/images/全部.png" mode=""></image
          ></view>
        </view>
        <view class="list-order" @click="goAddMoney">
          <view class="list-order-left">
            <view class="list-order-one">保证金</view>
          </view>
          <view class="list-order-right"
            ><image src="@/static/images/全部.png" mode=""></image
          ></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        dataSourse: {},
      }
    },
    onShow() {
      this.getMoney()
    },
    methods: {
      goAddMoney() {
        uni.navigateTo({
          url: '../addmoney/addmoney',
        })
      },
      getMoney() {
        this.$api.login.statisticsBill().then((res) => {
          this.dataSourse = res || {}
        })
      },
      gotrade() {
        uni.navigateTo({
          url: '../trade/trade',
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    height: 100vh;
    background-color: #f5f5f5;
  }
  .card-title-right {
    text-align: right;
    font-size: 28rpx;
    color: #999;
  }
  .content {
    padding: 20rpx 32rpx;
  }
  .card {
    padding: 20rpx;
    background-color: #fff;
    border-radius: 10rpx;
    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-title-left {
        font-size: 28rpx;
        color: #333;
        display: flex;
        align-items: center;
        image {
          width: 34rpx;
          height: 34rpx;
          margin-right: 6rpx;
        }
      }
      .card-title-right {
        font-size: 28rpx;
        color: #999;
      }
    }
    .card-one {
      color: #ff4d00;
      font-size: 24rpx;
      margin-top: 10rpx;
      text {
        font-size: 40rpx;
        font-weight: 700;
      }
    }
    .card-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30rpx;
      .child {
        font-size: 26rpx;
        color: #333;
        text {
          color: #ff7919;
        }
      }
    }
    .getMoney {
      width: 400rpx;
      height: 80rpx;
      background: #00bbcc;
      border-radius: 10rpx;
      text-align: center;
      line-height: 80rpx;
      color: #fff;
      margin: 0 auto;
      margin-top: 30rpx;
    }
    .card-two {
      display: flex;
      justify-content: space-between;
      padding: 30rpx 20rpx 0;
      .card-two-one {
        display: flex;
        flex-direction: column;
        align-items: center;
        .card-two-two {
          margin-bottom: 10rpx;
          font-size: 32rpx;
          height: 40rpx;
          color: #333;
          font-weight: 700;
          font-family: PingFangSC-Medium, PingFang SC;
          image {
            width: 44rpx;
            height: 44rpx;
          }
        }
        .card-two-three {
          font-size: 20rpx;

          color: #999;
          font-family: PingFangSC-Regular, PingFang SC;
        }
      }
    }
    .card-image {
      width: 48rpx;
      height: 48rpx;
      position: absolute;
      right: 20rpx;
      top: 20rpx;
      image {
        width: 48rpx;
        height: 48rpx;
      }
    }
  }

  .list {
    padding: 20rpx;
    background-color: #fff;
    border-radius: 10rpx;
    margin-top: 20rpx;
    .list-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20rpx;
      .list-title-left {
        font-size: 28rpx;
        color: #333;
        font-weight: 700;
      }
      .list-title-right {
        font-size: 26rpx;
        color: #999;
        display: flex;
        align-items: center;
        image {
          width: 40rpx;
          height: 40rpx;
        }
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
          outline-offset: 28rpx;
          color: #333;
          font-weight: 400;
          font-family: PingFangSC-Regular, PingFang SC;
          margin-bottom: 10rpx;
        }
        .list-order-two {
          font-size: 24rpx;
          color: #999;
        }
      }
      .list-order-right {
        outline-offset: 26rpx;
        color: #999;
        display: flex;
        align-items: center;
        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
    }
  }
</style>
