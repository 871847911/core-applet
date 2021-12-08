<template>
  <view class="warp">
    <view class="time">
      <view class="time-one" v-for="(item, index) in dateList" @click="btn(index)" :key="index">
        <view class="time-top" :class="{ active: index == num }">{{ item.title }}</view>
        <view class="time-bottom" v-if="index != 0" :class="{ actives: index == num }">{{
          item.date
        }}</view>
        <u-count-down
          :separator-color="index == num ? '#ff2d19' : ''"
          :color="index == num ? '#ff2d19' : ''"
          class="countDown"
          font-size="20"
          separator-size="20"
          :show-days="false"
          v-else
          :timestamp="timestamp"
        ></u-count-down>
      </view>
    </view>
    <view class="tap">
      <sl-filter :ref="'slFilter'" :menuList="menuList" @result="result"></sl-filter>
    </view>
    <view class="content">
      <view class="card" v-for="item in 4">
        <view class="card-img" @click="gospecial()">
          <image src="../../../static/images/house.png" mode=""></image>
        </view>
        <view class="card-right">
          <view class="card-right-one"> 似水中餐厅｜4588元奢华8~10… </view>
          <view class="card-right-two"> 已抢2345份 </view>
          <view class="card-right-three">
            <view class="card-right-three-left">
              <text class="text1">88</text> <text class="text2"></text>
            </view>
            <view class="card-right-three-right"> 立即抢购 </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import slFilter from '@/components/sl-filter/sl-filter.vue'
  import moment from 'moment'
  export default {
    components: {
      slFilter,
    },
    data() {
      return {
        num: 0,
        timestamp: 0,
        menuList: [
          {
            title: '综合排序',
            detailTitle: '子标题3',
            key: 'key_3',
            isSort: true,
            isMutiple: false,
            detailList: [
              {
                title: '综合排序',
                value: '1',
              },
              {
                title: '距离',
                value: '2',
              },
              {
                title: '销量',
                value: '2',
              },
            ],
          },
        ],
        dateList: [],
      }
    },
    onLoad() {
      this.getDateList()
    },
    methods: {
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
      },
      result(e) {
        console.log(e)
      },
      gospecial() {
        uni.navigateTo({
          url: '../special/special',
        })
      },
      btn(index) {
        console.log(index)
        this.num = index
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

        .card-right-three {
          display: flex;
          justify-content: space-between;
          .card-right-three-left {
            color: #ff2d19;
            font-size: 24rpx;
            font-weight: 700;
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
        }
      }
    }
  }
</style>
