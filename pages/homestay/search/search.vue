<template>
  <view class="warp">
    <view class="search">
      <u-search
        placeholder="搜索你想要去的民宿"
        shape="square"
        action-style="{color:red;}"
        v-model="keyword"
      ></u-search>
    </view>
    <view class="content">
      <view class="content-one">
        <view class="content-one-left"> 搜索发现 </view>
      </view>
      <view class="content-two">
        <view v-for="c in discoveryList" :key="c.id" class="content-two-one">{{ c.word }}</view>
      </view>

      <view class="content-one">
        <view class="content-one-left"> 历史搜索 </view>
        <view class="content-one-right">
          <u-icon name="trash"></u-icon>
        </view>
      </view>
      <view class="content-two">
        <view v-for="c in histList" :key="c.id" class="content-two-one">{{ c.word }}</view>
      </view>
      <view class="content-one">
        <view class="content-one-left"> 热门民宿 </view>
      </view>
      <view class="hot-order" v-for="item in 6">
        <view class="hot-order-left">
          <image src="../../../static/images/位图(1).png" mode=""></image>
        </view>
        <view class="hot-order-right">
          <view class="hot-order-top"> 似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】 </view>
          <view class="hot-order-center"> ￥<text>398</text> </view>
          <view class="hot-order-bottom"> 1000+条评论 </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        discoveryList: [],
        histList: [],
      }
    },
    onLoad() {
      this.getSearch()
    },
    methods: {
      getSearch() {
        this.$api.home
          .getSearch()
          .then((res) => {
            const { discoveryList, histList } = res
            this.discoveryList = discoveryList
            this.histList = histList
          })
          .catch((res = {}) => {})
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
    .content-one {
      display: flex;
      justify-content: space-between;
      margin: 20rpx 0;
      .content-one-left {
        font-size: 32rpx;
        color: #333;
        font-weight: 700;
        font-family: PingFangSC-Medium, PingFang SC;
      }
      .content-one-right {
      }
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
        .hot-order-center {
          color: #ff2d19;
          font-size: 28rpx;
          text {
            font-size: 32rpx;
            font-weight: 700;
          }
        }
        .hot-order-bottom {
          font-size: 22rpx;
          color: #999;
        }
      }
    }
    .content-two {
      display: flex;
      flex-wrap: wrap;
      .content-two-one {
        font-size: 28rpx;
        color: #666;
        font-family: PingFangSC-Regular, PingFang SC;
        padding: 10rpx 20rpx;
        background-color: #fff;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
      }
    }
  }
</style>
