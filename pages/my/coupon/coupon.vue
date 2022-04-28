<template>
  <view class="warp">
    <view class="title">
      <view class="title-left" :class="{ active: num == 0 }" @click="changeNum(0)"> 待使用 </view>
      <view class="title-left" :class="{ active: num == 1 }" @click="changeNum(1)"> 已使用 </view>
      <view class="title-left" :class="{ active: num == 2 }" @click="changeNum(2)"> 已过期 </view>
    </view>
    <view class="content" v-if="couponIdList && couponIdList.length > 0">
      <view class="coupon-list" v-for="item in couponIdList" :key="item.id" @click="toBuy(item)">
        <view class="coupon-list-left">
          <image src="/static/icon.png"></image>
          <text :style="{ color: num != 0 ? '#eee' : '#ff2d19' }">{{ item.amount }}</text>
        </view>
        <view class="coupon-list-center">
          <view class="coupon-list-center-top">
            {{ item.name }}{{ `${num == 1 ? '（已使用）' : num == 2 ? '（已过期）' : ''}` }}
          </view>
          <view v-if="num === 0" class="coupon-list-center-bottom">
            购买时间：{{ item.createTime }}
          </view>
          <view v-if="num === 1" class="coupon-list-center-bottom">
            使用时间：{{ item.updateTime }}
          </view>
          <view v-if="num === 2" class="coupon-list-center-bottom"
            >过期时间： {{ item.updateTime }}
          </view>
        </view>
        <!-- <view class="coupon-list-right">
          <image src="../../../static/images/house.png" mode=""></image>
        </view> -->
      </view>
    </view>
    <mescroll-empty v-else :option="emptyOption"></mescroll-empty>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        num: 0,
        couponIdList: [],
        emptyOption: {
          tip: '暂无数据', // 提示
          btnText: '',
          icon: '/static/empty/empty.png',
        },
      }
    },
    methods: {
      toBuy() {
        if (this.num != 0) return
        uni.navigateTo({
          url: `/pages/one/roomorder/roomorder?id=${3}`,
        })
      },
      changeNum(n) {
        this.num = n
        this.getData()
      },
      getData() {
        let params = {
          status: this.num,
        }
        this.$api.home.queryCoupon(params).then((res = {}) => {
          this.couponIdList = res.couponDetailList
        })
      },
    },
    onLoad() {
      this.getData()
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
    min-height: 100vh;
  }
  .active {
    color: #333 !important;
  }

  .title {
    display: flex;
    justify-content: space-around;
    height: 84rpx;
    align-items: center;
    background-color: #fff;
    .title-left {
      font-size: 28rpx;
      color: #666;
      display: flex;
      align-items: center;
    }
  }
  .content {
    padding: 20rpx;
    .coupon-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      margin-bottom: 20rpx;
      padding: 20rpx;
      .coupon-list-left {
        font-size: 48rpx;
        font-weight: 700;
        color: #ff2d19;
        margin: 0 30rpx;
        display: flex;
        align-items: center;
        image {
          width: 42rpx;
          height: 42rpx;
          margin-right: 8rpx;
        }
        text {
          font-size: 60rpx;
        }
      }
      .coupon-list-center {
        font-size: 28rpx;
        flex: 1;
        .coupon-list-center-top {
          color: #333;
        }
        .coupon-list-center-bottom {
          color: #999;
        }
      }
      .coupon-list-right {
        width: 164rpx;
        height: 164rpx;
        image {
          width: 164rpx;
          height: 164rpx;
        }
      }
    }
  }
</style>
