<template>
  <view class="warp">
    <!-- <view class="title">
			<view class="title-left" :class="{active:num==0}" @click="bind(0)">
				商品
			</view>
			<view class="title-left" :class="{active:num==1}" @click="bind(1)">
				民宿
			</view>
		</view> -->
    <view class="content">
      <view class="" v-if="shopShow">
        <u-swipe-action
          :show="item.show"
          :index="index"
          v-for="(item, index) in 3"
          :key="item.id"
          @click="click"
          @open="open"
          :options="options"
        >
          <view class="card">
            <view class="card-img">
              <image src="../../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one">
                春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
              </view>
              <view class="card-right-two">
                <view class="card-right-two-left"> 白色XL </view>
                <view class="card-right-two-right"> *1 </view>
              </view>
              <view class="card-right-three">
                <view class="card-right-three-left"> ￥<text>88</text> </view>
              </view>
            </view>
          </view>
        </u-swipe-action>
      </view>
      <view class="" v-if="shopsShow">
        <u-swipe-action
          :show="item.show"
          :index="index"
          v-for="(item, index) in 4"
          :key="item.id"
          @click="click"
          @open="open"
          :options="options"
        >
          <view class="card">
            <view class="card-img">
              <image src="../../../static/images/house.png" mode=""></image>
            </view>
            <view class="card-right">
              <view class="card-right-one">千岛湖民宿</view>
              <view class="card-right-two">
                <view class="card-right-two-left"> 舒适房 </view>
                <view class="card-right-two-right"> *1 </view>
              </view>
              <view class="card-right-three">
                <view class="card-right-three-left"> <text>388</text> </view>
              </view>
            </view>
          </view>
        </u-swipe-action>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        num: 0,
        shopShow: false,
        shopsShow: true,
        params: {
          year: true,
          month: true,
        },
        disabled: false,
        btnWidth: 180,
        show: false,
        list: 3,
        options: [
          {
            text: '删除',
            style: {
              backgroundColor: '#dd524d',
            },
          },
        ],
      }
    },
    methods: {
      bind(index) {
        if (index == 0) {
          this.num = 0
          this.shopShow = true
          this.shopsShow = false
        } else if (index == 1) {
          this.num = 1
          this.shopShow = false
          this.shopsShow = true
        }
      },
      click(index, index1) {
        if (index1 == 1) {
          this.list.splice(index, 1)
          this.$u.toast(`删除了第${index}个cell`)
        } else {
          this.list[index].show = false
          this.$u.toast(`收藏成功`)
        }
      },
      // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
      open(index) {
        // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
        // 原本为'false'，再次设置为'false'会无效
        this.list[index].show = true
        this.list.map((val, idx) => {
          if (index != idx) this.list[idx].show = false
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
    height: 100vh;
  }
  .active {
    color: #333 !important;
  }

  .title {
    display: flex;
    justify-content: space-around;
    height: 84rpx;
    align-items: center;
    background-color: #fff;
    .title-left {
      font-size: 28rpx;
      color: #666;
      display: flex;
      align-items: center;
    }
  }
  .content {
    padding: 20rpx;
    .card {
      display: flex;
      align-items: center;
      background-color: #fff;
      padding: 20rpx;
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
  }
</style>
