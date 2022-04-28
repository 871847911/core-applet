<template>
  <view class="warp">
    <view class="card">
      <view class="card-one">
        <view class="card-one-left">
          <image :src="`${BASE_API}/sysFileInfo/preview?id=${Details.pic_id}`" mode=""></image>
        </view>
        <view class="card-one-right">
          <view class="card-one-right-one"> {{ Details.main_title }}</view>
          <view v-if="Details.room_name" class="card-one-right-two"
            >{{ Details.room_name }} *{{ Details.quantity }}</view
          >
          <view v-if="Details.order_type == 2" class="card-one-right-two"
            >{{ Details.plan_dt }}入住至{{ Details.plan_dt }}</view
          >
          <view class="price"
            ><image src="../../static/icon.png"></image
            ><text>{{ Details.product_price }}</text></view
          >
        </view>
      </view>
    </view>
    <view v-if="Details.order_type === 2" class="information">
      <view class="information-title"> 入住信息 </view>
      <view class="information-one">
        <view class="information-one-left"> 入住人 </view>
        <view>{{ Details.name }}</view>
      </view>
      <view class="information-one">
        <view class="information-one-left"> 手机号 </view>
        <view>{{ Details.phone }}</view>
      </view>
      <view class="information-one">
        <view class="information-one-left"> 订单号 </view>
        <view>{{ Details.order_id }}</view>
      </view>
    </view>
    <view v-else class="information">
      <view class="information-title"> 购买信息 </view>
      <view class="information-one">
        <view class="information-one-left"> 购买人 </view>
        <view>{{ USERINFO.name }}</view>
      </view>
      <view class="information-one">
        <view class="information-one-left"> 手机号 </view>
        <view>{{ USERINFO.phone }}</view>
      </view>
      <view class="information-one">
        <view class="information-one-left"> 订单号 </view>
        <view>{{ Details.order_id }}</view>
      </view>
    </view>

    <view class="footer">
      <view
        v-if="Details.order_status === 2 && num === 1"
        @click.stop="ruzhu(Details.id)"
        class="footer-right"
      >
        确认入住
      </view>
      <view
        v-if="Details.order_status === 0 && num === 1"
        @click.stop="queren(Details.id)"
        class="footer-right"
      >
        确认有房
      </view>
      <view
        v-if="[6].includes(Details.order_status) && num === 0"
        @click.stop="quxiaosq(Details.id)"
        class="footer-right"
      >
        取消申请
      </view>
      <view
        v-if="Details.order_status === 0 && num === 1"
        @click.stop="judan(Details.id)"
        class="footer-right"
      >
        拒单
      </view>
      <view
        v-if="Details.order_status === 0 && num === 0"
        @click.stop="tuikuan(Details.id)"
        class="footer-right"
      >
        申请退款
      </view>
      <view
        v-if="Details.order_status === 3"
        @click.stop="confirmCheckOut(Details.id)"
        class="footer-right"
      >
        确认离店
      </view>
      <view class="footer-right" @click.stop="tunquan(Details.product_id)"> 我要囤券 </view>
    </view>
    <u-modal
      v-model="modalShow"
      title="退款原因"
      confirm-color="#00bbcc"
      show-cancel-button
      @confirm="tuikuanConfirm"
      @cancel="tuikuanCancel"
    >
      <view :style="{ padding: '20rpx' }" class="slot-content">
        <u-input
          v-model="tuikaunyy"
          border
          :placeholder-style="'color: #c0c4cc'"
          type="textarea"
          placeholder=" "
        />
      </view>
    </u-modal>
  </view>
</template>

<script>
  import config from '@/common/config.js'
  import { mapState } from 'vuex'
  const { BASE_API } = config
  export default {
    data() {
      return {
        BASE_API: BASE_API,
        Details: {},
        num: 0,
        tuikaunyy: '',
        modalShow: false,
      }
    },
    onLoad(option = {}) {
      this.Details = uni.getStorageSync('ORDER_DETAILS')
      this.num = (uni.getStorageSync('ORDER_DETAILS') || {}).num || 0
    },
    computed: {
      ...mapState({
        IS_LOGIN: (state) => state.IS_LOGIN, //登陆状态
        USERINFO: (state) => state.USERINFO, //用户信息
      }),
    },
    methods: {
      quxiaosq(orderId) {
        uni.showModal({
          title: '提示',
          content: '确定取消退款申请？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.cancelApplyRefund({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      getData() {
        uni.navigateBack()
      },
      getRoomDetail(id, activityId) {},
      gosubmit() {},
      tuikuanConfirm() {
        if (!this.tuikaunyy) return uni.showToast({ title: '退款原因不能为空', icon: 'none' })
        this.$api.home
          .orderRefundInfoAdd({
            orderId: this.checkedId.order_id,
            id: this.checkedId.id,
            refundReason: this.tuikaunyy,
          })
          .then((res = []) => {
            uni.showToast({ title: '操作成功～' })
            this.getData()
          })
      },
      tuikuanCancel() {
        this.tuikaunyy = ''
        this.checkedId = ''
      },
      tuikuan(id) {
        this.tuikaunyy = ''
        this.checkedId = id
        this.modalShow = true
      },
      judan(orderId) {
        uni.showModal({
          title: '提示',
          content: '是否拒绝此订单？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.refuseCheckIn({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      ruzhu(orderId) {
        uni.showModal({
          title: '提示',
          content: '是否确认客户已入住？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.checkInOrderCheckIn({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      confirmCheckOut(orderId) {
        uni.showModal({
          title: '提示',
          content: '是否确认客户已离店？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.confirmCheckOut({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      goDetails(item) {
        if (item.order_type != 2) return
        uni.setStorageSync('ORDER_DETAILS', { ...item, num: this.num })
        uni.navigateTo({
          url: `/pages/orders/orderDetails`,
        })
      },
      tunquan(id) {
        console.log(id)
        uni.navigateTo({
          url: `/pages/one/yuyue/yuyue?id=${id}`,
        })
      },
      queren(orderId) {
        uni.showModal({
          title: '提示',
          content: '是否确认有房？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.confirmCheckIn({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
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
    align-items: center;
    justify-content: flex-end;
    .footer-left {
      color: #ff7919;
      font-size: 24rpx;
      display: flex;
      align-items: center;
      margin-left: 8rpx;
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
      margin-left: 8rpx;
    }
  }
  .price {
    font-size: 32rpx;
    font-weight: 500;
    color: #ff2d19;
    display: flex;
    align-items: center;
    padding-top: 10rpx;
    image {
      width: 42rpx;
      height: 42rpx;
      margin-right: 8rpx;
    }
  }
</style>
