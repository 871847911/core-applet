<template>
  <view class="warp">
    <view class="search">
      <u-search
        placeholder="搜索你想要去的民宿"
        shape="square"
        :show-action="fasle"
        v-model="keyword"
      ></u-search>
    </view>
    <view class="content">
      <view class="content-recommend-two">
        <view class="content-recommend-two-first" v-for="item in 6" @click="gocomment()">
          <view class="content-recommend-two-one">
            <image src="../../../static/images/位图(1).png" mode=""></image>
          </view>
          <view class="content-recommend-two-two"> 已消毒步行西湖10多分钟 近浙大 黄龙 植物… </view>
          <view class="content-recommend-two-three">
            <view class="text1"> 398 </view>
            <view class=""> </view>
            <view class="text2"> </view>
          </view>
          <view class="fen"> <u-icon name="map" color="#fff"></u-icon> 浙江省 杭州市 </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      // 房源详情
      gocomment() {
        uni.navigateTo({
          url: '../../one/roomorder/roomorder',
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
  }
  .search {
    padding: 0 32rpx;
    background-color: #fff;
    height: 88rpx;
    line-height: 88rpx;
  }
  .content {
    padding: 20rpx 32rpx;
    .content-recommend-two {
      display: flex;
      width: 686rpx;
      flex-wrap: wrap;
      justify-content: space-between;
      .content-recommend-two-first {
        width: 332rpx;
        height: 458rpx;
        // margin-right: 20rpx;
        background-color: #fff;
        position: relative;
        margin-bottom: 30rpx;
        .content-recommend-two-one {
          width: 332rpx;
          height: 280rpx;
          image {
            width: 332rpx;
            height: 280rpx;
          }
        }
        .content-recommend-two-two {
          font-size: 28rpx;
          color: #333;
          margin: 20rpx 0 10rpx;
          padding: 0 15rpx;
        }
        .content-recommend-two-three {
          padding: 0 20rpx;
          display: flex;
          align-items: center;
          .text1 {
            font-size: 32rpx;
            font-weight: 700;
            color: #ff2d19;
          }
          .text2 {
            font-size: 20rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            position: relative;
            margin-left: 50rpx;
            .line {
              width: 90rpx;
              height: 1rpx;
              background-color: #999;
              position: absolute;
              top: 14rpx;
            }
          }
        }
        .fen {
          width: 182rpx;
          height: 36rpx;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 5rpx;
          text-align: center;
          line-height: 36rpx;
          color: #fff;
          position: absolute;
          top: 234rpx;
          left: 10rpx;
          font-size: 20rpx;
        }
      }
    }
  }
</style>
