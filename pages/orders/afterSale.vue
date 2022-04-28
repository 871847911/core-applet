<template>
  <view class="warp">
    <view class="">
      <view class="horizonal-tab" v-if="tabShow">
        <scroll-view scroll-x="true" scroll-with-animation class="scroll-tab">
          <block v-for="(item, index) in twolist" :key="index">
            <view
              class="scroll-tab-item"
              :class="{ active: tabIndex == index }"
              @tap="toggleTabtwo(index)"
            >
              {{ item.name }}
            </view>
          </block>
        </scroll-view>
      </view>
    </view>
    <view class="content">
      <!-- 全部订单 -->
      <view class="one" v-if="list && list.length > 0">
        <view class="list" v-for="item in list" :key="item.order_id">
          <view @click="goDetails(item)" class="list-one">
            <!-- <view class="list-one-left"> 2021/03/13至2021/03/14 1天1晚 </view> -->
            <view class="list-one-left"> 订单号：{{ item.order_id }} </view>
            <view v-if="item.order_type === 2" class="list-one-right">
              {{ status[item.order_status] }}
            </view>
            <view v-else class="list-one-right">
              {{ yStatus[item.order_status] }}
            </view>
          </view>
          <view @click="goDetails(item)" class="cards">
            <view class="card-left">
              <image :src="`${BASE_API}/sysFileInfo/preview?id=${item.pic_id}`" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one"
                >{{ item.main_title }}
                <text v-if="item.order_type === 0">预约</text>
                <text v-if="item.order_type === 1">房券</text>
              </view>
              <view class="card-right-two"> {{ item.room_name }} </view>

              <view class="card-right-four">
                <image src="/static/icon.png"></image>
                <text>{{ item.order_amount }}</text>
              </view>
            </view>
          </view>
          <view v-if="item.order_type === 2" class="list-four">
            <view
              v-if="item.order_status === 2 && num === 1"
              @click.stop="ruzhu(item.id)"
              class="list-four-left"
            >
              确认入住
            </view>
            <view
              v-if="item.order_status === 0 && num === 1"
              @click.stop="queren(item.id)"
              class="list-four-left"
            >
              确认有房
            </view>
            <view
              v-if="item.order_status === 0 && num === 1"
              @click.stop="judan(item.id)"
              class="list-four-left"
            >
              拒单
            </view>
            <view
              v-if="[0, 2].includes(item.order_status) && num === 0"
              @click.stop="tuikuan(item)"
              class="list-four-left"
            >
              申请退款
            </view>
            <view
              v-if="[6].includes(item.order_status) && num === 0"
              @click.stop="quxiaosq(item.id)"
              class="list-four-left"
            >
              取消申请
            </view>
            <view
              v-if="item.order_status === 3"
              @click.stop="confirmCheckOut(item.id)"
              class="list-four-left"
            >
              确认离店
            </view>
            <view class="list-four-right" @tab.stop="tunquan(item.product_id)"> 我要囤券 </view>
          </view>
        </view>
        <!-- <view class="list">
          <view class="list-one">
            <view class="list-one-left"> 2021/03/13至2021/03/14 1天1晚 </view>
            <view class="list-one-right"> 待处理 </view>
          </view>
          <view class="cards" @click="gocheckin()">
            <view class="card-left">
              <image src="../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one"> 遇染民宿酒店（杭州湖滨店） </view>
              <view class="card-right-two"> 温馨家庭房 </view>

              <view class="card-right-four"> <text>398</text>金米粒 </view>
            </view>
          </view>

          <view class="list-four">
            <view class="list-four-left"> 退款 </view>
            <view class="list-four-left"> 一键预定 </view>
            <view class="list-four-right"> 更换房型 </view>
          </view>
        </view>

        <view class="list">
          <view class="list-one">
            <view class="list-one-left"> 2021/03/13至2021/03/14 1天1晚 </view>
            <view class="list-one-right"> 取消/退款中 </view>
          </view>
          <view class="cards">
            <view class="card-left">
              <image src="../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one"> 遇染民宿酒店（杭州湖滨店） </view>
              <view class="card-right-two"> 温馨家庭房 </view>

              <view class="card-right-four"> <text>398</text>金米粒 </view>
            </view>
          </view>

          <view class="list-four">
            <view class="list-four-left"> 联系用户 </view>
          </view>
        </view>

        <view class="list">
          <view class="list-one">
            <view class="list-one-left"> 2021/03/13至2021/03/14 1天1晚 </view>
            <view class="list-one-right"> 已入住 </view>
          </view>
          <view class="cards">
            <view class="card-left">
              <image src="../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one"> 遇染民宿酒店（杭州湖滨店） </view>
              <view class="card-right-two"> 温馨家庭房 </view>

              <view class="card-right-four"> <text>398</text>金米粒 </view>
            </view>
          </view>

          <view class="list-four">
            <view class="list-four-left"> 删除订单 </view>
            <view class="list-four-right"> 确认离店 </view>
          </view>
        </view>

        <view class="list">
          <view class="list-one">
            <view class="list-one-left"> 2021/03/13至2021/03/14 1天1晚 </view>
            <view class="list-one-right"> 已离店 </view>
          </view>
          <view class="cards">
            <view class="card-left">
              <image src="../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one"> 遇染民宿酒店（杭州湖滨店） </view>
              <view class="card-right-two"> 温馨家庭房 </view>

              <view class="card-right-four"> <text>398</text>金米粒 </view>
            </view>
          </view>

          <view class="list-four">
            <view class="list-four-left"> 提醒评价 </view>
          </view>
        </view>
        <view class="list">
          <view class="list-one">
            <view class="list-one-left"> 2021/03/13至2021/03/14 1天1晚 </view>
            <view class="list-one-right"> 待处理 </view>
          </view>
          <view class="cards">
            <view class="card-left">
              <image src="../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one"> 遇染民宿酒店（杭州湖滨店） </view>
              <view class="card-right-two"> 温馨家庭房 </view>

              <view class="card-right-four"> <text>398</text>金米粒 </view>
            </view>
          </view>

          <view class="list-four">
            <view class="list-four-left"> 拒单 </view>
            <view class="list-four-left"> 确认有房 </view>
          </view>
        </view>
        <view class="list">
          <view class="list-one">
            <view class="list-one-left"> 2021/03/13至2021/03/14 1天1晚 </view>
            <view class="list-one-right"> 待入住 </view>
          </view>
          <view class="cards">
            <view class="card-left">
              <image src="../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one"> 遇染民宿酒店（杭州湖滨店） </view>
              <view class="card-right-two"> 温馨家庭房 </view>

              <view class="card-right-four"> <text>398</text>金米粒 </view>
            </view>
          </view>

          <view class="list-four">
            <view class="list-four-left"> 确认入住 </view>
          </view>
        </view> -->
      </view>
      <mescroll-empty v-else :option="emptyOption"></mescroll-empty>
    </view>
    <u-modal
      v-model="modalShow"
      title="退款原因"
      confirm-color="#00bbcc"
      show-cancel-button
      @confirm="tuikuanConfirm"
      @cancel="tuikuanCancel"
    >
      <view :style="{ padding: '20rpx' }" class="slot-content">
        <u-input
          v-model="tuikaunyy"
          border
          :placeholder-style="'color: #c0c4cc'"
          type="textarea"
          placeholder=" "
        />
      </view>
    </u-modal>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import config from '@/common/config.js'
  const { BASE_API } = config
  export default {
    data() {
      return {
        tuikaunyy: '',
        BASE_API: BASE_API,
        num: 0, //一级选项
        tabIndex: 0, //二级选项
        tabShow: true, //二级菜单是否显示
        modalShow: false,
        checkedId: {},
        onelist: [
          {
            name: '房源采购',
          },
          {
            name: '我的民宿',
          },
        ],
        twolist: [
          {
            name: '退款申请中',
            id: 6,
          },
          {
            name: '已退款',
            id: 7,
          },
        ],
        list: [],
        yStatus: [
          '已支付',
          '已使用',
          '待入住',
          '已入住',
          '已离店',
          '已预约',
          '申请退款中',
          '已退款',
        ],
        status: [
          '待确认',
          '已使用',
          '待入住',
          '已入住',
          '已离店',
          '已预约',
          '申请退款中',
          '已退款',
        ],
        emptyOption: {
          tip: '暂无数据', // 提示
          btnText: '',
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
    onShow() {
      if (this.IS_LOGIN) {
        this.getData()
      }
    },
    methods: {
      quxiaosq(orderId) {
        uni.showModal({
          title: '提示',
          content: '确定取消退款申请？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.cancelApplyRefund({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      tuikuanConfirm() {
        if (!this.tuikaunyy) return uni.showToast({ title: '退款原因不能为空', icon: 'none' })
        this.$api.home
          .orderRefundInfoAdd({
            orderId: this.checkedId.order_id,
            id: this.checkedId.id,
            refundReason: this.tuikaunyy,
          })
          .then((res = []) => {
            uni.showToast({ title: '操作成功～' })
            this.getData()
          })
      },
      tuikuanCancel() {
        this.tuikaunyy = ''
        this.checkedId = ''
      },
      tuikuan(id) {
        this.tuikaunyy = ''
        this.checkedId = id || {}
        this.modalShow = true
      },
      judan(orderId) {
        uni.showModal({
          title: '提示',
          content: '是否拒绝此订单？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.refuseCheckIn({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      ruzhu(orderId) {
        uni.showModal({
          title: '提示',
          content: '是否确认客户已入住？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.checkInOrderCheckIn({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      confirmCheckOut(orderId) {
        uni.showModal({
          title: '提示',
          content: '是否确认客户已离店？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.confirmCheckOut({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      goDetails(item) {
        if (item.order_type != 2) return
        uni.setStorageSync('ORDER_DETAILS', { ...item, num: this.num })
        uni.navigateTo({
          url: `/pages/orders/orderDetails`,
        })
      },
      tunquan(id) {
        uni.navigateTo({
          url: `/pages/one/yuyue/yuyue?id=${id}`,
        })
      },
      queren(orderId) {
        uni.showModal({
          title: '提示',
          content: '是否确认有房？',
          confirmColor: '#00bbcc',
          success: (res) => {
            if (res.confirm) {
              this.$api.home.confirmCheckIn({ id: orderId }).then((res = []) => {
                uni.showToast({ title: '操作成功～' })
                this.getData()
              })
            }
          },
        })
      },
      getData() {
        let params = {
          orderStatus: this.tabIndex === 0 ? 6 : 7,
          pageSize: 100,
        }
        this.$api.home.queryOrderGeneralList(params).then((res = {}) => {
          this.list = res.rows || []
        })
      },
      toggleTabone(index) {
        this.num = index
        this.getData()
      },
      toggleTabtwo(index) {
        this.tabIndex = index
        this.getData()
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
  }
  .slot-wrap {
    padding: 0 32rpx;
    background-color: #fff;
  }
  .tab {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    .tab-one {
      display: flex;
      flex-direction: column;
      align-items: center;
      .tab-title {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        margin: 22rpx 0 14rpx;
      }
      .line {
        width: 80rpx;
        height: 4rpx;
        background: #fff;
      }
    }
  }
  .horizonal-tab {
  }
  .active {
    color: #00bbcc !important;
    // font-size: 32rpx
  }
  .actives {
    background-color: #00bbcc !important;
  }
  .scroll-tab {
    white-space: nowrap; /* 必要，导航栏才能横向*/
    /* border-bottom: 1rpx solid #eee; */
    text-align: center;
    height: 84rpx;
    background-color: #fff;
    color: #333;
  }
  .scroll-tab-item {
    display: inline-block; /* 必要，导航栏才能横向*/
    margin: 20rpx 30rpx 0 30rpx;
  }
  .content {
    padding: 20rpx 32rpx;
    // background-color: #fff;
    .one {
      .list {
        padding: 20rpx;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 10rpx;
        margin-bottom: 20rpx;
        .list-one {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .list-one-left {
            font-size: 28rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            color: #333;
            display: flex;
            align-items: center;
            text {
              color: #ff7919;
            }
          }
          .list-one-right {
            color: #999;
            font-size: 26rpx;
          }
        }
        .card {
          display: flex;
          align-items: center;
          background-color: #fff;
          padding: 20rpx 0;
          border-radius: 10rpx;
          margin-bottom: 20rpx;
          .card-radio {
          }
          .card-img {
            width: 180rpx;
            height: 180rpx;
            margin-right: 20rpx;
            image {
              width: 180rpx;
              height: 180rpx;
            }
          }
          .card-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 180rpx;
            .card-right-one {
              font-size: 28rpx;
              color: #333;
              text {
                background: rgba(255, 45, 25, 0.2);
                border-radius: 4rpx;
                margin-left: 10rpx;
              }
            }
            .card-right-two {
              font-size: 24rpx;
              color: #999;
              display: flex;
              justify-content: space-between;
              .card-right-two-left {
              }
              .card-right-two-right {
              }
            }

            .card-right-three {
              display: flex;
              justify-content: space-between;
              .card-right-three-left {
                color: #ff2d19;
                font-size: 24rpx;
                text {
                  font-size: 32rpx;
                  font-weight: 700;
                }
              }
              .card-right-three-right {
              }
            }
          }
        }

        .cards {
          width: 686rpx;
          margin-bottom: 20rpx;
          padding: 20rpx 0;
          display: flex;
          background-color: #fff;
          border-radius: 10rpx;
          .card-left {
            width: 136rpx;
            height: 136rpx;
            margin-right: 20rpx;
            image {
              width: 136rpx;
              height: 136rpx;
            }
          }
          .card-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .card-right-one {
              font-size: 28rpx;
              color: #333;
              text {
                display: inline-block;
                width: 68rpx;
                height: 32rpx;
                font-size: 20rpx;
                color: #ff7919;
                background: rgba(255, 45, 25, 0.2);
                border-radius: 4rpx;
                line-height: 32rpx;
                text-align: center;
                margin-left: 15rpx;
              }
            }
            .card-right-two {
              font-size: 24rpx;
              color: #999;
            }
            .card-right-three {
              font-size: 24rpx;
              color: #999;
              text {
                margin-right: 10rpx;
              }
            }
            .card-right-four {
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
                font-size: 32rpx;
                font-weight: 700;
              }
            }
          }
        }

        .list-three {
          padding: 20rpx;
          background: #fafafa;
          .list-three-left {
            font-size: 28rpx;
            color: #333;
          }
          .list-three-right {
            font-size: 24rpx;
            color: #999;
          }
        }
        .list-four {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .list-four-left {
            width: 144rpx;
            height: 56rpx;
            border-radius: 39rpx;
            border: 2rpx solid #cccccc;
            text-align: center;
            line-height: 56rpx;
            margin-left: 20rpx;
          }
          .list-four-right {
            background: #00bbcc;
            border-radius: 28rpx;
            width: 144rpx;
            height: 56rpx;

            text-align: center;
            line-height: 56rpx;
            color: #fff;
            margin-left: 20rpx;
          }
        }
      }
    }
  }
</style>
