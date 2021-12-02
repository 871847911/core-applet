<template>
  <u-form :model="form" ref="uForm">
    <view class="warp">
      <view class="content">
        <view class="card">
          <view class="card-left">
            <image src="../../../static/images/house.png" mode=""></image>
          </view>
          <view class="card-right">
            <view class="card-right-one"> 遇染民宿酒店（杭州湖滨店） </view>
            <view class="card-right-two"> 温馨家庭房 </view>
            <view class="card-right-three">
              <text>03/18入住</text>
              <text>至</text>
              <text>03/19离店</text>
              <text>1晚</text>
            </view>
            <view class="card-right-four">
              <text>398</text>
            </view>
          </view>
        </view>

        <view class="num">
          <view class="num-left"> 房间数量 </view>
          <view class="num-right">
            <u-number-box v-model="value" @change="valChange"></u-number-box>
          </view>
        </view>

        <view class="information">
          <view class="information-title"> 入住信息 </view>
          <view class="information-one">
            <view class="information-one-left"> 入住人 </view>
            <u-input placeholder="请填写实际入住人姓名" v-model="form.name" />
          </view>
          <view class="information-one">
            <view class="information-one-left"> 手机号 </view>
            <u-input placeholder="用于接受通知，请填写真实号码" v-model="form.intro" />
          </view>
          <view class="information-one">
            <view class="information-one-left"> 预计到店 </view>
            <u-input value="8:00" />
            <u-icon
              name="arrow-right"
              style="margin-left: 160rpx"
              @click="timeShow = true"
            ></u-icon>
          </view>
          <view class="information-one">
            <view class="information-one-left"> 备注 </view>
            <u-input placeholder="选填，请先与客服协调一致" v-model="form.sex" />
          </view>
        </view>

        <!-- 发票 -->
        <view class="invoice">
          <view class="invoice-left"> 发票 </view>
          <view class="invoice-right"> 发票请到酒店前台索取，可提供普票 </view>
        </view>

        <!-- 支付方式 -->
        <view class="mode">
          <view class="mode-title"> 支付方式 </view>
          <view class="mode-one">
            <view class="mode-one-left"> 金米粒支付 </view>
            <view class="mode-one-right">
              <image src="../../../static/tabbar/my-selected.png" mode=""></image>
            </view>
          </view>
          <view class="mode-one">
            <view class=""> 房券抵扣 </view>
            <view class="mode-one-right">
              <image src="../../../static/tabbar/my-selected.png" mode=""></image>
            </view>
          </view>
        </view>
        <!-- 下单说明 -->
        <view class="explain">
          <view class="explain-one"> 下单说明 </view>
          <view class="explain-two">
            订单提交成功并支付后，商家将尽快处理订单，如若有延迟，敬请见谅。若商户拒单，支付款项及资产将原路返回至您的账户，到账时间以各支付通道退款处理时间为准。
          </view>
          <view class="explain-one"> 改退政策 </view>
          <view class="explain-two" style="margin-bottom: 120rpx">
            订单提交成功并支付后，商家将尽快处理订单，如若有延迟，敬请见谅。若商户拒单，支付款项及资产将原路返回至您的账户，到账时间以各支付通道退款处理时间为准。
          </view>
        </view>
      </view>
      <!-- 选择到店时间 -->
      <u-picker v-model="timeShow" title="当天预计到店时间" :list="list"></u-picker>
      <view class="footer">
        <view class="footer-left"> <text>398</text>.00 </view>
        <view class="footer-one">
          明细<image src="../../../static/images/立即抢购@2x.png" mode=""></image>
        </view>
        <view class="footer-right" @tap="goresults()"> 提交订单 </view>
      </view>
    </view>
  </u-form>
</template>

<script>
  export default {
    data() {
      return {
        timeShow: false,
        list: [
          {
            value: '1',
            label: '12:00',
          },
          {
            value: '2',
            label: '13:00',
          },
          {
            value: '3',
            label: '14:00',
          },
          {
            value: '4',
            label: '15:00',
          },
        ],
      }
    },
    methods: {
      goresults() {
        uni.showModal({
          title: '您确定要支付吗',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              uni.navigateTo({
                //跳转页面
                url: '../resultssuccess/resultssuccess',
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
              uni.navigateTo({
                //跳转页面
                url: '../resultsfail/resultsfail',
              })
            }
          },
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
    font-family: PingFangSC-Medium, PingFang SC;
  }
  .content {
    padding: 20rpx 32rpx;
    .card {
      width: 686rpx;
      padding: 40rpx 20rpx;
      display: flex;
      background-color: #fff;
      border-radius: 10rpx;
      .card-left {
        width: 188rpx;
        height: 188rpx;
        margin-right: 20rpx;
        image {
          width: 188rpx;
          height: 188rpx;
        }
      }
      .card-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .card-right-one {
          font-size: 28rpx;
          color: #333;
        }
        .card-right-two {
          font-size: 24rpx;
          color: #999;
        }
        .card-right-three {
          font-size: 24rpx;
          color: #999;
          text {
            margin-right: 10rpx;
          }
        }
        .card-right-four {
          font-size: 24rpx;
          color: #ff2d19;
          text {
            font-size: 32rpx;
            font-weight: 700;
          }
        }
      }
    }

    .num {
      width: 686rpx;
      height: 100rpx;
      padding: 0 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      margin: 20rpx 0;
      .num-left {
        font-size: 28rpx;
        color: #333;
      }
      .num-right {
      }
    }

    .information {
      padding: 20rpx;
      background-color: #fff;
      .information-title {
        font-size: 28rpx;
        color: #333;
        margin-bottom: 20rpx;
      }
      .information-one {
        display: flex;
        padding: 20rpx 0;
        align-items: center;
        border-top: 1rpx solid #f5f5f5;
        .information-one-left {
          width: 150rpx;
        }
      }
    }
    .invoice {
      display: flex;
      justify-content: space-between;
      width: 686rpx;
      height: 80rpx;
      align-items: center;
      font-size: 28rpx;
      background-color: #fff;
      padding: 0 20rpx;
      margin: 20rpx 0;
      .invoice-left {
        color: #666;
      }
      .invoice-right {
        color: #333;
      }
    }

    .mode {
      padding: 20rpx;
      background-color: #fff;
      font-size: 28rpx;
      border-radius: 10rpx;
      .mode-title {
        color: #333;
        margin-bottom: 20rpx;
      }
      .mode-one {
        color: #666;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20rpx 0;
        border-top: 1rpx solid #f5f5f5;
        .mode-one-left {
        }
        .mode-one-right {
          width: 40rpx;
          height: 40rpx;
          image {
            width: 40rpx;
            height: 40rpx;
          }
        }
      }
    }

    .explain {
      padding: 20rpx;
      .explain-one {
        font-size: 28rpx;
        color: #333;
      }
      .explain-two {
        font-size: 24rpx;
        color: #666;
        margin: 10rpx 0 40rpx;
      }
    }
  }
  .footer {
    width: 100%;
    height: 100rpx;
    background-color: #fff;
    position: fixed !important;
    bottom: 0rpx;
    display: flex;
    padding: 0 32rpx;
    justify-content: space-between;
    align-items: center;
    .footer-left {
      color: #ff7919;
      font-size: 24rpx;
      text {
        font-size: 40rpx;
        font-weight: 700;
      }
    }
    .footer-one {
      font-size: 22rpx;
      color: #999;
      display: flex;
      margin-right: 250rpx;
      image {
        width: 32rpx;
        height: 32rpx;
      }
    }
    .footer-right {
      width: 216rpx;
      height: 80rpx;
      background: linear-gradient(90deg, #ff2d19 0%, #ff6619 100%);
      border-radius: 39rpx;
      line-height: 80rpx;
      text-align: center;
      color: #fff;
      font-size: 28rpx;
    }
  }
</style>
