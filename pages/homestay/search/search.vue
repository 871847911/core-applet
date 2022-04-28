<template>
  <view class="warp">
    <view class="search">
      <u-search
        placeholder="搜索你想要去的民宿"
        shape="square"
        action-style="{color:red;}"
        v-model="keyword"
        @search="getList"
      ></u-search>
    </view>
    <view class="content">
      <view class="content-one">
        <view class="content-one-left"> 搜索发现 </view>
      </view>
      <view class="hot-order" v-for="item in searchList" :key="item.id" @click="gocomment(item.id)">
        <view class="hot-order-left">
          <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.picId}`" mode=""></image>
        </view>
        <view class="hot-order-right">
          <view class="hot-order-top"> {{ item.mainTitle }} </view>
          <view class="hot-order-center"
            ><view class="text1">
              <image src="../../../static/icon.png"></image>
              <text>{{ item.defaultPrice }}</text>
            </view></view
          >
        </view>
      </view>
      <view class="content-one">
        <view class="content-one-left"> 热门民宿 </view>
      </view>
      <view class="hot-order" v-for="item in packList" :key="item.id" @click="gocomment(item.id)">
        <view class="hot-order-left">
          <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.picId}`" mode=""></image>
        </view>
        <view class="hot-order-right">
          <view class="hot-order-top"> {{ item.mainTitle }} </view>
          <view class="hot-order-center"
            ><view class="text1">
              <image src="../../../static/icon.png"></image>
              <text>{{ item.defaultPrice }}</text>
            </view></view
          >
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
        keyword: '',
        BASE_API,
        discoveryList: [],
        histList: [],
        hotCityList: [],
        searchList: [],
        packList: [],
        packCategoryList: [],
        bannerList: [],
      }
    },
    onLoad() {
      // this.getSearch()
      this.getpackCategoryPage()
    },
    methods: {
      getList() {
        let params = {
          word: this.keyword,
        }
        this.$api.home.queryPack(params).then((res) => {
          this.searchList = res
        })
      },
      getpackCategoryPage() {
        uni.showLoading({ title: '加载中...', mask: true })
        this.$api.home.mainPageList().then((res) => {
          uni.hideLoading()
          const {
            activityList = [],
            bannerList = [],
            hotCityList = [],
            hotPackList = [],
          } = res || {}
          let list = []
          bannerList.map((c) => {
            let obj = {
              image: BASE_API + '/sysFileInfo/preview?id=' + c.site,
              title: '',
            }
            list.push(obj)
          })
          console.log(list, 'bannerList')
          this.bannerList = list
          this.hotCityList = hotCityList
          this.packList = hotPackList
          this.seckill = activityList[0] || null
          // this.seckill = packList[0] || null
        })
      },
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
          .text1 {
            font-size: 32rpx;
            font-weight: 700;
            color: #ff2d19;
            display: flex;
            align-items: center;
            image {
              width: 42rpx;
              height: 42rpx;
              margin-right: 8rpx;
            }
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
