<template>
  <u-form :model="form" ref="uForm">
    <view class="warp">
      <view class="content" @click="show = true">
        <view class="map">
          <view class="map-left">
            <u-icon name="map" color="#FF4D00" size="40" style="margin-right: 12rpx"></u-icon>
            添加收获地址
          </view>
          <view class="map-right">
            <u-icon name="arrow-right" color="#999" size="26"></u-icon>
          </view>
        </view>
        <view class="maps">
          <view class="left">
            <view class="map-left">
              <u-icon name="map" color="#FF4D00" size="40" style="margin-right: 12rpx"></u-icon>
              <text class="text1">赵铁柱</text><text class="text1">156****8799</text>
            </view>
            <view class="map-right">
              修改<u-icon name="arrow-right" color="#999" size="26"></u-icon>
            </view>
          </view>
          <view class="right"> 浙江省杭州市广宇万科公园里18号楼1单元10楼101室 </view>
        </view>
        <view class="card">
          <view class="card-img">
            <image src="../../../static/images/house.png" mode=""></image>
          </view>
          <view class="card-right">
            <view class="card-right-one">
              春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
            </view>
            <view class="card-right-two">
              <view class="card-right-two-left"> 白色XL </view>
              <view class="card-right-two-right"> *1 </view>
            </view>
            <view class="card-right-three">
              <view class="card-right-three-left"> ￥<text>88</text> </view>
              <view class="card-right-three-right">
                <u-number-box v-model="value" @change="valChange"></u-number-box>
              </view>
            </view>
          </view>
        </view>
        <view class="details">
          <view class="details-one">
            <view class="details-one-left"> 商品金额 </view>
            <view class="details-one-right"> ￥88.00 </view>
          </view>
          <view class="details-one">
            <view class="details-one-left"> 运费 </view>
            <view class="details-one-right"> ￥0.00 </view>
          </view>
          <view class="details-one">
            <view class="details-one-left"> 房券 </view>
            <view class="details-one-right" style="color: #999">
              无可用 <u-icon name="arrow-right" color="#999" size="26"></u-icon>
            </view>
          </view>

          <view class="details-one">
            <view class="details-one-left"> 备注 </view>
            <view class="details-one-right">
              <input type="text" value="" placeholder="备注请与商家沟通" />
            </view>
          </view>
          <view class="details-two"> 合计：<text>￥88.00</text> </view>
        </view>
      </view>

      <u-popup mode="center" v-model="show">
        <view class="box">
          <view class=""> 你还没有收货地址，赶紧设置一个吧 </view>
          <view class="">
            <view class=""> 取消 </view>
            <view class=""> 去设置 </view>
          </view>
        </view>
      </u-popup>
      <view class="footer">
        <view class="footer-left"> ￥<text>398</text> </view>
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
        show: false,
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
  .box {
    width: 606rpx;
    height: 244rpx;
    background: #ffffff;
    border-radius: 14rpx;
  }
  .content {
    padding: 20rpx 32rpx;
    .map {
      display: flex;
      align-items: center;
      padding: 20rpx 20rpx;
      background-color: #fff;
      margin-bottom: 20rpx;
      justify-content: space-between;
      .map-left {
        display: flex;
        align-items: center;
      }
      .map-right {
      }
    }
    .maps {
      background-color: #fff;
      padding: 20rpx;
      margin-bottom: 20rpx;
      .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20rpx;
        .map-left {
          display: flex;
          align-items: center;
          .text1 {
            font-size: 28rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
            margin-right: 20rpx;
            font-weight: 700;
          }
        }
        .map-right {
          font-size: 26rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
      .right {
        font-size: 22rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        margin-left: 40rpx;
      }
    }
    .card {
      display: flex;
      align-items: center;
      background-color: #fff;
      padding: 20rpx;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
      .card-radio {
      }
      .card-img {
        width: 180rpx;
        height: 180rpx;
        margin-right: 20rpx;
        image {
          width: 180rpx;
          height: 180rpx;
        }
      }
      .card-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 180rpx;
        .card-right-one {
          font-size: 28rpx;
          color: #333;
        }
        .card-right-two {
          font-size: 24rpx;
          color: #999;
          display: flex;
          justify-content: space-between;
          .card-right-two-left {
          }
          .card-right-two-right {
          }
        }

        .card-right-three {
          display: flex;
          justify-content: space-between;
          .card-right-three-left {
            color: #ff2d19;
            font-size: 24rpx;
            text {
              font-size: 32rpx;
              font-weight: 700;
            }
          }
          .card-right-three-right {
          }
        }
      }
    }

    .details {
      padding: 0 20rpx;
      background-color: #fff;
      .details-one {
        display: flex;
        justify-content: space-between;
        padding: 20rpx 0;
        border-bottom: 1rpx solid #f5f5f5;
        .details-one-left {
          font-size: 28rpx;
          color: #333;
        }
        .details-one-right {
          font-size: 26rpx;
          color: 666;
        }
      }
      .details-two {
        font-size: 28rpx;
        color: #333;
        padding: 30rpx 0;
        display: flex;
        justify-content: flex-end;
        text {
          color: #ff2d19;
          font-weight: 700;
        }
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
      color: #ff2d19;
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
      background: #ff4d00;
      border-radius: 39rpx;
      line-height: 80rpx;
      text-align: center;
      color: #fff;
      font-size: 28rpx;
    }
  }
</style>
