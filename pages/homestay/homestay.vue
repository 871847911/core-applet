<template>
  <view class="warp">
    <view class="content">
      <view class="vr" @click="goVr">
        <image
          :src="`${BASE_API}/sysFileInfo/preview?id=${roomDetail.bnbInfo.picSite}`"
          mode=""
        ></image>
        <view class="vr-btn" v-if="vrShow">
          <image :src="`../../static/images/首页.png`" mode=""></image>
        </view>
        <view class="vr-vr">
          <view class="vr-btn1" @click.stop="vrShow = !vrShow" :class="{ active: vrShow }">
            VR
          </view>
          <view class="vr-btn2" @click.stop="vrShow = !vrShow" :class="{ active: !vrShow }">
            图片
          </view>
          <!-- <view class="vr-btn3" v-if="!vrShow"> 1/1 </view> -->
        </view>
      </view>
      <view class="list">
        <view class="list-one" @click="openLocation()">
          <view class="list-left">
            <image src="../../static/images/酒店位置@2x.png" mode=""></image>
          </view>
          <view class="list-right"> 民宿位置 </view>
        </view>
        <view class="list-one" @click="gogroup()">
          <view class="list-left">
            <image src="../../static/images/我的订单.png" mode=""></image>
          </view>
          <view class="list-right"> 关于我们 </view>
        </view>
        <view class="list-one" @click="goparenting()">
          <view class="list-left">
            <image src="../../static/images/平台客服@2x.png" mode=""></image>
          </view>
          <view class="list-right"> 联系我们 </view>
        </view>
        <!-- <view class="list-one" @click="godiscount()">
          <view class="list-left">
            <image src="../../static/images/我的订单@2x.png" mode=""></image>
          </view>
          <view class="list-right"> 折扣尾房 </view>
        </view> -->
      </view>
      <!-- 火爆推荐 -->
      <!-- <view class="hot">
        <view class="hot-title"> 火爆推荐 </view>
        <view class="hot-order" v-for="item in 3">
          <view class="hot-order-left">
            <image src="../../static/images/位图(1).png" mode=""></image>
          </view>
          <view class="hot-order-right">
            <view class="hot-order-top">
              似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
            </view>
            <view class="hot-order-bottom">
              <view class="hot-order-bottom-left"> ￥<text>398</text> </view>
              <view class="hot-order-bottom-right"> 立即抢购 </view>
            </view>
          </view>
        </view>
      </view> -->

      <view class="hot">
        <view class="hot-title"> 民宿优选 </view>
        <view class="scenicspot-list">
          <view
            class="scenicspot-list-image"
            v-for="item in roomDetail.bnbPackList"
            @click="gohousedetails(item.id)"
            :key="item.id"
          >
            <image
              :src="`${BASE_API}/sysFileInfo/preview?id=${item.picSite}`"
              mode="widthFix"
            ></image>
            <view class="scenicspot-list-title">{{ item.mainTitle }}{{ item.viceTitle }}</view>
            <view class="scenicspot-list-money">
              <view class="text1">
                <image src="../../static/icon.png"></image>
                <text>{{ item.defaultPrice }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import config from '@/common/config.js'
  const { BASE_API } = config
  export default {
    data() {
      return {
        vrShow: true,
        title: 'Hello',
        roomDetail: {},
        list: [],
        BASE_API: BASE_API,
      }
    },
    onLoad(option = {}) {
      this.getRoomDetail(option.id)
    },
    methods: {
      openLocation() {
        const latitude = this.roomDetail.lat && Number(this.roomDetail.lat)
        const longitude = this.roomDetail.lng && Number(this.roomDetail.lng)
        if (!latitude || !longitude) return uni.showToast({ title: '未设置地址', icon: 'none' })
        wx.openLocation({
          latitude,
          longitude,
          scale: 18,
          success: (record) => {},
          fail: (record) => {
            console.log(record)
          },
        })
      },
      goVr() {
        uni.setStorageSync('WEBVIEW_URL', this.roomDetail.bnbInfo.vr)
        uni.navigateTo({
          url: '/pages/one/picture/picture',
        })
      },
      gohousedetails(id) {
        uni.navigateTo({
          url: `../one/roomorder/roomorder?id=${id}`,
        })
      },
      getRoomDetail(bnbId) {
        this.$api.home
          .bnbInfo({ bnbId })
          .then((res) => {
            this.roomDetail = res
            this.list = [
              {
                image: `${BASE_API}/sysFileInfo/preview?id=${this.roomDetail.bnbInfo.picSite}`,
                title: '',
              },
            ]
          })
          .catch((res = {}) => {})
      },
      // 去往搜索页面
      gosearch() {
        uni.navigateTo({
          url: 'search/search',
        })
      },
      // 去往目的地页面
      godestination() {},
      // 去往团建民宿
      gogroup() {
        uni.navigateTo({
          url: '../one/scenicspotdetails/scenicspotdetails',
        })
      },
      // 去往亲子页面
      goparenting() {
        const { bnbInfo } = this.roomDetail
        uni.makePhoneCall({
          phoneNumber: bnbInfo.tel, //仅为示例
        })
      },
      // 去往折扣尾房页面
      godiscount() {
        uni.navigateTo({
          url: './discount/discount',
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .active {
    background-color: #ff4d00 !important;
    color: #fff;
  }
  page {
    background-color: #f5f5f5;
  }
  .warp {
    // height: 100vh;
    background-color: #f5f5f5;
  }
  .search {
    padding: 0 32rpx;
    background-color: #fff;
    height: 88rpx;
  }
  .content {
    padding: 20rpx 32rpx;
    .vr {
      width: 750rpx;
      height: 536rpx;
      position: relative;
      overflow: hidden;
      image {
        height: 597rpx;
        width: 750rpx;
      }
      .vr-btn {
        position: absolute;
        top: 266rpx;
        left: 315rpx;
        image {
          width: 120rpx;
          height: 120rpx;
        }
      }
      .vr-vr {
        position: absolute;
        top: 476rpx;
        left: 294rpx;
        display: flex;
        .vr-btn1 {
          width: 70rpx;
          height: 40rpx;
          background-color: rgba(255, 255, 255, 0.6);
          line-height: 40rpx;
          text-align: center;
          font-size: 22rpx;
          border-radius: 20rpx;
          margin-right: 10rpx;
        }
        .vr-btn2 {
          width: 84rpx;
          height: 40rpx;
          background-color: rgba(255, 255, 255, 0.6);
          line-height: 40rpx;
          text-align: center;
          font-size: 22rpx;
          border-radius: 20rpx;
          margin-right: 185rpx;
        }
        .vr-btn3 {
          width: 74rpx;
          height: 40rpx;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 20px;
          text-align: center;
          font-size: 22rpx;
          color: #fff;
          line-height: 40rpx;
        }
      }
    }
    .swiper {
      background-color: #fff;
    }
    .list {
      width: 686rpx;
      height: 154rpx;
      background-color: #fff;
      padding: 20rpx 54rpx;
      display: flex;
      justify-content: space-between;
      margin: 20rpx 0;
      border-radius: 10rpx;
      .list-one {
        display: flex;
        flex-direction: column;
        .list-left {
          width: 80rpx;
          height: 80rpx;
          image {
            width: 80rpx;
            height: 80rpx;
          }
        }
        .list-right {
          font-size: 24rpx;
          color: #666;
        }
      }
    }
    // 火爆推荐
    .hot {
      .hot-title {
        font-size: 32rpx;
        color: #333;
        margin: 20rpx 0;
        font-weight: 700;
      }
      .hot-order {
        display: flex;
        background-color: #ffffff;
        border-radius: 10rpx;
        margin-bottom: 20rpx;
        .hot-order-left {
          width: 220rpx;
          height: 220rpx;
          image {
            width: 220rpx;
            height: 220rpx;
          }
        }
        .hot-order-right {
          padding: 20rpx;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .hot-order-top {
            font-size: 28rpx;
            color: #333;
          }
          .hot-order-bottom {
            display: flex;
            justify-content: space-between;
            .hot-order-bottom-left {
              color: #ff2d19;
              font-size: 24rpx;
              text {
                font-size: 32rpx;
                font-weight: 700;
              }
            }
            .hot-order-bottom-right {
              width: 144rpx;
              height: 56rpx;
              background: #ff4d00;
              border-radius: 4rpx;
              color: #fff;
              line-height: 56rpx;
              text-align: center;
            }
          }
        }
      }

      .scenicspot-list {
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        .scenicspot-list-image {
          background-color: #fff;
          margin-bottom: 20rpx;
          border-radius: 10rpx;
          image {
            width: 100%;
            // width: 332rpx;
            // height: 280rpx;
          }
          .scenicspot-list-title {
            padding: 20rpx;
            font-size: 28rpx;
            color: #333;
          }
          .scenicspot-list-money {
            color: #ff2d19;
            font-size: 26rpx;
            padding: 0 0 20rpx 20rpx;
            .text1 {
              font-size: 32rpx;
              font-weight: 700;
              color: #ff2d19;
              display: flex;
              align-items: center;
              image {
                width: 42rpx;
                height: 42rpx;
                margin-right: 8rpx;
              }
            }
          }
        }
      }
    }
  }
</style>
