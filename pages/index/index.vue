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

    <view class="content">
      <!-- 轮播 -->
      <view class="swiper">
        <u-swiper :list="list" height="360"></u-swiper>
      </view>

      <view class="content-list">
        <view class="content-list-one">
          <view class="content-list-top">
            <image src="../../static/images/酒店位置.png" mode=""></image>
          </view>
          <view class="content-list-title"> 房源套餐 </view>
        </view>
        <view class="content-list-one" @click="goone()">
          <view class="content-list-top">
            <image src="../../static/images/旅客评价.png" mode=""></image>
          </view>
          <view class="content-list-title"> 商品采购 </view>
        </view>
        <view class="content-list-one" @tap="gogroup()">
          <view class="content-list-top">
            <image src="../../static/images/联系我们.png" mode=""></image>
          </view>
          <view class="content-list-title"> 活动·团建 </view>
        </view>
        <view class="content-list-one" @tap="goparenting()">
          <view class="content-list-top">
            <image src="../../static/images/我的订单.png" mode=""></image>
          </view>
          <view class="content-list-title"> 家庭·亲子 </view>
        </view>
        <view class="content-list-one">
          <view class="content-list-top">
            <image src="../../static/images/我的订单.png" mode=""></image>
          </view>
          <view class="content-list-title"> 大宗采购 </view>
        </view>
      </view>

      <!-- 民宿限购 -->
      <view class="content-quota">
        <view class="content-quota-top">
          <view class="content-quota-left"> 预约抢购 <text>00:00:00</text> </view>
          <view class="content-quota-right" @tap="gopurchase()">
            查看全部 <u-icon name="arrow-right" color="#fff"></u-icon>
          </view>
        </view>
        <view class="content-quota-bottom" @click="gospecial">
          <view class="content-quota-bottom-img">
            <image src="../../static/images/位图.png" mode=""></image>
          </view>
          <view class="content-quota-bottom-title">
            <view class="content-quota-bottom-left">
              2晚特惠 遇染民宿酒店，2晚连住低至7折，送正餐下午茶
            </view>
            <view class="content-quota-bottom-right"> ￥<text>398</text> </view>
          </view>
        </view>
      </view>
      <!-- 热门目的地 -->
      <view class="hot">
        <view class="hot-title">
          <view class="hot-title-left"> 热门目的地 </view>
          <view class="hot-title-right" @tap="godestination()">
            全部 <u-icon name="arrow-right" color="#999" size="22"></u-icon>
          </view>
        </view>
        <view class="hot-scenery">
          <view class="hot-scenery-list" v-for="item in 3">
            <view class="hot-scenery-img">
              <image src="../../static/images/位图.png" mode=""></image>
            </view>
            <view class="hot-scenery-city"> 杭州 </view>
            <view class="hot-scenery-area"> 西湖风景区 </view>
          </view>
        </view>
        <view class="hot-list">
          <view class="hot-list-one" v-for="item in 6"> 千岛湖 </view>
        </view>
      </view>

      <!-- 热门商品 -->
      <view class="content-recommend">
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
      </view>

      <!-- 热门房源 -->
      <view class="content-recommend">
        <view class="hot-title">
          <view class="hot-title-left"> 热门房源 </view>
          <view class="hot-title-right">
            全部 <u-icon name="arrow-right" color="#999" size="22"></u-icon>
          </view>
        </view>
        <view class="content-recommend-two">
          <view class="content-recommend-two-first" v-for="item in 4" @click="gocomment()">
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
      </view>
    </view>

    <!-- <u-popup v-model="showModel" mode="center">
			<view class="yhq"><image src="../../static/images/新用户活动弹窗.png" mode=""></image></view>
		</u-popup> -->

    <!-- <share @choseshare='choseshare' :shareShow='shareShow'></share> -->
  </view>
</template>

<script>
  import share from '@/components/share'
  export default {
    components: {
      share,
    },
    data() {
      return {
        num: 0,
        btnShow: false,
        shareShow: true,
        list: [
          {
            image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
            title: '昨夜星辰昨夜风，画楼西畔桂堂东',
          },
          {
            image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
            title: '身无彩凤双飞翼，心有灵犀一点通',
          },
          {
            image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
            title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
          },
        ],
      }
    },

    onLoad() {
      // this.getNavCate()
    },
    onShow() {
      this.getNavCate(), this.one()
    },
    methods: {
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
      gogroup() {
        uni.navigateTo({
          url: '../homestay/group/group',
        })
      },
      // 去往亲子页面
      goparenting() {
        uni.navigateTo({
          url: '../homestay/parenting/parenting',
        })
      },
      // 房源详情
      gocomment() {
        uni.navigateTo({
          url: '../one/roomorder/roomorder',
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
      // 跳转民宿限购列表
      gopurchase() {
        uni.navigateTo({
          url: '../one/purchase/purchase',
        })
      },
      // 跳转限购商品详情
      gospecial() {
        uni.navigateTo({
          url: '../special/special',
        })
      },
      choseshare() {
        this.shareShow = false
      },
      async getNavCate() {
        console.log(123)
        let data = {
          id: '3',
        }
        let res = await this.$api.login.requestGetcate(data)
        console.log(res)
        // if (res.data.code === 200) {
        // 	let list = res.data.list || [];
        // 	this.navCate = this.navCate.concat(list);
        // }
      },
      async one() {
        console.log(123)
        let data = {
          id: '3',
          aa: '2',
        }
        let res = await this.$api.login.one(data)
        console.log(res)
        // if (res.data.code === 200) {
        // 	let list = res.data.list || [];
        // 	this.navCate = this.navCate.concat(list);
        // }
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
    background-color: #f7f7f7;
    position: relative;
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
    .swiper {
      margin-top: 20rpx;
    }
    // 热门目的地
    .hot {
      padding: 20rpx;
      background-color: #fff;
      height: 470rpx;
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
          }
          .content-recommend-two-three {
            padding: 0 20rpx;
            display: flex;
            align-items: center;
            .text1 {
              font-size: 32rpx;
              font-weight: 700;
              color: #ff2d19;
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
