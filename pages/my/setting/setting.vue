<template>
  <view class="warp">
    <view class="content">
      <view class="list">
        <view class="list-one">
          <view class="list-one-left"> 手机号码 </view>
          <view class="list-one-right"> 18405818220 </view>
        </view>
        <!-- <view class="list-one" @tap="goinvoice()">
          <view class="list-one-left"> 发票服务 </view>
          <view class="list-one-right">
            <image src="../../../static/images/全部.png" mode=""></image>
          </view>
        </view> -->
        <view class="list-one" @click="gofeedback()">
          <view class="list-one-left"> 意见反馈 </view>
          <view class="list-one-right">
            <image src="../../../static/images/全部.png" mode=""></image>
          </view>
        </view>
        <view class="list-one" @click="goabout()">
          <view class="list-one-left"> 关于我们 </view>
          <view class="list-one-right">
            <image src="../../../static/images/全部.png" mode=""></image>
          </view>
        </view>
      </view>
      <view @click="loginOut" class="footer"> 退出登录 </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      loginOut() {
        uni.showModal({
          title: '提示',
          content: '确定退出登录？',
          confirmText: '确定',
          confirmColor: '#00BBCC',
          cancelColor: '#999',
          success: function (res) {
            if (res.confirm) {
              getApp().globalData.logOut()
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          },
        })
      },
      goinvoice() {
        uni.navigateTo({
          url: '../invoice/invoice',
        })
      },
      // 去往意见反馈页面
      gofeedback() {
        uni.navigateTo({
          url: '../feedback/feedback',
        })
      },
      // 去往关于我们页面
      goabout() {
        uni.navigateTo({
          url: '../about/about',
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
    padding: 20rpx;
  }
  .list {
    padding: 0 20rpx;
    background-color: #fff;
    margin-bottom: 40rpx;
    .list-one {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx 0;
      border-bottom: 1rpx solid #f5f5f5;
      .list-one-left {
        display: flex;
        align-items: center;
        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
      .list-one-right {
        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
    }
  }

  .footer {
    color: rgba($color: #ff4d00, $alpha: 0.6);
    font-size: 28rpx;
    width: 686rpx;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
    background-color: #fff;
  }
</style>
