<template>
  <view class="warp">
    <mescroll-empty :option="emptyOption"></mescroll-empty>
    <!-- <view class="content">
      <view class="box">
        <view class="box-time"> 1月10日 中午11:05 </view>
        <view class="box-title">
          <view class="box-title-one"> 🔥力推热销好物🔥 </view>
          <view class="box-title-two">
            叮咚～为您推荐！人气爆棚的FILA新年卫衣，领收购优惠卷立减20元～速戳领取>>
          </view>
        </view>
      </view>
      <view class="box">
        <view class="box-time"> 1月10日 中午11:05 </view>
        <view class="box-title">
          <view class="box-title-one"> 力推热销好物🌿 </view>
          <view class="box-title-two">
            叮咚～为您推荐！人气爆棚的FILA新年卫衣，领收购优惠卷立减20元～速戳领取>>
          </view>
        </view>
      </view>

      <view class="box">
        <view class="box-time"> 1月10日 中午11:05 </view>
        <image src="@/static/images/位图@2x (1) - 万能看图王.png" mode=""></image>
        <view class="box-title">
          <view class="box-title-one"> 力推热销好物🌿 </view>
          <view class="box-title-two">
            叮咚～为您推荐！人气爆棚的FILA新年卫衣，领收购优惠卷立减20元～速戳领取>>
          </view>
        </view>
      </view>
    </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        emptyOption: {
          tip: '暂无消息', // 提示
          btnText: '',
          icon: '/static/empty/empty.png',
        },
      }
    },
    methods: {},
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
    height: 100vh;
  }
  .content {
    padding: 0 32rpx;
    .box {
      image {
        width: 686rpx;
        height: 280rpx;
      }
      .box-time {
        text-align: center;
        font-size: 22rpx;
        color: #999;
        padding: 20rpx 0;
      }
      .box-title {
        padding: 20rpx;
        background-color: #fff;
        border-radius: 10rpx;
        .box-title-one {
          font-size: 28rpx;
          font-weight: 700;
          color: #333;
        }
        .box-title-two {
          margin-top: 10rpx;
          font-size: 24rpx;
          color: #999;
        }
      }
    }
  }
</style>
