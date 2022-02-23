<template>
  <view class="warp">
    <view class="scenicspot">
      <view class="scenicspot-list">
        <view
          class="scenicspot-list-image"
          v-for="item in list"
          :key="item.id"
          @click="gohousedetails(item.id)"
        >
          <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.picId}`" mode=""></image>
          <view class="scenicspot-list-title"> {{ item.mainTitle }}{{ item.viceTitle }}</view>
          <view class="scenicspot-list-money">
            <image src="/static/icon.png"></image><text>{{ item.defaultPrice }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import config from '@/common/config.js'
  const { BASE_API } = config
  export default {
    data() {
      return {
        BASE_API: BASE_API,
        list: [],
      }
    },
    onLoad() {
      this.getList()
    },
    methods: {
      getList() {
        this.$api.home.queryPack().then((res) => {
          this.list = res
        })
      },
      gohousedetails(id) {
        uni.navigateTo({
          url: `../roomorder/roomorder?id=${id}`,
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    padding: 20rpx 32rpx;
    background-color: #f5f5f5;
  }
  .scenicspot {
    .scenicspot-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .scenicspot-list-image {
        width: 332rpx;
        background-color: #fff;
        margin-bottom: 20rpx;
        border-radius: 10rpx;
        image {
          width: 332rpx;
          height: 280rpx;
        }
        .scenicspot-list-title {
          padding: 20rpx;
          font-size: 28rpx;
          color: #333;
        }
        .scenicspot-list-money {
          color: #ff2d19;
          font-size: 26rpx;
          padding: 0 0 20rpx 20rpx;
          display: flex;
          align-items: center;
          image {
            width: 42rpx;
            height: 42rpx;
            margin-right: 8rpx;
          }
          text {
            font-size: 32rpx;
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
