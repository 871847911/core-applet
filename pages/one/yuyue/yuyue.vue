<template>
  <view class="warp">
    <view class="card">
      <view class="card-one">
        <view class="card-one-left">
          <image :src="`${BASE_API}/sysFileInfo/preview?id=${roomDetail.picId}`" mode=""></image>
        </view>
        <view class="card-one-right">
          <view class="card-one-right-one">
            {{ roomDetail.mainTitle }}{{ roomDetail.viceTitle }}</view
          >
          <view class="card-one-right-two">{{ roomDetail.description }}</view>
        </view>
      </view>
    </view>
    <view class="information">
      <view class="information-one">
        <view class="information-one-left"> 房券数量 </view>
        <u-number-box v-model="num" :min="1" :max="roomDetail.defaultStock"></u-number-box>
      </view>
    </view>
    <view class="information">
      <view class="information-title"> 购买信息 </view>
      <view class="information-one">
        <view class="information-one-left"> 购买人 </view>
        <u-input placeholder="请填购买人姓名" v-model="userName" />
      </view>
      <view class="information-one">
        <view class="information-one-left"> 手机号 </view>
        <u-input
          style="flex: 1"
          maxlength="11"
          placeholder="用于接受通知，请填写真实号码"
          v-model="phone"
        />
      </view>
    </view>

    <view class="footer">
      <view class="footer-left">
        <image src="/static/icon.png"></image><text>{{ Number(goldAmt) * num }}</text></view
      >
      <view class="footer-right" @tap="gosubmit()"> 提交订单 </view>
    </view>
  </view>
</template>

<script>
  import config from '@/common/config.js'
  const { BASE_API } = config
  export default {
    data() {
      return {
        BASE_API: BASE_API,
        phoneShow: false,
        num: 1,
        roomDetail: {},
        packRoomList: {},
        phone: '',
        userName: '',
        activityId: '',
        goldAmt: 0,
      }
    },
    onLoad(option = {}) {
      this.activityId = option.activityId || ''
      this.getRoomDetail(option.id, option.activityId, option.activityFlag)
    },
    methods: {
      getPrice() {
        let params = {
          bnbId: this.roomDetail.bnbId,
          orderType: 1,
          payType: 1,
          phone: this.phone,
          productId: this.roomDetail.id,
          activityId: this.activityId,
          quantity: this.num,
        }
        this.$api.home.validateOrder(params).then((res = {}) => {
          this.goldAmt = res.goldAmt
        })
      },
      getRoomDetail(id, activityId, activityFlag) {
        let params = {
          packId: id,
        }
        if (activityId) {
          params = {
            ...params,
            activityId,
          }
        }
        if (activityFlag) {
          params = {
            ...params,
            activityFlag: 'Y',
          }
        }
        this.$api.home.packDetail(params).then((res = {}) => {
          this.roomDetail = res.packDetail || {}
          this.packRoomList = res.packRoomList || []
          this.getPrice()
        })
      },
      gosubmit() {
        var myreg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
        if (!myreg.test(this.phone)) {
          return uni.showToast({ title: '请填写正确的手机号码', icon: 'none' })
        }
        uni.showModal({
          title: '提示',
          content: '是否确认支付',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              let params = {
                bnbId: this.roomDetail.bnbId,
                orderType: 1,
                payType: 1,
                phone: this.phone,
                productId: this.roomDetail.id,
                submitFlag: 'Y',
                activityId: this.activityId,
                quantity: this.num,
              }
              this.$api.home.validateOrder(params).then((res = {}) => {
                uni.showToast({ title: '购买成功～' })
                setTimeout(() => {
                  uni.navigateBack()
                }, 1500)
              })
            }
          },
        })

        // this.$api.home.mainPageOrder(params).then((res = {}) => {
        //
        // })
      },
    },
  }
</script>

<style scoped lang="scss">
  .information {
    padding: 20rpx 20rpx 0 20rpx;
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
      border-bottom: 1rpx solid #f5f5f5;
      .information-one-left {
        width: 150rpx;
      }
    }
    .information-two {
      display: flex;
      padding: 20rpx 20rpx;
      align-items: center;
      border-bottom: 1rpx solid #f5f5f5;
      justify-content: space-between;
      .flex_a {
        display: flex;
        align-items: center;
        image {
          width: 42rpx;
          height: 42rpx;
          margin-right: 8rpx;
        }
      }
      .information-one-left {
        width: 150rpx;
      }
    }
  }
  .active {
    background: rgba(0, 187, 204, 0.1) !important;
    border: 2rpx solid #00bbcc;
    color: #00bbcc !important;
  }
  .warp {
    background-color: #f5f5f5;
    padding: 20rpx 32rpx;
    height: 100vh;
    font-family: PingFangSC-Regular, PingFang SC;
  }
  .card {
    padding: 20rpx;
    width: 686rpx;
    background-color: #fff;
    border-radius: 10rpx;
    margin: 0rpx 0rpx 20rpx 0;
    .card-one {
      display: flex;
      justify-content: space-between;
      .card-one-left {
        width: 280rpx;
        height: 220rpx;
        image {
          width: 280rpx;
          height: 220rpx;
        }
      }
      .card-one-right {
        // margin-left: 20rpx;
        letter-spacing: 0rpx;
        width: 346rpx;
        .card-one-right-one {
          font-size: 28rpx;
          color: #333;
          margin-bottom: 10rpx;
        }
        .card-one-right-two {
          font-size: 24rpx;
          color: #999;
        }
      }
    }
    .card-two {
      margin: 20rpx 0;
      display: flex;
      justify-content: space-between;
      .card-two-first {
        width: 148rpx;
        height: 108rpx;
        border-radius: 4rpx;
        border: 2rpx solid #e6e6e6;
        padding: 20rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 24rpx;
        .card-two-top {
          color: #666;
        }
        .card-two-bottom {
          color: #999;
        }
      }
      .card-two-second {
        width: 148rpx;
        height: 108rpx;
        background: rgba(255, 77, 0, 0.1);
        border-radius: 4rpx;
        padding: 20rpx;
        .card-two-second-bottom {
          font-size: 24rpx;
          color: #ff4d00;
        }
      }
    }

    .card-three {
      font-size: 24rpx;
      color: #999;
    }
  }

  .footer {
    width: 100%;
    background-color: #fff;
    padding: 20rpx 32rpx 68rpx 32rpx;
    position: fixed !important;
    left: 0;
    bottom: 0rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-left {
      color: #ff7919;
      font-size: 24rpx;
      display: flex;
      align-items: center;
      image {
        width: 42rpx;
        height: 42rpx;
        margin-right: 8rpx;
      }
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
