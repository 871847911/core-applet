<template>
  <view class="warp">
    <view class="name">
      <input type="text" v-model="myValue" maxlength="10" />
    </view>
    <button @click="setName" type="default">确认</button>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        myValue: '',
      }
    },
    onLoad() {
      this.myValue = this.USERINFO.name
    },
    computed: {
      ...mapState({
        USERINFO: (state) => state.USERINFO, //用户信息
      }),
    },
    methods: {
      setName() {
        const data = {
          ...this.USERINFO,
          name: this.myValue,
        }
        uni.setStorageSync('USERINFO', data)
        this.$u.vuex('USERINFO', data)
        uni.showToast({ title: '修改成功' })
        setTimeout(() => {
          uni.navigateBack()
        }, 2000)
      },
    },
  }
</script>

<style scoped lang="scss">
  .warp {
    background-color: #f5f5f5;
    height: 100vh;
    padding-top: 20rpx;
  }
  .name {
    background-color: #fff;
    width: 686rpx;
    height: 80rpx;
    margin: 0rpx auto 40rpx;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    input {
      // background-color: red;
    }
    .right {
      font-size: 22rpx;
      color: #999;
    }
  }
  button {
    width: 686rpx;
    height: 80rpx;
    background: linear-gradient(270deg, #3dcccc 0%, #00bbcc 100%);
    border-radius: 39px;
    color: #fff;
    font-size: 28rpx;
    border: none;
  }
</style>
