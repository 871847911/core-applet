<template>
  <view class="warp">
    <view class="time">
      <view class="time-one" v-for="(item, index) in dateList" @click="btn(index)" :key="index">
        <view class="time-top" :class="{ active: index == num }">{{ item.title }}</view>
        <view class="time-bottom" :class="{ actives: index == num }">{{ item.date }}</view>
        <!-- <u-count-down
          :separator-color="index == num ? '#ff2d19' : ''"
          :color="index == num ? '#ff2d19' : ''"
          class="countDown"
          font-size="20"
          separator-size="20"
          :show-days="false"
          v-else
          :timestamp="timestamp"
        ></u-count-down> -->
      </view>
    </view>
    <view class="tap">
      <sl-filter :ref="'slFilter'" :menuList="menuList" @result="result"></sl-filter>
    </view>
    <view v-if="dataList.length > 0" class="content">
      <view
        class="card"
        v-for="item in dataList"
        :key="item.packId"
        @click="gospecial(item.packId)"
      >
        <view class="card-img">
          <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.picSite}`" mode=""></image>
        </view>
        <view class="card-right">
          <view class="card-right-one">{{ item.mainTitle }}</view>
          <view v-if="item.status === 0" class="card-right-two yuyue">
            已预约{{ item.sellAmt }}份
          </view>
          <view v-else class="card-right-two"> 已抢{{ item.sellAmt }}份 </view>

          <view class="card-right-three">
            <view class="card-right-three-left">
              <image src="/static/icon.png"></image>
              <text class="text1">{{ item.price }}</text> <text class="text2"></text>
            </view>
            <view
              v-if="item.status === 0"
              class="card-right-three-right yuyue"
              @click.stop="goyuyue"
            >
              预约
            </view>
            <view v-else-if="item.status === 1" class="card-right-three-right" @click.stop="toPay">
              立即抢购
            </view>
            <view v-else-if="item.status === 2" class="card-right-three-right disable"> 售罄 </view>
            <view v-else-if="item.status === 4" class="card-right-three-right disable">
              已结束
            </view>
          </view>
        </view>
      </view>
    </view>
    <mescroll-empty v-else :option="emptyOption"></mescroll-empty>
  </view>
</template>

<script>
  import slFilter from '@/components/sl-filter/sl-filter.vue'
  import moment from 'moment'
  import config from '@/common/config.js'
  const { BASE_API } = config
  export default {
    components: {
      slFilter,
    },
    data() {
      return {
        BASE_API: BASE_API,
        sortType: '',
        num: 0,
        timestamp: 0,
        emptyOption: {
          tip: '敬请期待', // 提示
          btnText: '',
          icon: '/static/empty/empty.png',
        },
        menuList: [
          {
            title: '综合排序',
            detailTitle: '子标题3',
            key: 'sortType',
            isSort: true,
            isMutiple: false,
            detailList: [
              {
                title: '综合排序',
                value: '',
              },
              {
                title: '价格',
                value: 'PRICE',
              },
              {
                title: '销量',
                value: 'SALE',
              },
            ],
          },
        ],
        dateList: [],
        dataList: [],
      }
    },
    onLoad() {
      this.getDateList()
    },
    methods: {
      toPay() {
        uni.navigateTo({
          url: '../yuyue/yuyue',
        })
      },
      goyuyue() {
        uni.showModal({
          title: '提示',
          confirmColor: '#00bbcc',
          content: '是否花费20金米粒预约？',
          success: function (res) {
            if (res.confirm) {
              uni.showToast({ title: '预约成功～' })
            } else if (res.cancel) {
            }
          },
        })
      },
      getList(data) {
        console.log(data)
        this.$api.home
          .activities({
            activeDt: moment().format('YYYY') + '/' + data.date,
            sortType: this.sortType,
          })
          .then((res = {}) => {
            this.dataList = res.activityList || []
          })
      },
      getDateList() {
        let list = []
        const start = moment().format('x')
        const end = moment().endOf('day').format('x')
        this.timestamp = (end - start) / 1000
        for (var i = 0; i < 7; i++) {
          let data = {
            title:
              i === 0
                ? '今天'
                : i === 1
                ? '明天'
                : moment()
                    .subtract(0 - i, 'days')
                    .format('DD') + '号',
            date: moment()
              .subtract(0 - i, 'days')
              .format('MM/DD'),
          }
          list.push(data)
        }
        this.dateList = list
        this.getList(list[0])
      },
      result(e) {
        console.log(e)
        this.sortType = e.sortType
        this.getList(this.dateList[this.num])
      },
      gospecial() {
        uni.navigateTo({
          url: '../special/special',
        })
      },
      btn(index) {
        this.num = index
        this.getList(this.dateList[index])
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
  }
  .active {
    font-size: 28rpx !important;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500 !important;
    color: #00bbcc !important;
  }
  .actives {
    font-size: 20rpx !important;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ff2d19 !important;
  }
  .time {
    background-color: #fff;
    padding: 0 32rpx;
    display: flex;
    align-items: center;
    height: 88rpx;
    justify-content: space-between;
    .time-one {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .countDown {
        height: 28rpx;
        line-height: 28rpx;
        min-width: 120rpx;
      }
      .time-top {
        font-size: 28rpx;
        color: #666;
      }
      .time-bottom {
        font-size: 20rpx;
        color: #999;
      }
    }
  }
  .tap {
    background-color: #fff;
    padding: 0 32rpx;
  }
  .content {
    padding: 20rpx 32rpx;
    .card {
      display: flex;
      // align-items: center;
      background-color: #fff;
      border-radius: 10rpx;
      margin-bottom: 20rpx;

      .card-img {
        width: 220rpx;
        height: 220rpx;
        // margin-right: 20rpx;
        image {
          width: 220rpx;
          height: 220rpx;
          border-radius: 10rpx;
        }
      }
      .card-right {
        width: 100%;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        padding: 20rpx;
        position: relative;
        .card-right-one {
          font-size: 28rpx;
          color: #333;
        }
        .card-right-two {
          font-size: 24rpx;
          color: #999;
          margin: 10rpx 0 50rpx;
        }
        .yuyue {
          color: #00bbcc;
        }

        .card-right-three {
          display: flex;
          justify-content: space-between;
          .card-right-three-left {
            color: #ff2d19;
            font-size: 24rpx;
            font-weight: 700;
            display: flex;
            align-items: center;
            image {
              width: 42rpx;
              height: 42rpx;
              margin-right: 8rpx;
            }
            .text1 {
              font-size: 34rpx;
            }
            .text2 {
              font-size: 22rpx;
              color: #999;
              font-weight: normal;
              margin-left: 10rpx;
            }
          }
          .card-right-three-right {
            width: 144rpx;
            height: 56rpx;
            background: linear-gradient(270deg, #ff8000 0%, #ff4d00 100%);
            border-radius: 4rpx;
            line-height: 56rpx;
            color: #fff;
            text-align: center;
          }
          .disable {
            color: #999999;
            background: #e6e6e6;
          }
          .yuyue {
            background: linear-gradient(270deg, #3dcccc 0%, #00bbcc 100%);
          }
        }
      }
    }
  }
</style>
