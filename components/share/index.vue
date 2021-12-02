<template>
  <view class="">
    <u-mask :show="show" @click="show = shareShow">
      <view class="share" v-if="shareShow"
        >{{ shareShow }}
        <view class="share-one">
          <image src="../../static/images/新用户活动弹窗.png"></image>
        </view>
        <view class="share-two" @click="choseshare()">
          <image src="../../static/images/活动弹窗 - 关闭.png"></image>
        </view>
      </view>
    </u-mask>
  </view>
</template>

<script>
  export default {
    name: 'share',
    props: {
      shareShow: Boolean,
    },
    data() {
      return {
        // shareShow:true,
        show: true,
      }
    },
    methods: {
      choseshare() {
        this.$emit('choseshare')
      },
    },
  }
</script>

<style scoped lang="scss">
  .share {
    position: fixed;
    left: 114rpx;
    top: 178rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    .share-one {
      image {
        width: 480rpx;
        height: 715rpx;
      }
    }
    .share-two {
      margin-top: 20rpx;
      image {
        width: 44rpx;
        height: 44rpx;
      }
    }
  }
</style>
