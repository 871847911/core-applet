<template>
  <view class="warp">
    <u-navbar :is-back="false">
      <view class="slot-wrap" @click="gosearch">
        <u-search
          placeholder="搜索你想要去的民宿"
          shape="square"
          :show-action="fasle"
          v-model="keyword"
        >
        </u-search>
      </view>
    </u-navbar>

    <view v-if="IS_LOGIN" class="content">
      <!-- 轮播 -->
      <view class="swiper">
        <u-swiper :list="bannerList" height="360"></u-swiper>
      </view>
      <view v-if="packCategoryList.length > 0" class="content-list">
        <view class="content-list-one" @tap="gogroup()">
          <view class="content-list-top">
            <image src="../../static/images/酒店位置.png" mode=""></image>
          </view>
          <view class="content-list-title"> 房源套餐 </view>
        </view>
        <view
          v-for="(item, index) in packCategoryList"
          :key="item.id"
          class="content-list-one"
          @tap="gogroup(item.id, item.name)"
        >
          <view class="content-list-top">
            <image v-if="index === 0" src="../../static/images/旅客评价@2x.png" mode=""></image>
            <image v-else src="../../static/images/联系我们@2x.png" mode=""></image>
          </view>
          <view class="content-list-title"> {{ item.name }} </view>
        </view>
      </view>

      <!-- 民宿抢购 -->
      <view v-if="seckill" class="content-quota">
        <view class="content-quota-top">
          <view class="content-quota-left"> 预约抢购 <text>{{}}</text> </view>
          <view class="content-quota-right" @tap="gopurchase()">
            查看全部 <u-icon name="arrow-right" color="#fff"></u-icon>
          </view>
        </view>
        <view class="content-quota-bottom" @click="gospecial">
          <view class="content-quota-bottom-img">
            <image :src="`${BASE_API}/sysFileInfo/preview?id=${seckill.picSite}`" mode=""></image>
          </view>
          <view class="content-quota-bottom-title">
            <view class="content-quota-bottom-left">
              {{ seckill.mainTitle }}
            </view>
            <view class="content-quota-bottom-right">
              <image src="../../static/icon.png"></image>
              <text>
                {{ seckill.status === 0 ? seckill.reservationPrice : seckill.price }}
              </text>
            </view>
          </view>
        </view>
      </view>
      <!-- 热门目的地 -->
      <view v-if="hotCityList.length > 0" class="hot">
        <view class="hot-title">
          <view class="hot-title-left"> 热门目的地 </view>
          <view class="hot-title-right" @tap="godestination()">
            全部 <u-icon name="arrow-right" color="#999" size="22"></u-icon>
          </view>
        </view>
        <view class="hot-scenery">
          <block v-for="(item, index) in hotCityList" :key="item.id">
            <view v-if="index < 3" class="hot-scenery-list">
              <view @click="goregion(item)" class="hot-scenery-img">
                <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.site}`" mode=""></image>
              </view>
              <view class="hot-scenery-city"> {{ item.city }} </view>
              <!-- <view class="hot-scenery-area"> 西湖风景区 </view> -->
            </view>
          </block>
        </view>
        <!-- <view class="hot-list">
          <block v-for="(item, index) in hotCityList" :key="item.id">
            <view v-if="index > 3" class="hot-list-one">
              <text>{{ item.city }}</text>
            </view>
          </block>
        </view> -->
      </view>

      <!-- 热门商品 -->
      <!-- <view class="content-recommend">
        <view class="hot-title">
          <view class="hot-title-left"> 热门商品 </view>
          <view class="hot-title-right">
            全部 <u-icon name="arrow-right" color="#999" size="22"></u-icon>
          </view>
        </view>
        <view class="content-recommend-two">
          <view class="content-recommend-two-first" v-for="item in 4">
            <view class="content-recommend-two-one">
              <image src="../../static/images/位图(1).png" mode=""></image>
            </view>
            <view class="content-recommend-two-two">
              已消毒步行西湖10多分钟 近浙大 黄龙 植物…
            </view>
            <view class="content-recommend-two-three">
              <view class="text1"> 398 </view>
              <view class=""> </view>
              <view class="text2">
                原价￥888
                <view class="line"> </view>
              </view>
            </view>
            <view class="fen"> <u-icon name="map" color="#fff"></u-icon> 浙江省 杭州市 </view>
          </view>
        </view>
      </view> -->

      <!-- 热门房源 -->
      <view class="content-recommend">
        <view class="hot-title">
          <view class="hot-title-left"> 热门房源 </view>
          <view class="hot-title-right" @click="gohothouse">
            全部 <u-icon name="arrow-right" color="#999" size="22"></u-icon>
          </view>
        </view>
        <view class="content-recommend-two">
          <view
            class="content-recommend-two-first"
            v-for="item in packList"
            :key="item.id"
            @click="gocomment(item.id)"
          >
            <view class="content-recommend-two-one">
              <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.picId}`" mode=""></image>
            </view>
            <view class="content-recommend-two-two">
              {{ item.mainTitle }}{{ item.viceTitle }}
            </view>
            <view class="content-recommend-two-three">
              <view class="text1">
                <image src="../../static/icon.png"></image>
                <text>{{ item.defaultPrice }}</text>
              </view>
              <view class=""> </view>
              <!-- <view class="text2">
                原价￥{{ item.defaultPrice }}
                <view class="line"> </view>
              </view> -->
            </view>
            <view class="fen">
              <u-icon name="map" color="#fff"></u-icon
              >{{ item.province + item.city + item.district || '' }}</view
            >
          </view>
        </view>
      </view>
    </view>
    <!-- <u-popup v-model="showModel" mode="center">
			<view class="yhq"><image src="../../static/images/新用户活动弹窗.png" mode=""></image></view>
		</u-popup> -->

    <!-- <share @choseshare='choseshare' :shareShow='shareShow'></share> -->
    <view style="height: 400rpx" v-else>
      <mescroll-empty @emptyclick="emptyClick" :option="emptyOption"></mescroll-empty>
    </view>
  </view>
</template>

<script>
  import share from '@/components/share'
  import config from '@/common/config.js'
  import { mapState } from 'vuex'
  const { BASE_API } = config
  export default {
    components: {
      share,
    },
    data() {
      return {
        BASE_API: BASE_API,
        num: 0,
        btnShow: false,
        shareShow: true,
        seckill: null,
        hotCityList: [],
        packList: [],
        packCategoryList: [],
        bannerList: [],
        emptyOption: {
          tip: '登录后查看', // 提示
          btnText: '去登录',
          icon: '/static/empty/empty.png',
        },
      }
    },
    computed: {
      ...mapState({
        IS_LOGIN: (state) => state.IS_LOGIN, //登陆状态
        USERINFO: (state) => state.USERINFO, //用户信息
      }),
    },
    onLoad() {},
    onShow() {
      const token = uni.getStorageSync('TOKEN')
      if (this.IS_LOGIN || token) {
        this.getNavCate()
        this.getpackCategoryPage()
      }
    },
    methods: {
      goregion(item) {
        uni.navigateTo({
          url: `../homestay/region/region?id=${item.id}&name=${item.city}`,
        })
      },
      getpackCategoryPage() {
        this.$api.home.packCategoryPage().then((res = {}) => {
          this.packCategoryList = res.rows || []
        })
      },
      emptyClick() {
        uni.navigateTo({
          url: '/pages/account/auth/login/login',
        })
      },
      // 去往搜索页面
      gosearch() {
        uni.navigateTo({
          url: '../homestay/search/search',
        })
      },
      // 去往目的地页面
      godestination() {
        uni.navigateTo({
          url: '../homestay/destination/destination',
        })
      },
      // 去往团建民宿
      gogroup(id, name) {
        uni.navigateTo({
          url: `../homestay/group/group?id=${id || ''}&name=${name || '房源套餐'}`,
        })
      },
      // 去往亲子页面
      goparenting() {
        uni.navigateTo({
          url: '../homestay/parenting/parenting',
        })
      },
      // 房源详情
      gocomment(id) {
        uni.navigateTo({
          url: `../one/roomorder/roomorder?id=${id}`,
        })
      },

      // 跳转房型图片
      gopicture() {
        uni.navigateTo({
          url: '../one/picture/picture',
        })
      },
      // 跳转预约订单
      goroomorder() {
        uni.navigateTo({
          url: '../one/roomorder/roomorder',
        })
      },
      //跳转商品采购
      goone() {
        uni.navigateTo({
          url: '../one/one/one',
        })
      },
      // 跳转联系我们
      gocontactus() {
        uni.navigateTo({
          url: '../one/contactus/contactus',
        })
      },
      //跳转热销房型
      gohothouse() {
        uni.navigateTo({
          url: '../one/hothouse/hothouse',
        })
      },
      // 跳转民宿抢购列表
      gopurchase() {
        uni.navigateTo({
          url: '../one/purchase/purchase',
        })
      },
      // 跳转抢购商品详情
      gospecial() {
        const id = this.seckill.packId
        uni.navigateTo({
          url: `../one/special/special?id=${id}&activityId=${this.seckill.id}&status=${this.seckill.status}`,
        })
      },
      choseshare() {
        this.shareShow = false
      },
      getNavCate() {
        uni.showLoading({ title: '加载中...', mask: true })
        this.$api.home.mainPageList().then((res) => {
          uni.hideLoading()
          const {
            activityList = [],
            bannerList = [],
            hotCityList = [],
            hotPackList = [],
            packList = [],
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
    },
  }
</script>

<style lang="scss" scoped>
  .active {
    background-color: #ff4d00 !important;
    color: #fff;
  }
  .warp {
    min-height: 100vh;
    background-color: #f7f7f7;
    position: relative;
    overflow: scroll;
  }
  .slot-wrap {
    display: flex;
    align-items: center;
    /* 如果您想让slot内容占满整个导航栏的宽度 */
    /* flex: 1; */
    /* 如果您想让slot内容与导航栏左右有空隙 */
    padding: 0 32rpx;
    u-search {
      width: 476rpx;
    }
  }

  .content {
    margin: 0 32rpx;
    height: 100vh;
    .swiper {
      margin-top: 20rpx;
    }
    // 热门目的地
    .hot {
      padding: 20rpx;
      background-color: #fff;
      // height: 470rpx;
      .hot-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hot-title-left {
          font-size: 32rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 700;
          color: #333333;
        }
        .hot-title-right {
          font-size: 26rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
      .hot-scenery {
        display: flex;
        justify-content: space-between;
        .hot-scenery-list {
          position: relative;
          width: 202rpx;
          height: 202rpx;
          text-align: center;
          margin: 20rpx 0;
          background-color: #333;
          .hot-scenery-img {
            width: 202rpx;
            height: 202rpx;
            image {
              width: 202rpx;
              height: 202rpx;
            }
          }
          .hot-scenery-city {
            width: 202rpx;
            font-size: 28rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 700;
            color: #fff;
            position: absolute;
            top: 124rpx;
          }
          .hot-scenery-area {
            width: 202rpx;
            font-size: 20rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
            // color: #000000;
            position: absolute;
            top: 164rpx;
          }
        }
      }
      .hot-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .hot-list-one {
          width: 202rpx;
          height: 60rpx;
          background-color: #f5f5f5;
          line-height: 60rpx;
          text-align: center;
          font-size: 28rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          margin-bottom: 20rpx;
        }
      }
    }
    .content-list {
      width: 686rpx;
      height: 154rpx;
      background-color: #fff;
      border-radius: 10rpx;
      margin: 20rpx 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .content-list-one {
        display: flex;
        flex-direction: column;
        align-items: center;
        .content-list-top {
          width: 80rpx;
          height: 80rpx;
          image {
            width: 80rpx;
            height: 80rpx;
          }
        }
        .content-list-title {
          font-size: 24rpx;
          color: #666;
        }
      }
    }

    .content-quota {
      width: 686rpx;
      height: 460rpx;
      background: linear-gradient(90deg, rgb(255, 102, 25) 0%, rgb(255, 45, 25) 100%);
      border-radius: 10rpx;
      padding: 20rpx;
      margin: 20rpx 0;
      .content-quota-top {
        display: flex;
        justify-content: space-between;
        .content-quota-left {
          font-size: 28rpx;
          color: #fff;
          font-weight: 500;
          font-family: PingFangSC-Medium, PingFang SC;
          text {
            font-size: 22rpx;
            margin-left: 10rpx;
          }
        }
        .content-quota-right {
          font-size: 22rpx;
          color: #fff;
        }
      }
      .content-quota-bottom {
        margin-top: 20rpx;
        width: 646rpx;
        height: 360rpx;
        background-color: #fff;
        border-radius: 10rpx;
        .content-quota-bottom-img {
          height: 240rpx;
          width: 646rpx;
          image {
            width: 646rpx;
            height: 240rpx;
          }
        }
        .content-quota-bottom-title {
          display: flex;
          justify-content: space-between;
          padding: 20rpx 18rpx;
          .content-quota-bottom-left {
            width: 476rpx;
            font-size: 28rpx;
            color: #333;
            letter-spacing: 2rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
          .content-quota-bottom-right {
            font-size: 24rpx;
            color: #ff2d19;
            display: flex;
            align-items: center;
            image {
              width: 42rpx;
              height: 42rpx;
              margin-right: 8rpx;
            }
            text {
              font-size: 36rpx;
              font-weight: 700;
            }
          }
        }
      }
    }

    .content-recommend {
      .hot-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40rpx 0 20rpx;
        .hot-title-left {
          font-size: 32rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 700;
          color: #333333;
        }
        .hot-title-right {
          font-size: 26rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
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
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
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
  }

  .yhq {
    width: 516rpx;
    height: 768rpx;

    // background-color: rgba($color: #fff, $alpha: 0.1);
    // opacity: 0.5;
    image {
      width: 516rpx;
      height: 768rpx;
    }
  }

  .title {
    text-align: center;
    padding: 20rpx 0 0 0;
  }
</style>
