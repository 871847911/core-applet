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
          2晚特惠 遇染民宿酒店，2晚连住低至7折，送正餐下午茶、欢迎水果、绿色农家菜园采摘。
        </view>
        <view class="address-title-one"> 2天1晚住宿+早餐+下午茶+年货伴手礼+限定款红包+夜宵 </view>

        <view class="address-time">
          <view class="address-time-left"> 在线预约不可退 </view>
          <view class="address-time-right"> 可入住至2021-06-30 </view>
        </view>
      </view>

      <!-- 可订日期 -->
      <view class="date">
        <view class="date-title" v-for="item in 3">
          <view class="date-one"> 3-17 </view>
          <view class="date-two"> 周三 </view>
          <view class="date-three"> ¥ 1099起 </view>
        </view>
        <view class="date-title-one">
          <view class="date-title-one-top"> 查看更多 可订日期 </view>
        </view>
      </view>

      <view class="address-map">
        <view class="address-map-three">
          <view class="map-three-one"> 5.0评分 </view>
          <view class="" style="font-weight: 700; color: #00bbcc"> “设施齐全 附近地铁” </view>
          <view class="map-three-two" @click="gocomment"> 241条评论 > </view>
        </view>
        <view class="address-map-one">
          <text>西湖湖滨商圈</text>
          <text>平海路38号</text>
        </view>
        <view class="address-map-two">
          <view class="map-one">
            <image src="../../../static/images/距离@2x.png" mode=""></image>
          </view>
          <view class="map-two"> 距离杭州体育馆3.4公里，驾车至此4.9公里，约17分钟 </view>
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
          <view class="shop-title-top"> 笑意民宿 </view>
          <view class="shop-title-bottom"> 中国传统文化传承民宿 </view>
        </view>
        <view class="shop-btn"> 进入店铺 </view>
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
      <!-- 设施与服务 -->
      <view class="facilities">
        <view class="facilities-title"> 设施与服务 </view>
        <view class="facilities-list">
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x.png" mode=""></image>
            </view>
            <view class="list-one-title"> 免费停车 </view>
          </view>
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
            </view>
            <view class="list-one-title1"> 地暖 </view>
          </view>
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x.png" mode=""></image>
            </view>
            <view class="list-one-title"> 洗衣机 </view>
          </view>
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
            </view>
            <view class="list-one-title1"> 餐饮服务 </view>
          </view>
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x.png" mode=""></image>
            </view>
            <view class="list-one-title"> 免费停车 </view>
          </view>
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
            </view>
            <view class="list-one-title1"> 空调 </view>
          </view>
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x.png" mode=""></image>
            </view>
            <view class="list-one-title"> 代驾服务 </view>
          </view>
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
            </view>
            <view class="list-one-title1"> 免费WIFI </view>
          </view>
          <view class="list-one">
            <view class="list-one-img">
              <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
            </view>
            <view class="list-one-title1"> 浴缸 </view>
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
    <!-- 详情弹窗 -->
    <u-popup v-model="detailsShow" mode="bottom" height="1000" :closeable="true">
      <view class="detailsShow">
        <view class="detailsShow-title"> 房型详情 </view>
        <view class="details-vr">
          <view class="details-vr-img">
            <image src="../../../static/images/位图.png" mode="widthFix"></image>
          </view>
          <view class="details-vr-btn"> 1/8 </view>
        </view>
        <view class="content">
          <!-- 地址 -->
          <view class="address">
            <view class="" style="display: flex; justify-content: space-between">
              <view class="">
                <view class="address-title"> 遇染民宿酒店（杭州湖滨店） </view>
                <view class="address-label">
                  <image src="../../../static/images/标签@2x(2).png" mode=""></image>
                  <image src="../../../static/images/标签@2x(1).png" mode=""></image>
                  <image src="../../../static/images/标签@2x.png" mode=""></image>
                </view>
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
            <view class="address-map">
              <view class="address-map-one">
                <text>西湖湖滨商圈</text>
                <text>平海路38号</text>
              </view>
              <view class="address-map-two">
                <view class="map-one">
                  <image src="../../../static/images/距离@2x.png" mode=""></image>
                </view>
                <view class="map-two"> 距离杭州体育馆3.4公里，驾车至此4.9公里，约17分钟 </view>
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
                  <view class="" style="margin: 0 52rpx; background-color: #f5f5f5; height: 2rpx">
                  </view>
                  <view
                    class=""
                    style="font-size: 28rpx; color: #333; text-align: center; margin: 40rpx auto"
                    @click="phone"
                  >
                    呼叫
                  </view>
                </u-popup>
              </view>
              <view class="address-map-three">
                <view class="map-three-one"> 5.0评分 </view>
                <view class="map-three-two" @click="gocomment"> 241条评论 > </view>
              </view>
            </view>
          </view>
          <!-- 设施与服务 -->
          <view class="facilities">
            <view class="facilities-title"> 设施与服务 </view>
            <view class="facilities-list">
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x.png" mode=""></image>
                </view>
                <view class="list-one-title"> 免费停车 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
                </view>
                <view class="list-one-title1"> 地暖 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x.png" mode=""></image>
                </view>
                <view class="list-one-title"> 洗衣机 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
                </view>
                <view class="list-one-title1"> 餐饮服务 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x.png" mode=""></image>
                </view>
                <view class="list-one-title"> 免费停车 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
                </view>
                <view class="list-one-title1"> 空调 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x.png" mode=""></image>
                </view>
                <view class="list-one-title"> 代驾服务 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
                </view>
                <view class="list-one-title1"> 免费WIFI </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
                </view>
                <view class="list-one-title1"> 浴缸 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
                </view>
                <view class="list-one-title1"> WIFI </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
                </view>
                <view class="list-one-title1"> 空调 </view>
              </view>
              <view class="list-one">
                <view class="list-one-img">
                  <image src="../../../static/images/编组%205@2x(1).png" mode=""></image>
                </view>
                <view class="list-one-title1"> 衣柜 </view>
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
          <!-- 房型报价 -->
          <view class="details-btn"> 查看房型报价 </view>
        </view>
      </view>
    </u-popup>

    <view class="footer">
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
        <view class="footer-one-title"> 收藏 </view>
      </view>
      <view class="footer-two"> 立即抢购 </view>
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
        uni.navigateTo({
          url: '../yuyue/yuyue',
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

    .date {
      width: 686rpx;
      height: 192rpx;
      margin-top: 20rpx;
      background-color: #fff;
      padding: 20rpx;
      border-radius: 10rpx;
      display: flex;
      justify-content: space-between;
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
      width: 550rpx;
      height: 80rpx;
      background: linear-gradient(270deg, #ff8833 0%, #ff6619 100%);
      border-radius: 39rpx;
      color: #fff;
      font-size: 28rpx;
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
