<template>
  <view class="warp">
    <view class="search">
      <u-search
        placeholder="搜索你想要去的地区"
        shape="square"
        :show-action="fasle"
        v-model="keyword"
      ></u-search>
    </view>
    <view class="content">
      <view class="one">
        <view class="content-one"> 热门目的地 </view>
        <view class="content-two">
          <view class="content-two-one" v-for="item in list" :key="item.id" @click="goregion(item)">
            <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.picId}`" mode=""></image>
            <view class="content-two-title"> {{ item.city }} </view>
            <!-- <view class="content-two-title1"> 西湖风景区 </view> -->
          </view>
        </view>
      </view>

      <!-- <view class="one">
        <view class="content-one"> 热门城市 </view>
        <view class="content-three">
          <view class="content-three-one" v-for="item in 9"> 北京 </view>
        </view>
      </view>
      <view class="one" v-for="item in 5">
        <view class="content-one"> 浙江 </view>
        <view class="content-four">
          <view class="content-four-one" v-for="item in 8" @click="goregion()"> 杭州 </view>
        </view>
      </view> -->
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
        keyword: '',
        list: [],
      }
    },
    onLoad() {
      this.getData()
    },
    methods: {
      getData() {
        this.$api.home.hotCityPage({ pageNo: 1, pageSize: 1000 }).then((res) => {
          this.list = res.rows || []
        })
      },
      goregion(item) {
        uni.navigateTo({
          url: `../region/region?id=${item.id}&name=${item.city}`,
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
    .one {
      background-color: #fff;
      padding: 24rpx 20rpx 12rpx;
      margin-bottom: 20rpx;
      border-radius: 10rpx;
      .content-one {
        font-size: 32rpx;
        color: #333;
        font-weight: 700;
        margin-bottom: 20rpx;
        font-family: PingFangSC-Medium, PingFang SC;
      }
      .content-two {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .content-two-one {
          width: 202rpx;
          height: 202rpx;
          // background-color: red;
          margin-bottom: 20rpx;
          text-align: center;
          position: relative;
          border-radius: 10rpx;
          image {
            width: 202rpx;
            height: 202rpx;
            border-radius: 10rpx;
          }
          .content-two-title {
            font-size: 28rpx;
            color: #fff;
            // margin-top: 124rpx;
            z-index: 99;
            position: absolute;
            top: 124rpx;
            left: 72rpx;
          }
          .content-two-title1 {
            font-size: 20rpx;
            color: rgba($color: #fff, $alpha: 0.6);
            z-index: 99;
            position: absolute;
            top: 162rpx;
            left: 52rpx;
          }
        }
      }

      .content-three {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .content-three-one {
          width: 202rpx;
          height: 60rpx;
          background-color: #f5f5f5;
          line-height: 60rpx;
          text-align: center;
          margin-bottom: 20rpx;
          font-size: 28rpx;
          color: #333;
        }
      }

      .content-four {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .content-four-one {
          width: 148rpx;
          height: 40rpx;
          line-height: 40rpx;
          text-align: center;
          margin-bottom: 20rpx;
          font-size: 28rpx;
          color: #666;
        }
      }
    }
  }
</style>
