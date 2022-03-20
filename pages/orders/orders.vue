<template>
  <view class="warp">
    <view class="">
      <view class="tab">
        <view
          class="tab-one"
          v-for="(item, index) in onelist"
          @click="toggleTabone(index)"
          :key="index"
        >
          <view class="tab-title" :class="{ active: num == index }">
            {{ item.name }}
          </view>
          <view class="line" :class="{ actives: num == index }"> </view>
        </view>
      </view>
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
          <view class="list-one">
            <!-- <view class="list-one-left"> 2021/03/13至2021/03/14 1天1晚 </view> -->
            <view class="list-one-left"> 订单号：{{ item.order_id }} </view>
            <view class="list-one-right"> {{ status[item.order_status] }} </view>
          </view>
          <view class="cards" @click="gopending()">
            <view class="card-left">
              <image src="../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one">{{ item.mainTitle }} </view>
              <view class="card-right-two"> {{ item.room_name }} </view>

              <view class="card-right-four">
                <image src="/static/icon.png"></image>
                <text>{{ item.order_amount }}</text>
              </view>
            </view>
          </view>
          <view v-if="item.order_type === 2" class="list-four">
            <view
              v-if="item.order_status === 2"
              @click="queren(item.order_id)"
              class="list-four-left"
            >
              确认入住
            </view>
            <view v-if="item.order_status === 3" class="list-four-left"> 确认退房 </view>
            <view class="list-four-right" @click="tunquan(item.product_id)"> 我要屯券 </view>
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
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        num: 0, //一级选项
        tabIndex: 0, //二级选项
        tabShow: true, //二级菜单是否显示
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
            name: '全部类型',
            id: -1,
          },
          {
            name: '待确认',
            id: 0,
          },
          {
            name: '已使用',
            id: 1,
          },
          {
            name: '待入住',
            id: 2,
          },
          {
            name: '已入住',
            id: 3,
          },
          {
            name: '已离店',
            id: 4,
          },
          {
            name: '已预约',
            id: 5,
          },
        ],
        list: [],
        status: ['已支付', '已使用', '待入住', '已入住', '已离店', '已预约'],
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
      tunquan(id) {
        uni.navigateTo({
          url: `/pages/one/yuyue/yuyue?id=${id}`,
        })
      },
      queren(orderId) {
        this.$api.home.confirmCheckIn({ orderId }).then((res = []) => {
          uni.showToast({ title: '操作成功～' })
          this.getData()
        })
      },
      getData() {
        let params = {
          orderStatus: this.tabIndex - 1 < 0 ? '' : this.tabIndex - 1,
        }
        if (this.num === 1) {
          params = {
            ...params,
            proprietorId: this.USERINFO.id,
          }
        }
        this.$api.home.queryOrder(params).then((res = []) => {
          console.log(res)
          this.list = res || []
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
