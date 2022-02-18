<template>
  <view class="warp">
    <view class="content">
      <view class="title">本次退款</view>
      <view class="price">{{ money }}</view>
      <view class="title">收款人账号</view>
      <input v-model="account" type="text" placeholder="请输入收款人账号" />
      <view class="title">收款人姓名</view>
      <input v-model="userName" type="text" placeholder="请输入收款人姓名" />
      <view class="title">备注</view>
      <textarea
        v-model="remark"
        placeholder="请具体描述本次退还保证金原因"
        class="textarea"
      ></textarea>
    </view>
    <view class="footer">
      <view class="footer-one" @click="gonewaddress()"> 确定 </view>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        money: 0,
        remark: '',
        account: '',
        userName: '',
      }
    },
    onLoad(option = {}) {
      this.money = option.money || 0
      this.rechargeRecordId = option.rechargeRecordId
    },
    computed: {
      ...mapState({
        USERINFO: (state) => state.USERINFO, //用户信息
      }),
    },
    methods: {
      gonewaddress() {
        const params = {
          account: this.account,
          rechargeRecordId: this.rechargeRecordId,
          userName: this.userName,
          amount: this.money,
          remark: this.remark,
          status: 1,
        }
        this.$api.home.refundAdd(params).then((res) => {
          uni.showToast({ title: '您的申请已提交成功，请您耐心等待平台的审核。' })
          setTimeout(() => {
            uni.navigateBack()
          }, 1500)
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    padding: 32rpx;
    height: 100vh;
    background-color: #f5f5f5;
  }
  .content {
    padding: 20rpx;
    background: #fff;
    border-radius: 20rpx;
  }
  .title {
    font-size: 28rpx;
    padding: 20rpx 0;
  }
  .price {
    font-size: 60rpx;
  }
  input {
    padding: 20rpx 0;
    border-bottom: 2rpx solid #f5f5f5;
  }
  .textarea {
    height: 400rpx;
    border: 2rpx solid #f5f5f5;
    padding: 20rpx;
  }
  .footer {
    height: 100rpx;
    position: fixed;
    bottom: 70rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer-one {
      height: 80rpx;
      width: 686rpx;
      line-height: 80rpx;
      text-align: center;
      color: #fff;

      background: linear-gradient(270deg, #3dcccc 0%, #00bbcc 100%);
      border-radius: 40rpx;
    }
  }
</style>
