<template>
  <view class="warp">
    <view class="content">
      <view class="swiper">
        <u-swiper :list="list" height="320"></u-swiper>
      </view>
      <view class="list">
        <view class="list-one" @click="godestination()">
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
            @click="gohousedetails"
            :key="item.id"
          >
            <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.picSite}`" mode=""></image>
            <view class="scenicspot-list-title">{{ item.mainTitle }}{{ item.viceTitle }}</view>
            <view class="scenicspot-list-money">
              <text>{{ item.defaultPrice }}</text>
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
        title: 'Hello',
        roomDetail: {},
        list: [],
        BASE_API: BASE_API,
      }
    },
    onLoad() {
      this.getRoomDetail()
    },
    methods: {
      gohousedetails() {
        uni.navigateTo({
          url: '../one/roomorder/roomorder',
        })
      },
      getRoomDetail() {
        this.$api.home
          .bnbInfo({ bnbId: 2 })
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
  .warp {
    height: 100vh;
    background-color: #f5f5f5;
  }
  .search {
    padding: 0 32rpx;
    background-color: #fff;
    height: 88rpx;
  }
  .content {
    padding: 20rpx 32rpx;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .scenicspot-list-image {
          width: 332rpx;
          background-color: #fff;
          margin-bottom: 20rpx;
          border-radius: 10rpx;
          image {
            width: 332rpx;
            height: 280rpx;
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
            text {
              font-size: 32rpx;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
</style>
