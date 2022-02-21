<template>
  <view class="warp">
    <view class="search">
      <u-search
        placeholder="搜索你想要去的民宿"
        shape="square"
        :show-action="fasle"
        v-model="keyword"
        :search="search"
      ></u-search>
    </view>
    <view class="content">
      <view class="content-recommend-two">
        <view
          class="content-recommend-two-first"
          v-for="item in list"
          :key="item.id"
          @click="gocomment(item.id)"
        >
          <view class="content-recommend-two-one">
            <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.picSite}`" mode=""></image>
          </view>
          <view class="content-recommend-two-two"> {{ item.mainTitle }}{{ item.viceTitle }} </view>
          <view class="content-recommend-two-three">
            <view class="text1">
              <image src="/static/icon.png"></image>
              <text>{{ item.defaultPrice }}</text>
            </view>
            <view class=""> </view>
          </view>
          <view class="fen">
            <u-icon name="map" color="#fff"></u-icon
            >{{ item.province + item.city + item.district || '' }}</view
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
        BASE_API: BASE_API,
        list: [],
      }
    },
    onLoad(option = {}) {
      uni.setNavigationBarTitle({
        title: option.type === '1' ? '房源套餐' : option.type === '2' ? '活动·团建' : '家庭·亲子',
      })
      this.getList('')
    },
    methods: {
      search() {
        this.getList(this.keyword)
      },
      getList(val) {
        this.$api.home.queryPack({ word: val }).then((res) => {
          this.list = res
        })
      },
      // 房源详情
      gocomment(id) {
        uni.navigateTo({
          url: `../../one/roomorder/roomorder?id=${id}`,
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
    .content-recommend-two {
      display: flex;
      width: 686rpx;
      flex-wrap: wrap;
      justify-content: space-between;
      .content-recommend-two-first {
        width: 332rpx;
        height: 458rpx;
        // margin-right: 20rpx;
        background-color: #fff;
        position: relative;
        margin-bottom: 30rpx;
        .content-recommend-two-one {
          width: 332rpx;
          height: 280rpx;
          image {
            width: 332rpx;
            height: 280rpx;
          }
        }
        .content-recommend-two-two {
          font-size: 28rpx;
          color: #333;
          margin: 20rpx 0 10rpx;
          padding: 0 15rpx;
        }
        .content-recommend-two-three {
          padding: 0 20rpx;
          display: flex;
          align-items: center;
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
          .text2 {
            font-size: 20rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            position: relative;
            margin-left: 50rpx;
            .line {
              width: 90rpx;
              height: 1rpx;
              background-color: #999;
              position: absolute;
              top: 14rpx;
            }
          }
        }
        .fen {
          width: 182rpx;
          height: 36rpx;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 5rpx;
          text-align: center;
          line-height: 36rpx;
          color: #fff;
          position: absolute;
          top: 234rpx;
          left: 10rpx;
          font-size: 20rpx;
        }
      }
    }
  }
</style>
