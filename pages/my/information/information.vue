<template>
  <view class="warp">
    <view class="list">
      <view class="list-one">
        <view class="list-one-left"> 头像 </view>
        <view class="list-one-right">
          <image src="../../../static/images/header.png" mode=""></image>
        </view>
      </view>
      <view class="list-one" @click="gosetname()">
        <view class="list-one-left"> 姓名 </view>
        <view class="list-one-right">
          {{ USERINFO.name }}
          <u-icon name="arrow-right" color="#999" size="22" style="margin-left: 15rpx"></u-icon>
        </view>
      </view>
      <view class="list-one" @click="bindtoust">
        <view class="list-one-left"> 手机号码 </view>
        <view class="list-one-right">
          184****8220
          <u-icon name="arrow-right" color="#999" size="22" style="margin-left: 15rpx"></u-icon>
        </view>
      </view>
      <view class="list-one" @click="gosetting()">
        <view class="list-one-left"> 修改密码 </view>
        <view class="list-one-right">
          <u-icon name="arrow-right" color="#999" size="22" style="margin-left: 15rpx"></u-icon>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState({
        USERINFO: (state) => state.USERINFO, //用户信息
      }),
    },
    methods: {
      // 去往修改姓名页面
      gosetname() {
        uni.navigateTo({
          url: '../setname/setname',
        })
      },
      bindtoust() {
        uni.showModal({
          title: '当前绑定的手机号',
          content: '184****8220',
          confirmText: '更换',
          confirmColor: '#00BBCC',
          cancelColor: '#999',
          success: function (res) {
            if (res.confirm) {
              uni.navigateTo({
                url: '../verification/verification',
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          },
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .list {
    padding: 0 20rpx;
    background-color: #fff;
    margin-bottom: 120rpx;
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
        display: flex;
        align-items: center;
        color: #999;
        image {
          width: 60rpx;
          height: 60rpx;
          border-radius: 30rpx;
        }
      }
    }
  }
</style>
