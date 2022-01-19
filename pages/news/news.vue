<template>
  <view class="warp">
    <view class="content">
      <view class="content-one" @click="gosystemnews()">
        <view class="content-one-left">
          <view class="one">
            <image src="@/static/images/系统消息@2x.png" mode=""></image>
          </view>
          <view class="two"> 系统消息 </view>
        </view>
        <view class="content-one-right"> 2022-01-02 15:33 </view>
      </view>

      <!-- <view class="content-one" @click="gologistics()">
        <view class="content-one-left">
          <view class="one">
            <image src="../../../static/images/物流服务@2x.png" mode=""></image>
          </view>
          <view class="two"> 物流服务 </view>
        </view>
        <view class="content-one-right">
          <image src="../../../static/images/编组@2x.png" mode=""></image>
        </view>
      </view>

      <view class="content-one">
        <view class="content-one-left">
          <view class="one">
            <image src="../../../static/images/平台客服@2x.png" mode=""></image>
          </view>
          <view class="two"> 平台客服 </view>
        </view>
        <view class="content-one-right">
          <image src="../../../static/images/编组@2x.png" mode=""></image>
        </view>
      </view> -->
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      // 跳转系统消息页面
      gosystemnews() {
        uni.navigateTo({
          url: './systemnews/systemnews',
        })
      },
      // 跳转物流消息页面
      gologistics() {
        uni.navigateTo({
          url: '../logistics/logistics',
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
    height: 100vh;
  }
  .content {
    padding: 20rpx 32rpx 0;
    .content-one {
      padding: 20rpx;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
      .content-one-left {
        display: flex;
        align-items: center;
        .one {
          image {
            width: 80rpx;
            height: 80rpx;
          }
          margin-right: 20rpx;
        }
        .two {
          font-size: 28rpx;
          color: #333;
        }
      }
      .content-one-right {
        font-size: 20rpx;
        font-weight: 400;
        color: #999999;
        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
    }
  }
</style>
