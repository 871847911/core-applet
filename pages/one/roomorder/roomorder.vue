<template>
  <view class="warp">
    <view class="vr">
      <image :src="`${BASE_API}/sysFileInfo/preview?id=${roomDetail.picId}`" mode=""></image>
      <view class="vr-vr">
        <view class="vr-btn3" @click="gopicture"> 1/1 </view>
      </view>
    </view>

    <view class="content">
      <!-- 地址 -->
      <view class="address">
        <view class="address-money">
          <view class="address-money-left">
            <image src="/static/icon.png"></image>
            <text>{{ roomDetail.defaultPrice + packRoomList[selectfx].addPrice }}</text>
          </view>
          <view class="" style="width: 32rpx; height: 32rpx">
            <image
              style="width: 32rpx; height: 32rpx"
              src="../../../static/images/收藏@2x%20-%20万能看图王.png"
              mode=""
            ></image>
            <view class="" style="font-size: 16rpx; color: #333"> 收藏 </view>
          </view>
        </view>
        <view class="address-title">{{ roomDetail.mainTitle }}{{ roomDetail.viceTitle }}</view>
        <view class="address-title-one">{{ roomDetail.description }}</view>

        <view class="address-time">
          <view class="address-time-left"> 在线预约不可退 </view>
          <!-- <view class="address-time-right"> 可入住至2021-06-30 </view> -->
        </view>
      </view>

      <!-- 可订日期 -->
      <view class="date">
        <view
          class="date-title"
          v-for="(item, index) in dateList"
          :key="index"
          @click="selectDate = index"
          :class="{ selectDate: selectDate === index }"
        >
          <view class="date-one"> {{ item.date }} </view>
          <view class="date-two"> {{ item.title }} </view>
          <view class="date-three">
            {{ roomDetail.defaultPrice + packRoomList[selectfx].addPrice }}起
          </view>
        </view>
        <view class="date-title-one" @click="calendarShow = true">
          <view class="date-title-one-top"> 查看更多 可订日期 </view>
        </view>
      </view>
      <view class="contentz">
        <view class="content-title">
          <view class="content-title-left">
            <view class="content-title-one"> </view>
            <view class="content-title-two"> {{ roomDetail.name }} </view>
          </view>
        </view>

        <view class="content-list">
          <view
            class="content-list-one"
            v-for="(item, index) in packRoomList"
            :key="item.id"
            :class="{ activez: index == selectfx }"
            @click="handleClick(index)"
            >{{ item.roomName }}</view
          >
        </view>
      </view>
      <!-- <uni-calendar ref="calendar" :insert="false" :range="true" @confirm="confirm" /> -->
      <view class="address-map">
        <!-- <view class="address-map-three">
          <view class="map-three-one"> 5.0评分 </view>
          <view class="" style="font-weight: 700; color: #00bbcc"> “设施齐全 附近地铁” </view>
          <view class="map-three-two" @click="gocomment"> 241条评论 > </view>
        </view> -->
        <!-- <view class="address-map-one">
          <text>西湖湖滨商圈</text>
          <text>平海路38号</text>
        </view> -->
        <view class="address-map-two">
          <view class="map-one">
            <image src="../../../static/images/距离@2x.png" mode=""></image>
          </view>
          <view class="map-two"
            >{{ roomDetail.province }}{{ roomDetail.city }}{{ roomDetail.description
            }}{{ roomDetail.address }}</view
          >
          <view class="map-four"> </view>
          <view class="map-three" @click="phoneShow = true">
            <image src="../../../static/images/位置@2x.png" mode=""></image>
          </view>
          <u-popup v-model="phoneShow" mode="bottom" height="300">
            <view
              class=""
              style="font-size: 28rpx; color: #999; text-align: center; margin: 40rpx auto"
            >
              400-1000-8899
            </view>
            <view class="" style="margin: 0 52rpx; background-color: #f5f5f5; height: 2rpx"> </view>
            <view
              class=""
              style="font-size: 28rpx; color: #333; text-align: center; margin: 40rpx auto"
              @click="phone"
            >
              呼叫
            </view>
          </u-popup>
        </view>
      </view>
      <!-- 进入店铺 -->
      <view class="shop">
        <view class="shop-img">
          <image src="../../../static/images/house.png" mode=""></image>
        </view>
        <view class="shop-title">
          <view class="shop-title-top"> {{ roomDetail.name }} </view>
          <view class="shop-title-bottom"> {{ roomDetail.bnbDescription }} </view>
        </view>
        <view class="shop-btn" @click="goDetail"> 进入民宿 </view>
      </view>
      <!-- 介绍 -->
      <view class="introduce">
        <view class="title">
          <view class="title-one" @click="bind(0)">
            <view class="title-one-left" :class="{ actives: nums == 0 }"> 商品信息 </view>
            <view class="title-one-right" :class="{ activess: nums == 0 }"> </view>
          </view>
          <view class="title-one" @click="bind(1)">
            <view class="title-one-left" :class="{ actives: nums == 1 }"> 图文描述 </view>
            <view class="title-one-right" :class="{ activess: nums == 1 }"> </view>
          </view>
          <view class="title-one" @click="bind(2)">
            <view class="title-one-left" :class="{ actives: nums == 2 }"> 购买需知 </view>
            <view class="title-one-right" :class="{ activess: nums == 2 }"> </view>
          </view>
          <view class="title-one" @click="bind(3)">
            <view class="title-one-left" :class="{ actives: nums == 3 }"> 使用说明 </view>
            <view class="title-one-right" :class="{ activess: nums == 3 }"> </view>
          </view>
        </view>
        <view class="">
          <view class="introduce-one" style="margin-top: 40rpx"> 商品信息 </view>
          <view class="introduce-three"> </view>
          <view class="introduce-four">
            <image :src="`${BASE_API}/sysFileInfo/preview?id=${roomDetail.picId}`" mode=""></image>
          </view>
          <view class="introduce-five"> </view>
        </view>
        <view class="">
          <view class="introduce-one" style="margin-top: 40rpx"> 图文描述 </view>
          <view class="introduce-three"> </view>
          <view class="introduce-four">
            <image
              :src="`${BASE_API}/sysFileInfo/preview?id=${roomDetail.graphicDescId}`"
              mode=""
            ></image>
          </view>
          <view class="introduce-five"> </view>
        </view>

        <view class="">
          <view class="introduce-one"> 购买需知 </view>
          <view class="introduce-three"> </view>
          <view class="introduce-four">
            <image
              :src="`${BASE_API}/sysFileInfo/preview?id=${roomDetail.purchaseNotesId}`"
              mode=""
            ></image>
          </view>
          <view class="introduce-five"> </view>
        </view>

        <view class="">
          <view class="introduce-one"> 使用说明 </view>
          <view class="introduce-three"> </view>
          <view class="introduce-four">
            <image
              :src="`${BASE_API}/sysFileInfo/preview?id=${roomDetail.useExplanationId}`"
              mode=""
            ></image>
          </view>
        </view>
      </view>
      <view class="facilities">
        <view class="facilities-title"> 设施与服务 </view>
        <view class="facilities-list">
          <view v-for="item in facilities" :key="item.id" class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
            </view>
            <view class="list-one-title"> {{ item.name }} </view>
          </view>
        </view>
      </view>
      <!-- 订单必读 -->
      <view class="order">
        <view class="order-one"> 订单必读 </view>
        <view class="order-two">
          <view class="order-two-left">
            <image src="../../../static/images/编组%207@2x(1).png" mode=""></image>
          </view>
          <view class="order-two-right"> 入离时间 </view>
        </view>
        <view class="order-three"> 入住时间:14:00之后 入住时间:14:00之后 </view>
        <view class="order-two">
          <view class="order-two-left">
            <image src="../../../static/images/编组%207@2x(1).png" mode=""></image>
          </view>
          <view class="order-two-right"> 儿童及加床位 </view>
        </view>
        <view class="order-three"> 酒店允许携带儿童入住 </view>
        <view class="order-three"> 不接受18岁以下客人在无监护人陪同的情况家入住 </view>
        <view class="order-three">
          加床政策、儿童人数请参考所选的客房政策，若超过户型限制人数，可能需要收取额外费用。提出的任何请求均需要获得酒店的确认，所有服务以酒店告知为主。
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="footer-one">
        <view class="footer-one-img2">
          <image src="../../../static/images/客服.png" mode=""></image>
        </view>
        <view class="footer-one-title"> 客服 </view>
      </view>
      <!-- <view class="footer-one" @click="shareShow = true">
        <view class="footer-one-img3">
          <image src="../../../static/images/转发.png" mode=""></image>
        </view>
        <view class="footer-one-title"> 收藏 </view>
      </view> -->
      <!-- <view class="footer-two"> 加入我店 </view> -->
      <view class="footer-two" @tap="gosubmit"> 立即预订 </view>
      <view class="footer-three" @tap="goyuyue"> 屯卷 </view>
    </view>
    <!-- 分享弹窗 -->
    <u-popup v-model="shareShow" mode="bottom" height="300" :closeable="true">
      <view class="share">
        <view class="share-title"> 分享 </view>
        <view class="share-content">
          <view class="share-list">
            <view class="share-img">
              <image src="../../../static/images/转发%20-%20微信好友@2x.png" mode=""></image>
            </view>
            <view class="share-img-title"> 分享到朋友 </view>
          </view>
          <view class="share-list">
            <view class="share-img">
              <image src="../../../static/images/转发%20-%20朋友圈@2x.png" mode=""></image>
            </view>
            <view class="share-img-title"> 分享到朋友圈 </view>
          </view>
          <view class="share-list">
            <view class="share-img">
              <image src="../../../static/images/转发%20-%20生成海报@2x.png" mode=""></image>
            </view>
            <view class="share-img-title"> 生成分享海报 </view>
          </view>
        </view>
      </view>
    </u-popup>
    <u-popup mode="bottom" v-model="calendarShow">
      <view class="calendar">
        <calendar
          :datePriceList="datePriceList"
          :theme-color="'#00bbcc'"
          :is-fixed="false"
          :is-show="true"
          :start-date="startDate"
          :end-date="endDate"
          mode="2"
          @getDatePrice="getDatePrice"
          @callback="confirm"
        >
          <template v-slot:header>
            <view class="calendar-header">
              <u-icon @click="calendarShow = false" name="close"></u-icon>
            </view>
          </template>
          <template v-slot:footer>
            <view class="calendar-foot">
              <u-button type="primary" @click="calendarShow = false">确定</u-button>
            </view>
          </template>
        </calendar>
      </view>
    </u-popup>
  </view>
</template>

<script>
  import moment from 'moment'
  import Calendar from '@/components/mobile-calendar-simple/Calendar.vue'
  import config from '@/common/config.js'
  const { BASE_API } = config

  export default {
    components: {
      Calendar,
    },
    data() {
      return {
        BASE_API: BASE_API,
        vrShow: true, //VR按钮显示
        num: 0,
        nums: 0,
        btnShow: false, //电话隐藏
        phoneShow: false, //电话隐藏
        detailsShow: false, //详情隐藏
        shareShow: false, //分享隐藏
        startDate: '',
        endDate: '',
        betweenStart: '',
        betweenEnd: '',
        calendarShow: false,
        roomDetail: {},
        packRoomList: [],
        selectfx: 0,
        facilities: [],
        dateList: [],
        datePriceList: [],
        selectDate: '',
      }
    },
    onLoad(option = {}) {
      this.getRoomDetail(option.id)
      this.getDatePrice()
      let list = []
      const start = moment().format('x')
      const end = moment().endOf('day').format('x')
      this.timestamp = (end - start) / 1000
      var week = ['一', '二', '三', '四', '五', '六', '日']
      for (var i = 0; i < 3; i++) {
        const index = moment()
          .subtract(0 - i, 'days')
          .day()
        let data = {
          title: '星期' + week[index - 1],
          date: moment()
            .subtract(0 - i, 'days')
            .format('MM/DD'),
        }
        list.push(data)
      }
      this.dateList = list
    },
    methods: {
      //计算未来几天价格
      getDatePrice(day) {
        this.datePriceList = []
        for (var i = 0; i < 10; i++) {
          let data = {
            date: moment(day)
              .subtract(0 - i, 'days')
              .format('YYYY/MM/DD'),
            price: '¥688',
          }
          this.datePriceList.push(data)
        }
      },
      handleClick(index) {
        this.selectfx = index
      },
      goDetail() {
        uni.navigateTo({
          url: `../../homestay/homestay?id=${this.roomDetail.bnbId}`,
        })
      },
      getRoomDetail(id) {
        this.$api.home.packDetail({ packId: id }).then((res = {}) => {
          this.roomDetail = res.packDetail || {}
          this.packRoomList = res.packRoomList || []
          let facilitiesList = res.packDetail.facilities.split(',')
          this.$api.home.facilities().then((res = {}) => {
            this.facilities = (res.rows || []).filter((item) =>
              facilitiesList.includes(`${item.id}`)
            )
            console.log(this.facilities)
          })
        })
      },
      confirm(e) {
        console.log(e)
        this.selectDate = ''
      },
      btn(index) {
        if (index == 0) {
          this.num = 0
          this.vrShow = true
          this.btnShow = false
        } else if (index == 1) {
          this.num = 1
          this.vrShow = false
          this.btnShow = true
        }
      },
      bind(index) {
        if (index == 0) {
          this.nums = 0
        } else if (index == 1) {
          this.nums = 1
        } else if (index == 2) {
          this.nums = 2
        } else if (index == 3) {
          this.nums = 3
        }
      },
      // 跳转房型图片
      gopicture() {
        uni.navigateTo({
          url: '../picture/picture',
        })
      },
      // 点击打电话
      phone() {
        uni.makePhoneCall({
          // 手机号
          phoneNumber: '40010008899',
          // 成功回调
          success: (res) => {
            console.log('调用成功!')
          },
          // 失败回调
          fail: (res) => {
            console.log('调用失败!')
          },
        })
      },
      // 跳转评论页面
      gocomment() {
        uni.navigateTo({
          url: '../comment/comment',
        })
      },
      // 跳转更多景点
      goscenicspot() {
        uni.navigateTo({
          url: '../scenicspot/scenicspot',
        })
      },
      // 跳转预约页面
      goyuyue() {
        const id = this.roomDetail.id
        uni.navigateTo({
          url: `../yuyue/yuyue?id=${id}`,
        })
      },
      gosubmit() {
        const id = this.roomDetail.id
        uni.navigateTo({
          url: `../submit/submit?id=${id}&fx=${this.selectfx}`,
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .activez {
    background: rgba(0, 187, 204, 0.1) !important;
    border: 2rpx solid #00bbcc;
    color: #00bbcc !important;
  }
  .calendar {
    .calendar-header {
      text-align: center;
      font-size: 32rpx;
      padding: 40rpx 0 40rpx 0;
    }
    .calendar-foot {
      padding: 20rpx 32rpx 68rpx 32rpx;
    }
  }
  .active {
    background-color: #ff4d00 !important;
    color: #fff;
  }

  .actives {
    font-size: 28rpx;
    font-weight: 700;
  }
  .actives-bgc {
    background-color: #ff4d00;
  }
  .warp {
    background-color: #f5f5f5;
    padding-bottom: 200rpx;
  }
  .vr {
    width: 750rpx;
    height: 536rpx;
    position: relative;
    overflow: hidden;
    image {
      height: 597rpx;
      width: 750rpx;
    }
    .vr-btn {
      position: absolute;
      top: 266rpx;
      left: 315rpx;
      image {
        width: 120rpx;
        height: 120rpx;
      }
    }
    .vr-vr {
      position: absolute;
      top: 476rpx;
      left: 630rpx;
      display: flex;

      .vr-btn3 {
        width: 74rpx;
        height: 40rpx;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 20px;
        text-align: center;
        font-size: 22rpx;
        color: #fff;
        line-height: 40rpx;
      }
    }
  }
  .contentz {
    padding: 20rpx;
    width: 686rpx;
    background-color: #fff;
    margin: 20rpx 0;
    .content-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
      .content-title-left {
        display: flex;
        align-items: center;
        .content-title-one {
          width: 12rpx;
          height: 12rpx;
          background: #00bbcc;
          border-radius: 2rpx;
          margin-right: 20rpx;
        }
        .content-title-two {
          font-size: 32rpx;
          color: #333;
        }
      }
      .content-title-right {
        font-size: 26rpx;
        color: #999;
      }
    }

    .content-list {
      .content-list-one {
        // padding: 10rpx 40rpx;
        width: 338rpx;
        height: 60rpx;
        text-align: center;
        line-height: 60rpx;
        font-size: 28rpx;
        margin-bottom: 20rpx;
        border-radius: 30rpx;
        background: #f5f5f5;
        color: #666;
      }
    }
  }
  .content {
    padding: 0 32rpx;
    margin-top: 20rpx;
    .facilities {
      padding: 20rpx;
      background-color: #fff;
      margin: 20rpx 0;
      .facilities-title {
        font-size: 28rpx;
        color: #333;
        font-weight: 700;
      }
      .facilities-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .list-one {
          width: 194rpx;
          display: flex;
          margin-top: 20rpx;
          .list-one-img {
            margin-right: 10rpx;
            image {
              width: 36rpx;
              height: 36rpx;
            }
          }
          .list-one-title {
            width: 148rpx;
            height: 36rpx;
            color: #999;
          }
          .list-one-title1 {
            width: 148rpx;
            height: 36rpx;
            color: #333;
          }
        }
      }
    }

    .order {
      padding: 20rpx;
      background-color: #fff;
      .order-one {
        font-size: 28rpx;
        color: #333;
        font-weight: 700;
        margin-bottom: 10rpx;
      }
      .order-two {
        display: flex;
        margin: 10rpx 0;
        .order-two-left {
          image {
            width: 40rpx;
            height: 40rpx;
          }
          margin-right: 10rpx;
        }
        .order-two-right {
          font-size: 28rpx;
          color: #333;
        }
      }
      .order-three {
        font-size: 26rpx;
        color: #999;
        line-height: 2em;
      }
    }
    .address {
      width: 686rpx;
      padding: 20rpx;
      background-color: #fff;
      .address-money {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10rpx;
        .address-money-left {
          color: #ff2d19;
          font-size: 24rpx;
          display: flex;
          align-items: center;
          image {
            width: 42rpx;
            height: 42rpx;
            margin-right: 8rpx;
          }
          text {
            font-size: 40rpx;
          }
        }
      }
      .address-title {
        font-size: 28rpx;
        color: #333;
        font-weight: 500;
        border-radius: 10rpx;
        // margin: 20rpx 0;
      }
      .address-title-one {
        font-size: 24rpx;
        margin: 10rpx 0;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #999;
      }
      .address-label {
        display: flex;
        padding: 10rpx 0 20rpx;
        border-bottom: 1rpx solid #f5f5f5;
        image {
          width: 92rpx;
          height: 34rpx;
          margin-right: 20rpx;
        }
      }

      .address-time {
        font-size: 24rpx;
        display: flex;
        justify-content: space-between;
        margin-top: 20rpx;
        .address-time-left {
          color: #00bbcc;
        }
        .address-time-right {
          color: #999;
        }
      }
    }

    .address-map {
      margin-top: 20rpx;
      background-color: #fff;
      padding: 20rpx;
      border-radius: 10rpx;
      .address-map-one {
        margin-top: 20rpx;
        text {
          color: #333;
          font-size: 24rpx;
          font-weight: 500;
          margin-right: 22rpx;
        }
      }
      .address-map-two {
        display: flex;
        margin: 10rpx 0 20rpx;
        .map-one {
          width: 34rpx;
          height: 34rpx;
          margin-right: 10rpx;
          image {
            width: 34rpx;
            height: 34rpx;
          }
        }
        .map-two {
          font-size: 24rpx;
          color: #999;
          width: 472rpx;
          letter-spacing: 2rpx;
        }
        .map-four {
          height: 40rpx;
          width: 2rpx;
          background-color: #e6e6e6;
          margin: 0 40rpx;
        }
        .map-three {
          width: 48rpx;
          height: 48rpx;
          image {
            width: 48rpx;
            height: 48rpx;
          }
        }
      }

      .address-map-three {
        width: 646rpx;
        height: 80rpx;
        background-color: #f5f5f5;
        padding: 20rpx;
        display: flex;
        justify-content: space-between;
        .map-three-one {
          font-size: 28rpx;
          font-weight: 700;
          color: #00bbcc;
        }
        .map-three-two {
          font-size: 26rpx;
          color: #999;
        }
      }
    }
    .content-list-one {
      // padding: 10rpx 40rpx;
      width: 338rpx;
      height: 60rpx;
      text-align: center;
      line-height: 60rpx;
      font-size: 28rpx;
      margin-bottom: 20rpx;
      border-radius: 30rpx;
      background: #f5f5f5;
      color: #666;
    }
    .date {
      width: 686rpx;
      height: 192rpx;
      margin-top: 20rpx;
      background-color: #fff;
      padding: 20rpx;
      border-radius: 10rpx;
      display: flex;
      justify-content: space-between;
      .selectDate {
        background: rgba(0, 187, 204, 0.1) !important;
        border: 2rpx solid #00bbcc;
      }

      .date-title {
        width: 148rpx;
        height: 152rpx;
        border-radius: 4rpx;
        border: 2rpx solid #e6e6e6;
        padding: 20rpx;
        font-size: 24rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-family: PingFangSC-Regular, PingFang SC;
        .date-one {
          color: #666;
        }
        .date-two {
          color: #999;
        }
        .date-three {
          color: #ff2200;
          font-weight: 700;
        }
      }
      .date-title-one {
        width: 148rpx;
        height: 152rpx;
        border-radius: 4rpx;
        padding: 20rpx;
        font-size: 24rpx;
        background: rgba(255, 77, 0, 0.1);
        color: #ff4d00;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: space-between;
        font-family: PingFangSC-Regular, PingFang SC;
      }
    }

    .house-details {
      width: 686rpx;
      padding: 20rpx;
      background-color: #fff;
      margin-top: 20rpx;
      .details-title {
        display: flex;
        justify-content: space-around;
        padding: 0 20rpx;
        background-color: #f5f5f5;
        height: 80rpx;
        align-items: center;
        margin-bottom: 20rpx;
        .details-title-one {
          font-size: 28rpx;
          color: #333;
          font-weight: 700;
        }
        .details-title-two {
          font-size: 26rpx;
          color: #999;
        }
      }
      .details-image {
        .image-img {
          width: 646rpx;
          height: 320rpx;
          position: relative;
          image {
            width: 646rpx;
            height: 320rpx;
          }
          .image-btn {
            position: absolute;
            width: 74rpx;
            height: 40rpx;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 22rpx;
            color: #fff;
            text-align: center;
            line-height: 40rpx;
            right: 20rpx;
            bottom: 20rpx;
            font-size: 22rpx;
          }
        }

        .image-title {
          display: flex;
          justify-content: space-between;
          margin: 10rpx 0;
          .image-title-left {
            font-size: 28rpx;
            color: #333;
          }
          .image-title-right {
            font-size: 26rpx;
            color: #999;
          }
        }

        .image-one {
          image {
            width: 92rpx;
            height: 34rpx;
            margin-right: 20rpx;
          }
        }

        .image-title-one {
          display: flex;
          justify-content: space-between;
          height: 54rpx;
          align-items: center;
          padding-bottom: 20rpx;
          border-bottom: 2rpx solid #f5f5f5;
          .image-title-one-left {
            font-size: 24rpx;
            color: #ff2d19;
            text {
              font-size: 32rpx;
              font-weight: 700;
            }
          }

          .image-title-one-right {
            font-size: 24rpx;
            color: #333;
            width: 160rpx;
            height: 54rpx;
            background-color: #f5f5f5;
            border-radius: 27rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            image {
              width: 34rpx;
              height: 34rpx;
            }
          }
        }

        .image-title-two {
          width: 646rpx;
          height: 172rpx;
          background: #f5f5f5;
          border-radius: 4rpx;
          padding: 20rpx;
          margin-top: 20rpx;
          .image-title-two-one {
            font-size: 28rpx;
            color: #333;
          }
          .image-title-two-two {
            font-size: 24rpx;
            color: #999;
          }
          .image-title-two-three {
            height: 60rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .image-title-two-three-left {
              font-size: 24rpx;
              color: #ff2d19;
              font-weight: 700;
              text {
                font-size: 32rpx;
              }
            }
            .image-title-two-three-right {
              width: 132rpx;
              height: 60rpx;
              background: #999999;
              font-size: 28rpx;
              color: #fff;
              line-height: 60rpx;
              text-align: center;
              border-radius: 30rpx;
            }
          }
        }
      }
    }
    .shop {
      padding: 20rpx;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .shop-img {
        width: 120rpx;
        height: 120rpx;
        image {
          width: 120rpx;
          height: 120rpx;
        }
      }
      .shop-title {
        margin-right: 20rpx;
        width: 382rpx;
        padding-left: 20rpx;
        .shop-title-top {
          font-size: 28rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 800;
          color: #333333;
          margin-top: -45rpx;
        }
        .shop-title-bottom {
          font-size: 22rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
      .shop-btn {
        width: 144rpx;
        height: 56rpx;
        background: linear-gradient(270deg, #ff8833 0%, #ff6619 100%);
        border-radius: 6rpx;
        font-size: 26rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 56rpx;
        text-align: center;
      }
    }

    .introduce {
      padding: 20rpx;
      background-color: #fff;
      margin-top: 20rpx;

      .title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1rpx solid #f5f5f5;
        .title-one {
          display: flex;
          flex-direction: column;
          align-items: center;
          .title-one-left {
            font-size: 26rpx;
            color: #333;
          }
          .title-one-right {
            width: 32rpx;
            height: 4rpx;
            background: #fff;
            border-radius: 4rpx;
            margin-top: 4rpx;
            margin-bottom: 20rpx;
          }
        }
      }

      .introduce-one {
        font-size: 32rpx;
        color: #333;
        text-align: center;
      }
      .introduce-two {
        font-size: 22rpx;
        color: #999;
        text-align: center;
      }
      .introduce-three {
        width: 20px;
        height: 2px;
        background: #ff4d00;
        margin: 20rpx auto 12rpx;
      }
      .introduce-four {
        font-size: 26rpx;
        color: #999;
        line-height: 2em;
        letter-spacing: 1rpx;
      }
      .introduce-five {
        width: 646rpx;
        height: 2rpx;
        background: #f5f5f5;
        border-radius: 1rpx;
        margin: 40rpx 0;
      }
    }

    .recommend {
      margin-bottom: 150rpx;
      .recommend-title {
        font-size: 32rpx;
        font-weight: 700;
        color: #333;
        margin: 40rpx 0 20rpx;
      }
      .recommend-card {
        display: flex;
        background-color: #fff;
        margin-bottom: 20rpx;
        .recommend-card-left {
          width: 220rpx;
          height: 220rpx;
          image {
            width: 220rpx;
            height: 220rpx;
          }
        }

        .recommend-card-right {
          padding: 20rpx 0 20rpx 20rpx;
          .recommend-card-one {
            font-size: 28rpx;
            color: #333;
          }
          .recommend-card-two {
            margin: 10rpx 0 48rpx;
            image {
              width: 86rpx;
              height: 34rpx;
              margin-right: 12rpx;
            }
          }
          .recommend-card-three {
            font-size: 24rpx;
            color: #ff2d19;
            text {
              font-size: 32rpx;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 750rpx;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20rpx 32rpx 68rpx 32rpx;
    align-items: center;
    position: fixed;
    bottom: 0;
    .footer-one {
      height: 80rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 10rpx 0;
      .footer-one-img1 {
        image {
          width: 36rpx;
          height: 42rpx;
        }
      }
      .footer-one-img2 {
        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
      .footer-one-img3 {
        image {
          width: 36rpx;
          height: 36rpx;
        }
      }
      .footer-one-title {
        font-size: 16rpx;
        color: #999;
      }
    }

    .footer-two {
      width: 270rpx;
      height: 80rpx;
      border-radius: 39rpx;
      border: 2rpx solid #ff7919;
      font-size: 28rpx;
      color: #ff7919;
      text-align: center;
      line-height: 80rpx;
    }
    .footer-three {
      width: 270rpx;
      height: 80rpx;
      background: linear-gradient(90deg, #ff2d19 0%, #ff6619 100%);
      border-radius: 39rpx;
      font-size: 28rpx;
      color: #fff;
      text-align: center;
      line-height: 80rpx;
    }
  }
  .detailsShow {
    padding: 20rpx;
    background-color: #f5f5f5;
    .detailsShow-title {
      font-size: 32rpx;
      color: #333;
      text-align: center;
      margin-bottom: 20rpx;
      font-weight: 700;
      font-family: PingFangSC-Medium, PingFang SC;
    }
    .details-vr {
      position: relative;
      .details-vr-img {
        width: 686rpx;
        height: 400rpx;
        margin: auto;
        image {
          width: 686rpx;
          height: 400rpx;
        }
      }
      .details-vr-btn {
        width: 74rpx;
        height: 40rpx;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 20px;
        text-align: center;
        font-size: 22rpx;
        color: #fff;
        line-height: 40rpx;
        position: absolute;
        right: 40rpx;
        bottom: 20rpx;
      }
    }

    .content {
      padding: 0;
      .facilities {
        width: 686rpx;
      }
      .order {
        width: 686rpx;
      }
      .details-btn {
        width: 686rpx;
        height: 80rpx;
        background: #ff4d00;
        border-radius: 39rpx;
        font-size: 28rpx;
        color: #fff;
        line-height: 80rpx;
        text-align: center;
        margin-top: 50rpx;
        margin-bottom: 20rpx;
      }
    }
  }
  // 分享
  .share {
    border-radius: 10rpx 10rpx 0 0;
    .share-title {
      font-size: 32rpx;
      color: #333;
      text-align: center;
      margin: 20rpx 0 40rpx;
      font-weight: 700;
      font-family: PingFangSC-Medium, PingFang SC;
    }
    .share-content {
      display: flex;
      justify-content: space-around;
      padding: 0 60rpx;
      .share-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        .share-img {
          width: 82rpx;
          height: 80rpx;
          image {
            width: 82rpx;
            height: 80rpx;
          }
        }
        .share-img-title {
          font-size: 24rpx;
          color: #666;
          margin-top: 10rpx;
        }
      }
    }
  }
</style>
