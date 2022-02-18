<template>
  <view class="warp">
    <view>民宿名称：{{ roomDetail.name }}</view>
    <view>电话：{{ roomDetail.tel }}</view>
    <view>地区：{{ roomDetail.province }}{{ roomDetail.city }}{{ roomDetail.district }}</view>
    <view>详细地址{{ roomDetail.address }}</view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        roomDetail: {},
      }
    },
    onLoad() {
      this.getRoomDetail()
    },
    methods: {
      getRoomDetail() {
        this.$api.home
          .bnbInfo({ bnbId: 2 })
          .then((res) => {
            this.roomDetail = res.bnbInfo
          })
          .catch((res = {}) => {})
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    padding: 20rpx 32rpx;
    background-color: #f5f5f5;
  }
  .content {
    .content-img {
      width: 686rpx;
      height: 280rpx;
      image {
        width: 686rpx;
        height: 280rpx;
      }
    }
    .content-details {
      font-size: 28rpx;
      color: #333;
      font-family: PingFangSC-Regular, PingFang SC;
      letter-spacing: 1rpx;
      margin: 20rpx 0;
    }
  }
</style>
