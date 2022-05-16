<template>
  <view class="warp">{{ roomDetail.id }}</view>
</template>
<script>
  export default {
    data() {
      return {
        roomDetail: {},
      }
    },
    onLoad(option = {}) {
      this.getRoomDetail(option.id)
    },
    methods: {
      getRoomDetail(bnbId) {
        this.$api.home
          .bnbInfo({ bnbId })
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
