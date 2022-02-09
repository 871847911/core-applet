<template>
  <view class="warp">
    <view class="content">
      <view class="title">追加保证金</view>
      <view class="flex-box">
        <view
          @click="activeKey = index"
          :class="{
            active: activeKey === index,
          }"
          class="priceBox"
          v-for="(c, index) in 6"
          :key="index"
        >
          {{ (index + 1) * 1000 }}
        </view>
      </view>
      <view class="title">增加后的额外权益</view>
      <view class="shouyi">
        <view class="left">金米粒</view>
        <view class="right">+{{ (activeKey + 1) * 1000 }}</view>
      </view>
      <view class="shouyi">
        <view class="left">平台房费</view>
        <view class="right">+{{ (activeKey + 1) * 1000 }}</view>
      </view>
      <view class="box">
        <view class="box-title">充值截图</view>
        <view class="box-two">
          <u-upload
            :max-size="10 * 1024 * 1024"
            :max-count="1"
            :show-progress="false"
            :action="action"
            :header="header"
            @on-success="onSuccess"
            @on-remove="onRemove"
          ></u-upload>
        </view>
      </view>
      <view class="title">缴费记录</view>
      <view class="list-order" v-for="item in datalist" :key="item.id">
        <view class="list-order-left">
          <view class="list-order-one">+{{ item.amount }}</view>
          <view class="list-order-two">时间：{{ item.createTime }}</view>
          <view v-if="item.status == 3" class="list-order-two">原因：{{ item.createTime }}</view>
        </view>
        <view class="list-order-right" @click="goedit" v-if="item.status == 2">
          <view class="tuikuan">申请退款</view>
        </view>
        <view class="list-order-right" v-if="item.status == 1">
          <view class="tuikuan">审核中</view>
        </view>
        <view class="list-order-right red" @click="goedit" v-if="item.status == 3">
          <view class="tuikuan">被拒绝</view>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="footer-one" @click="gonewaddress()"> 确定 </view>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import config from '@/common/config.js'
  const { BASE_API } = config
  export default {
    data() {
      return {
        activeKey: 0,
        action: `${BASE_API}/sysFileInfo/upload`,
        fileList: [],
        datalist: [],
        header: {
          Authorization: 'Bearer ' + uni.getStorageSync('TOKEN'),
        },
      }
    },
    computed: {
      ...mapState({
        USERINFO: (state) => state.USERINFO, //用户信息
      }),
    },
    onLoad() {
      let params = {
        pageNo: 1,
        pageSize: 10,
        account: '',
        rechargeUser: this.USERINFO.id,
      }
      this.$api.home.rechargePage(params).then((res = {}) => {
        this.datalist = res.rows || []
      })
    },
    methods: {
      gonewaddress() {
        if (this.fileList.length <= 0)
          return uni.showToast({ title: '请上传充值截图', icon: 'none' })
        // uni.navigateTo({
        //   url: '../newaddress/newaddress',
        // })
        const params = {
          account: this.USERINFO.account,
          amount: (this.activeKey + 1) * 1000,
          rechargeImg: this.fileList[0],
          status: 1,
        }
        this.$api.home.rechargeAdd(params).then((res) => {
          uni.showToast({ title: '已提交充值申请' })
        })
      },
      //上传成功
      onSuccess(data, index, lists) {
        //页面上定义的临时存放图片的对象，提示也保存后台返回的图片名称
        let currentFile = ''
        currentFile = data.data[0]
        //成功上传一个图片就往fileList里面添加一个图片对象
        this.fileList.push(currentFile)
      },
      //删除一张图片的回调，lists这是成功删除一个图片后，还剩余的图片集合
      onRemove(dataIndex, lists) {
        //lists.length > 0说明删除之前已经上传了多余两张的图片
        if (lists.length > 0) {
          var currentfileList = []
          //遍历this.fileList 与剩余的lists进行匹配，来组成一个新的格式合适的剩余图片集合
          this.fileList.forEach((item, index) => {
            lists.forEach((item1, index1) => {
              if (item === item1.response.data[0]) {
                currentfileList.push(item)
              }
            })
          })
          //删除后对图片集合及时冬天更新，即对this.fileList重新赋值
          this.fileList = currentfileList
        } else {
          //说明删除之前只有一张图片，删除成功后把this.fileList清空即可
          this.fileList = []
        }
      },
      // 编辑地址
      goedit() {
        uni.navigateTo({
          url: '../tuikuan/tuikuan',
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    padding: 32rpx;
    height: 100vh;
    overflow: scroll;
    background-color: #f5f5f5;
  }
  .content {
    padding-bottom: 140rpx;
  }
  .box {
    clear: both;
    background-color: #fff;
    padding: 20rpx;
    border-radius: 10rpx;
    margin-bottom: 20rpx;
    .box-title {
      font-size: 34rpx;
      color: #333;
      padding-bottom: 20rpx;
    }
    .box-one {
      padding: 20rpx 0;
      border-top: 1rpx solid #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .box-one-left {
        font-size: 28rpx;
        color: #666;
      }
      .box-one-right {
      }
    }
    .box-two {
      textarea {
        background-color: #f5f5f5;
      }
      input {
        background-color: #f5f5f5;
        height: 80rpx;
        text-indent: 1em;
      }
    }
    .box-three {
      font-size: 22rpx;
      margin-top: 20rpx;
      color: #999;
    }
  }
  .title {
    clear: both;
    font-size: 34rpx;
    color: #333333;
    padding: 20rpx 0;
  }
  .shouyi {
    padding: 10rpx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex-box {
    clear: both;
    .priceBox {
      width: 30%;
      padding: 50rpx 0;
      float: left;
      text-align: center;
      line-height: 32rpx;
      margin-right: 3%;
      background: #fafafa;
      font-size: 34rpx;
      margin-bottom: 20rpx;
    }
    .active {
      background: rgba(0, 187, 204, 0.1);
      font-weight: 500;
      color: #00bbcc;
    }
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 70rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    left: 0;
    bottom: 0;
    padding: 20rpx 0 70rpx 0;
    .footer-one {
      height: 80rpx;
      width: 686rpx;
      line-height: 80rpx;
      text-align: center;
      color: #fff;
      margin: 0 auto;
      background: linear-gradient(270deg, #3dcccc 0%, #00bbcc 100%);
      border-radius: 40rpx;
    }
  }
  .list-order {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0;
    align-items: center;
    border-top: 1rpx solid #f5f5f5;
    .list-order-left {
      .list-order-one {
        outline-offset: 30rpx;
        color: #333;
        font-weight: 700;
        font-family: PingFangSC-Regular, PingFang SC;
        margin-bottom: 10rpx;
      }
      .list-order-two {
        font-size: 24rpx;
        color: #999;
      }
    }
    .list-order-right {
      outline-offset: 28rpx;
      color: #333;
      font-weight: 700;
      .tuikuan {
        width: 152rpx;
        height: 60rpx;
        background: #14cc70;
        border-radius: 6px;
        text-align: center;
        line-height: 60rpx;
        color: #fff;
      }
    }
    .red {
      .tuikuan {
        background: red;
      }
    }
  }
</style>
