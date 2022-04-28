<template>
  <view class="warp">
    <view class="vr">
      <image src="../../../static/images/图片.png" mode="heightFix"></image>

      <view class="vr-vr">
        <view class="vr-btn3" @click="gopicture"> 1/8 </view>
      </view>
    </view>
    <view class="content">
      <!-- 地址 -->
      <view class="address">
        <view class="address-money">
          <view class="address-money-left"> ￥<text>1688</text> </view>
          <view class="" style="width: 32rpx; height: 32rpx">
            <image
              style="width: 32rpx; height: 32rpx"
              src="../../../static/images/收藏@2x%20-%20万能看图王.png"
              mode=""
            ></image>
            <view class="" style="font-size: 16rpx; color: #333"> 收藏 </view>
          </view>
        </view>
        <view class="address-title">
          春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休闲上衣外套
        </view>
        <view class="address-title-one"> 【闪电发货★售后保证★七天退换】 </view>
      </view>
      <!-- 信息 -->
      <view class="card">
        <view class="card-one">
          <view class="card-one-left"> 已选 </view>
          <view class="card-one-center"> 白色，XL，1件，可选服务 </view>
          <view class="card-one-right" @click="sizeShow = true">
            <u-icon name="arrow-right" color="#999" size="30"></u-icon>
          </view>
        </view>
        <view class="card-one">
          <view class="card-one-left"> 优惠 </view>
          <view class="card-one-center">
            <view class="card-one-center-left"> 领劵 </view>
            <view class=""> 满50元立减30元商城房券 </view>
          </view>
          <view class="card-one-right" @click="couponShow = true">
            <u-icon name="arrow-right" color="#999" size="30"></u-icon>
          </view>
        </view>
        <view class="card-one">
          <view class="card-one-left"> 送至 </view>
          <view class="card-one-center">
            <u-icon name="map" color="#FF4D00" size="30"></u-icon>浙江省 杭州市 拱墅区 万科广场…
          </view>
          <view class="card-one-right" @click="editShow = true">
            <u-icon name="arrow-right" color="#999" size="30"></u-icon>
          </view>
        </view>
        <view class="card-two">
          <view class="card-two-left"> 运费 </view>
          <view class="card-two-right"> ¥0.00（请以提交订单时为准） </view>
        </view>
      </view>

      <!-- 商品评价 -->
      <view class="evaluate">
        <view class="evaluate-title">
          <view class="evaluate-title-left"> 商品评价 </view>
          <view class="evaluate-title-right" @click="productreviews()"> 100+条 > </view>
        </view>
        <view class="content-list" v-for="item in 3">
          <view class="content-list-one">
            <view class="content-list-left">
              <view class="content-list-left-img">
                <image src="../../../static/images/位图(1).png" mode=""></image>
              </view>
              <view class="content-list-left-name">
                <view class="content-list-name"> 李***992 </view>
                <view class="content-list-name-img">
                  <view class="" v-for="item in 5">
                    <image src="../../../static/images/@2x.png" mode=""></image>
                  </view>
                </view>
              </view>
            </view>
            <view class="content-list-right"> 2020-05-12 </view>
          </view>
          <view class="content-list-four">
            <view class="content-list-four-left"> 快乐民宿 </view>
            <view class="content-list-four-center"> </view>
            <view class="content-list-four-right"> 白色 XL </view>
          </view>
          <view class="content-list-two">
            酒店地理位置好，交通方便，也有停车场。附近700米左右有地铁站，
            酒店傍边走20步左右就有一个小便利店，房间干净，住着很舒适。
            服务人员很热情，酒店提供免费的农夫山泉矿泉水。总体还是不错的，价格又很便宜的。
          </view>
          <view class="content-list-three">
            <view class="content-list-three-one" v-for="item in 3">
              <image src="../../../static/images/house.png" mode=""></image>
            </view>
          </view>
        </view>
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
            <view class="title-one-left" :class="{ actives: nums == 2 }"> 代买需知 </view>
            <view class="title-one-right" :class="{ activess: nums == 2 }"> </view>
          </view>
          <view class="title-one" @click="bind(2)">
            <view class="title-one-left" :class="{ actives: nums == 2 }"> 使用说明 </view>
            <view class="title-one-right" :class="{ activess: nums == 2 }"> </view>
          </view>
        </view>
        <view class="">
          <view class="introduce-one" style="margin-top: 40rpx"> 商品信息 </view>
          <view class="introduce-two"> Product Information </view>
          <view class="introduce-three"> </view>
          <view class="introduce-four"> 【住】樱花/修竹大床房，杏会双人床，选1间2晚连住 </view>
          <view class="introduce-four"> 【含】每日精选双人早餐 </view>
          <view class="introduce-four"> 【含】入住期间双人正餐1份（三菜一汤，时令菜品） </view>
          <view class="introduce-four"> 【含】欢迎水果一份 </view>
          <view class="introduce-four"> 【含】双人下午茶1份（下午14-16点） </view>
          <view class="introduce-four"> 【含】免费户外泳池、KTV、桌球、棋牌 </view>
          <view class="introduce-four"> 【含】免费停车、免费WIFI </view>
          <view class="introduce-four">
            【趣味体验】绿色农家菜园采摘、应季水果采摘（需收费）、宠物嬉戏（猫、狗、兔子）
            注：2-3月挖笋、4月树梅野草莓、5月车厘子、6月蓝莓
          </view>

          <view class="introduce-five"> </view>
        </view>

        <view class="">
          <view class="introduce-one"> 购买需知 </view>
          <view class="introduce-two"> Purchase Notes </view>
          <view class="introduce-three"> </view>
          <view class="introduce-four"> 1、套餐有效期:有效期至2021.6.30 </view>
          <view class="introduce-four">
            2、使用规则:周日至周五不加价、周六加价299元/间夜, 法定节假日加价599元/间夜(春
            节2021年2月10日-16日,清明节2021年4月2日-4日，劳动节2021年4月30日-5月4日，端午节2021年06月11日-06月13日)
          </view>
          <view class="introduce-four">
            3、升级房型:在2条补差基础上，可补差100元/ 间夜升级到梵尘/探林(大床房)，
            可补差400元/间夜升级到听涛/望月树屋/观星(树屋)注:观星树屋泡池使用需要另外收费300元/小时
          </view>
          <view class="introduce-four">
            4、可入住人数:每间房仅限1- -2成人入住，1.4米(含)以下儿童享受不另收费，须大人陪同
          </view>
          <view class="introduce-four">
            5、加床规则:仅梵尘、探林可加床，300元/床/晚(含早餐1份)
          </view>
          <view class="introduce-four">
            6、加早规则:加早成人58元/位，儿童3岁以下免费, 3岁到12岁半价，12岁以上同成人
          </view>
          <view class="introduce-four">
            7、宠物规则:可携带宠物(收宠物清洁费，小型犬100元/只，大型犬200元/只)
          </view>
          <view class="introduce-four"> 8、退改规则:未预约可退，预订成功后订单不可改退 </view>
          <view class="introduce-four">
            9、开票规则:本价格含税和服务费，若客人需要发票，由酒店给客人开具发票
          </view>
          <view class="introduce-four"> 10、入住时间:当日12点之后，离店时间:次日12:00前 </view>
          <view class="introduce-five"> </view>
        </view>

        <view class="">
          <view class="introduce-one"> 使用说明 </view>
          <view class="introduce-two"> Instructions </view>
          <view class="introduce-three" style="margin: 50rpx auto 36rpx"> </view>
          <view class="introduce-four">
            若确认出行日期，马上预订日期和房间入住，请直接选择“查房态”-选择日期、房间，订单支付后即为预订，商户接.单后即可入住。
          </view>
          <view class="introduce-four">
            若暂未确认出行日期，请选择“立即囤券”，需要使用的时 候，进入[我的] -
            [卡券]即可查询卡券并使用，点击[券]进入详情，点击券下方的[立即使用]按钮，即可进行使用，选择该房券适用的房型和入住/离店日期，勾选券，提交订单即可。
          </view>
        </view>
      </view>
      <!-- 超值推荐 -->
      <view class="recommend">
        <view class="recommend-title"> 超值推荐 </view>
        <view class="content-recommend-two">
          <view class="content-recommend-two-first" v-for="(item, index) in 6" :key="index">
            <view class="content-recommend-two-one">
              <image src="../../../static/images/位图(1).png" mode=""></image>
            </view>
            <view class="content-recommend-two-two">
              「已消毒步行西湖10多分钟 近浙大 黄龙 植物…
            </view>
            <view class="content-recommend-two-three"> ￥<text>398</text> </view>
            <view class="content-recommend-two-four"> 1000+条评论 </view>
          </view>
        </view>
      </view>
    </view>

    <view class="footer">
      <view class="footer-one">
        <view class="footer-one-img1">
          <image src="../../../static/images/返回首页.png" mode=""></image>
        </view>
        <view class="footer-one-title"> 首页 </view>
      </view>
      <view class="footer-one">
        <view class="footer-one-img2">
          <image src="../../../static/images/客服.png" mode=""></image>
        </view>
        <view class="footer-one-title"> 客服 </view>
      </view>
      <view class="footer-one" @click="shareShow = true">
        <view class="footer-one-img3">
          <image src="../../../static/images/转发.png" mode=""></image>
        </view>
        <view class="footer-one-title"> 分享 </view>
      </view>
      <view class="footer-two"> 加入购物车 </view>
      <view class="footer-three" @click="gocondirmorder()"> 直接购买 </view>
    </view>
    <!-- 配送弹窗 -->
    <u-popup v-model="editShow" height="800" mode="bottom" closeable="true">
      <view class="box">
        <view class="box-title"> 配送至 </view>
        <view class="box-content" v-for="item in 3">
          <view class="">
            <u-checkbox v-model="checked" shape="circle" @change="checkboxChange"></u-checkbox>
          </view>
          <view class="box-right">
            <view class="box-right-one"> 广宇万科公园里10号楼1单元9楼901室 </view>
            <view class="box-right-two"> 浙江省 杭州市 拱墅区 </view>
          </view>
        </view>
      </view>
    </u-popup>
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
    <!-- 尺寸弹窗 -->
    <u-popup v-model="sizeShow" mode="bottom" height="1000" :closeable="true">
      <view class="size">
        <view class="size-title">
          <view class="size-title-left">
            <image src="../../../static/images/house.png" mode=""></image>
          </view>
          <view class="size-title-right"> ￥<text>1688</text> </view>
        </view>
        <view class="size-one">
          <view class="size-one-title"> 尺码 </view>
          <view class="size-one-list">
            <view class="size-one-list-one" v-for="item in 6"> L </view>
          </view>
        </view>
        <view class="size-two">
          <view class="size-two-left"> 数量 </view>
          <view class="size-two-right">
            <u-number-box v-model="value" @change="valChange"></u-number-box>
          </view>
        </view>
        <view class="size-three"> 确定 </view>
      </view>
    </u-popup>
    <!-- 房券弹窗 -->
    <u-popup v-model="couponShow" height="800" mode="bottom" closeable="true">
      <view class="coupon">
        <view class="coupon-title"> 优惠 </view>
        <view class="coupon-list" v-for="item in 3">
          <view class="coupon-list-left"> ￥<text>30</text> </view>
          <view class="coupon-list-center">
            <view class="coupon-list-center-top"> 无门槛抵扣券 </view>
            <view class="coupon-list-center-bottom"> 2021.03.20-2021.03.26 </view>
          </view>
          <view class="coupon-list-right">
            <image src="../../../static/images/house.png" mode=""></image>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        vrShow: true, //VR按钮显示
        num: 0,
        nums: 0,
        btnShow: false, //电话隐藏
        phoneShow: false, //电话隐藏
        detailsShow: false, //详情隐藏
        shareShow: false, //分享隐藏
        editShow: false, //配送弹窗
        sizeShow: false, //尺寸弹窗
        couponShow: false, //房券弹窗
      }
    },
    methods: {
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
      productreviews() {
        uni.navigateTo({
          url: '../productreviews/productreviews',
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
        uni.navigateTo({
          url: '../yuyue/yuyue',
        })
      },
      // 跳转确认订单页面
      gocondirmorder() {
        uni.navigateTo({
          url: '../confirmorder/confirmorder',
        })
      },
    },
  }
</script>

<style scoped lang="scss">
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

    .vr-vr {
      position: absolute;
      top: 476rpx;
      left: 635rpx;
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

  .content {
    padding: 0 32rpx;
    margin-top: 20rpx;
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
          color: #ff4d00;
        }
        .address-time-right {
          color: #999;
        }
      }
    }
    .card {
      padding: 0 20rpx;
      background-color: #fff;
      margin-top: 20rpx;
      border-radius: 10rpx;
      .card-one {
        display: flex;
        justify-content: space-between;
        padding: 22rpx 0;
        border-bottom: 1rpx solid #f5f5f5;
        .card-one-left {
          font-size: 28rpx;
          color: #666;
        }
        .card-one-center {
          width: 454rpx;
          font-size: 26rpx;
          color: #333;
          display: flex;
          align-items: center;
          .card-one-center-left {
            width: 52rpx;
            height: 32rpx;
            background: rgba(255, 77, 0, 0.1);
            text-align: center;
            font-size: 20rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ff4d00;
            line-height: 32rpx;
            margin-right: 5rpx;
          }
        }
        .card-one-right {
        }
      }
      .card-two {
        display: flex;
        padding: 22rpx 0;
        .card-two-left {
          font-size: 28rpx;
          color: #666;
        }
        .card-two-right {
          width: 454rpx;
          font-size: 26rpx;
          color: #333;
          margin-left: 80rpx;
        }
      }
    }

    .evaluate {
      padding: 20rpx;
      background-color: #fff;
      .evaluate-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .evaluate-title-left {
          font-size: 32rpx;
          color: #333;
          font-weight: 700;
        }
        .evaluate-title-right {
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: 22rpx;
          color: #666;
        }
      }
      .content-list {
        margin-bottom: 40rpx;
        margin-top: 20rpx;
        .content-list-one {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .content-list-left {
            display: flex;
            .content-list-left-img {
              width: 68rpx;
              height: 68rpx;
              margin-right: 10rpx;
              image {
                width: 68rpx;
                height: 68rpx;
                border-radius: 34rpx;
              }
            }
            .content-list-left-name {
              .content-list-name {
                font-size: 28rpx;
                color: #333;
              }
              .content-list-name-img {
                width: 28rpx;
                height: 28rpx;
                display: flex;
                image {
                  width: 28rpx;
                  height: 28rpx;
                }
              }
            }
          }
          .content-list-right {
            font-size: 22rpx;
            color: #999;
          }
        }
        .content-list-four {
          display: flex;
          align-items: center;
          font-size: 22rpx;
          color: #999;
          margin: 14rpx 0 10rpx;
          .content-list-four-left {
          }
          .content-list-four-center {
            width: 2rpx;
            height: 16rpx;
            background: #e6e6e6;
            border-radius: 1rpx;
            margin: 0 10rpx;
          }
          .content-list-four-right {
          }
        }
        .content-list-two {
          font-size: 26rpx;
          color: #333;
          line-height: 2em;
          margin: 10rpx 0;
        }
        .content-list-three {
          display: flex;
          .content-list-three-one {
            width: 202rpx;
            height: 202rpx;
            margin-right: 20rpx;
            image {
              width: 202rpx;
              height: 202rpx;
            }
          }
        }
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

      .content-recommend-two {
        display: flex;
        width: 686rpx;
        flex-wrap: wrap;
        justify-content: space-between;
        .content-recommend-two-first {
          width: 332rpx;
          // height: 458rpx;
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
            font-size: 24rpx;
            color: #ff2d19;
            padding: 0 20rpx;
            text {
              font-size: 32rpx;
              font-weight: 700;
            }
          }
          .content-recommend-two-four {
            padding: 0 20rpx 20rpx;
            font-size: 22rpx;
            color: #999;
          }
        }
      }
    }
  }
  .footer {
    height: 100rpx;
    width: 750rpx;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 32rpx;
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
      width: 220rpx;
      height: 80rpx;
      border-radius: 39rpx;
      border: 2rpx solid #ff4d00;
      font-size: 28rpx;
      color: #ff4d00;
      text-align: center;
      line-height: 80rpx;
    }
    .footer-three {
      width: 220rpx;
      height: 80rpx;
      background: #ff4d00;
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
  // 配送弹窗

  .box {
    border-radius: 10rpx 10rpx 0 0;
    padding: 0 32rpx;
    .box-title {
      margin: 20rpx 0 40rpx;
      font-size: 32rpx;
      color: #333;
      text-align: center;
      font-weight: 700;
    }
    .box-content {
      display: flex;
      align-items: center;
      .box-right {
        color: #333;
        margin-bottom: 20rpx;
        .box-right-one {
          font-size: 28rpx;
          font-weight: 700;
          margin-bottom: 5rpx;
        }
        .box-right-two {
          font-size: 24rpx;
        }
      }
    }
  }
  //尺寸弹窗
  .size {
    padding: 20rpx 32rpx;
    .size-title {
      display: flex;
      .size-title-left {
        width: 120rpx;
        height: 120rpx;
        margin-right: 20rpx;
        image {
          width: 120rpx;
          height: 120rpx;
        }
      }
      .size-title-right {
        font-size: 24rpx;
        color: #ff2d19;
        margin-top: 70rpx;
        text {
          font-size: 40rpx;
          font-weight: 700;
        }
      }
    }

    .size-one {
      .size-one-title {
        font-size: 28rpx;
        color: #333;
        margin-top: 40rpx;
        font-weight: 700;
      }
      .size-one-list {
        display: flex;
        flex-wrap: wrap;
        .size-one-list-one {
          width: 144rpx;
          height: 60rpx;
          line-height: 60rpx;
          text-align: center;
          border-radius: 30rpx;
          background: #f5f5f5;
          margin: 20rpx 0;
          margin-right: 20rpx;
        }
      }
    }
    .size-two {
      display: flex;
      justify-content: space-between;
      margin-top: 20rpx;
      .size-two-left {
        font-size: 28rpx;
        color: #333;
        font-weight: 700;
      }
    }
    .size-three {
      width: 686rpx;
      height: 80rpx;
      background: #ff4d00;
      border-radius: 39rpx;
      color: #fff;
      line-height: 80rpx;
      text-align: center;
      margin-top: 400rpx;
    }
  }
  //房券弹窗
  .coupon {
    border-radius: 10rpx 10rpx 0 0;
    padding: 0 32rpx;
    background-color: #f5f5f5;
    .coupon-title {
      margin: 20rpx 0 40rpx;
      font-size: 32rpx;
      color: #333;
      text-align: center;
      font-weight: 700;
    }
    .coupon-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      margin-bottom: 20rpx;
      .coupon-list-left {
        font-size: 48rpx;
        font-weight: 700;
        color: #ff2d19;
        margin-left: 30rpx;
        text {
          font-size: 60rpx;
        }
      }
      .coupon-list-center {
        font-size: 28rpx;
        .coupon-list-center-top {
          color: #333;
        }
        .coupon-list-center-bottom {
          color: #999;
        }
      }
      .coupon-list-right {
        width: 164rpx;
        height: 164rpx;
        image {
          width: 164rpx;
          height: 164rpx;
        }
      }
    }
  }
</style>
