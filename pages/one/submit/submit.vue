<template>
  <u-form :model="form" ref="uForm">
    <view class="warp">
      <view class="content">
        <view class="card">
          <view class="card-left">
            <image :src="`${BASE_API}/sysFileInfo/preview?id=${roomDetail.picId}`" mode=""></image>
          </view>
          <view class="card-right">
            <view class="card-right-one">
              {{ roomDetail.mainTitle }}{{ roomDetail.viceTitle }}
            </view>
            <view class="card-right-two"> {{ packRoomList[fx].roomName }} </view>
            <view class="card-right-three">
              <text>{{ startData }}入住</text>
              <text>至</text>
              <text>{{ endData }}离店</text>
              <text>{{ roomDetail.dayCount }}晚</text>
            </view>
            <view class="card-right-four">
              <image src="/static/icon.png"></image>
              <text>{{ payDetails.originalAmt }}</text>
            </view>
          </view>
        </view>

        <!-- <view class="num">
          <view class="num-left"> 房间数量 </view>
          <view class="num-right">
            <u-number-box v-model="num" :min="1" :max="roomDetail.defaultStock"></u-number-box>
          </view>
        </view> -->

        <view class="information">
          <view class="information-title"> 入住信息 </view>
          <view class="information-one">
            <view class="information-one-left"> 入住人 </view>
            <u-input style="flex: 1" placeholder="请填写实际入住人姓名" v-model="name" />
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
          <view class="information-one">
            <view class="information-one-left"> 预计到店 </view>
            <u-input style="flex: 1" v-model="adTime" />
          </view>
          <view class="information-one">
            <view class="information-one-left"> 备注 </view>
            <u-input style="flex: 1" placeholder="选填，请先与客服协调一致" v-model="remark" />
          </view>
        </view>
        <u-popup v-model="phoneShow" mode="bottom" height="400">
          <view class="information">
            <view class="information-two">
              <view class=""> 在线支付 </view>
              <view class="flex_a"
                ><image src="/static/icon.png"></image><text>{{ payDetails.payAmt }}</text></view
              >
            </view>
            <view class="information-two">
              <view class=""> 原价 </view>
              <view class="flex_a"
                ><image src="/static/icon.png"></image
                ><text>{{ payDetails.originalAmt }}</text></view
              >
            </view>
            <view class="information-two">
              <view class="">房券抵扣 </view>
              <view class="flex_a"
                ><image src="/static/icon.png"></image
                ><text>{{
                  (payDetails.couponDetail && payDetails.couponDetail.amount) || 0
                }}</text></view
              >
            </view>
            <!-- <view class="information-two">
              <view class=""> 膨胀金抵扣 </view>
              <view class="flex_a"
                ><image src="/static/icon.png"></image
                ><text>{{ roomDetail.defaultPrice + packRoomList[fx].addPrice }}</text></view
              >
            </view> -->
          </view>
        </u-popup>
        <!-- 发票 -->
        <view class="invoice">
          <view class="invoice-left"> 发票 </view>
          <view class="invoice-right"> 发票请到酒店前台索取，可提供普票 </view>
        </view>
        <!-- 支付方式 -->
        <view class="mode">
          <view class="mode-title"> 支付方式 </view>
          <u-radio-group active-color="#ff7919" v-model="payType" @change="payTypeChange">
            <u-radio
              :disabled="item.disabled"
              :key="item.name"
              v-for="item in payTypelist"
              :name="item.name"
            >
              {{ item.name }}
            </u-radio>
            <!-- <u-radio :disabled="!couponIdList.length" :name="'房券抵扣'">
              房券抵扣{{ !couponIdList.length }}
            </u-radio> -->
          </u-radio-group>
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
      <view class="footer">
        <view class="footer-left"
          ><image src="/static/icon.png"></image><text>{{ payDetails.payAmt }}</text></view
        >
        <view class="footer-one" @click="phoneShow = true">
          明细<image src="../../../static/images/立即抢购@2x.png" mode=""></image>
        </view>
        <view class="footer-right" @tap="goresults()"> 提交订单 </view>
      </view>
    </view>
  </u-form>
</template>

<script>
  import config from '@/common/config.js'
  import moment from 'moment'
  const { BASE_API } = config
  export default {
    data() {
      return {
        BASE_API: BASE_API,
        num: 1,
        phoneShow: false,
        payType: '金米粒支付',
        payTypelist: [
          {
            name: '金米粒支付',
            disabled: false,
          },
          {
            name: '房券抵扣',
            disabled: true,
          },
        ],
        fx: 0,
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
        roomDetail: {},
        packRoomList: [],
        selectDate: '',
        startData: '',
        endData: '',
        name: '',
        phone: '',
        remark: '',
        adTime: '',
        couponIdList: [],
        payDetails: {},
      }
    },
    onLoad(option = {}) {
      this.getRoomDetail(option.id, option.selectDate)
      this.fx = option.fx
      this.selectDate = option.selectDate
    },
    methods: {
      payTypeChange(e) {
        console.log(e)
        if (e === '房券抵扣') {
          this.getPrice((this.couponIdList[0] || {}).id)
        } else {
          this.getPrice()
        }
      },
      radioChange(e) {
        console.log(e)
      },
      getRoomDetail(id, selectDate) {
        this.$api.home.packDetail({ packId: id }).then((res = {}) => {
          this.roomDetail = res.packDetail || {}
          this.packRoomList = res.packRoomList || []
          this.startData = moment(selectDate).format('MM/DD')
          this.endData = moment(selectDate)
            .subtract(0 - res.packDetail.dayCount, 'days')
            .format('MM/DD')
          this.$nextTick(() => {
            this.getPrice()
            this.getFq()
          })
        })
      },
      getPrice(couponId) {
        let params = {
          planDate: moment(this.selectDate).format('YYYY/MM/DD'),
          productId: this.roomDetail.id,
          roomId: this.packRoomList[this.fx].id,
        }
        if (couponId) {
          params = {
            ...params,
            couponId,
          }
        }
        this.$api.home.validateCheckInOrder(params).then((res = {}) => {
          this.payDetails = res
        })
      },
      getFq() {
        let params = {
          productId: this.roomDetail.id,
          status: 0,
        }
        this.$api.home.queryCoupon(params).then((res = {}) => {
          this.couponIdList = res.couponDetailList || []
          if (res.couponDetailList && res.couponDetailList.length > 0) {
            this.payTypelist = [
              {
                name: '金米粒支付',
                disabled: false,
              },
              {
                name: '房券抵扣',
                disabled: false,
              },
            ]
          }
        })
      },
      goresults() {
        if (!this.name || !this.phone)
          return uni.showToast({ title: '请填写入住信息', mask: true, icon: 'none' })
        var myreg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
        if (!myreg.test(this.phone)) {
          return uni.showToast({ title: '请填写正确的手机号码', icon: 'none' })
        }
        uni.showModal({
          title: '您确定要支付吗',
          success: (res) => {
            if (res.confirm) {
              let params = {
                planDate: moment(this.selectDate).format('YYYY/MM/DD'),
                productId: this.roomDetail.id,
                roomId: this.packRoomList[this.fx].id,
                submitFlag: 'Y',
                name: this.name,
                phone: this.phone,
              }
              if (this.payType !== '金米粒支付') {
                params = {
                  ...params,
                  couponId: (this.couponIdList[0] || {}).id,
                }
              }
              this.$api.home.validateCheckInOrder(params).then((res) => {
                uni.showToast({ title: '购买成功～' })
                setTimeout(() => {
                  uni.switchTab({
                    url: '/pages/orders/orders',
                  })
                }, 1500)
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
          display: flex;
          align-items: center;
          image {
            width: 42rpx;
            height: 42rpx;
            margin-right: 8rpx;
          }
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
    background-color: #fff;
    position: fixed !important;
    bottom: 0rpx;
    display: flex;
    padding: 20rpx 32rpx 68rpx 32rpx;
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
