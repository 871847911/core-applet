<!--空布局:
遵循easycom规范, 可作为独立的组件, 不使用mescroll的页面也能使用:
<mescroll-empty v-if="isShowEmpty" :option="optEmpty" @emptyclick="emptyClick"></mescroll-empty>
-->
<template>
  <!-- top: option.top -->
  <view
    class="mescroll-empty"
    :class="{ 'empty-fixed': fixed }"
    :style="{ 'z-index': option.zIndex, top: top - Number(scrollTop) + 'rpx' }"
  >
    <view> <image v-if="icon" class="empty-icon" :src="icon" mode="widthFix" /> </view>
    <view v-if="tip" class="empty-tip">{{ tip }}</view>
    <view v-if="btnText" class="empty-btn z-fixed-c" @click="emptyClick">{{ btnText }}</view>
  </view>
</template>

<script>
  // 引入全局配置
  import GlobalOption from '../mescroll-uni/mescroll-uni-option.js'
  // 引入国际化工具类
  import mescrollI18n from '../mescroll-uni/mescroll-i18n.js'
  export default {
    props: {
      // empty的配置项: 默认为GlobalOption.up.empty
      option: {
        type: Object,
        default() {
          return {}
        },
      },
      fixed: {
        type: Boolean,
        default: true,
      },
      top: {
        type: Number,
        default: 400,
      },
      scrollTop: {
        type: [String, Number],
      },
    },
    data() {
      return {
        height: '',
      }
    },
    // 使用computed获取配置,用于支持option的动态配置
    computed: {
      // 图标
      icon() {
        if (this.option.icon != null) {
          // 此处不使用短路求值, 用于支持传空串不显示图标
          return this.option.icon
        } else {
          let i18nType = mescrollI18n.getType() // 国际化配置
          if (this.option.i18n) {
            return this.option.i18n[i18nType].icon
          } else {
            return GlobalOption.i18n[i18nType].up.empty.icon || GlobalOption.up.empty.icon
          }
        }
      },
      // 文本提示
      tip() {
        if (this.option.tip != null) {
          // 支持传空串不显示文本提示
          return this.option.tip
        } else {
          let i18nType = mescrollI18n.getType() // 国际化配置
          if (this.option.i18n) {
            return this.option.i18n[i18nType].tip
          } else {
            return GlobalOption.i18n[i18nType].up.empty.tip || GlobalOption.up.empty.tip
          }
        }
      },
      // 按钮文本
      btnText() {
        if (this.option.i18n) {
          let i18nType = mescrollI18n.getType() // 国际化配置
          return this.option.i18n[i18nType].btnText
        } else {
          return this.option.btnText
        }
      },
    },
    mounted() {
      this.height = wx.getSystemInfoSync().windowHeight + 'px'
    },
    methods: {
      // 点击按钮
      emptyClick() {
        this.$emit('emptyclick')
      },
    },
  }
</script>

<style>
  /* 无任何数据的空布局 */
  .mescroll-empty {
    box-sizing: border-box;
    width: 100%;
    /* padding: 100rpx 50rpx; */
    text-align: center;
  }

  .mescroll-empty.empty-fixed {
    z-index: 99;
    position: absolute; /*transform会使fixed失效,最终会降级为absolute */
    top: 400rpx;
    left: 0;
  }

  .mescroll-empty .empty-icon {
    width: 256rpx;
    height: 256rpx;
  }

  .mescroll-empty .empty-tip {
    max-width: 80%;
    text-align: center;
    margin: 0 auto;
    padding-top: 8rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #9e9e9e;
  }

  .mescroll-empty .empty-btn {
    width: 196rpx;
    height: 88rpx;
    line-height: 88rpx;
    background: #00bbcc;
    border-radius: 16rpx;
    display: inline-block;
    margin-top: 56rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }

  .mescroll-empty .empty-btn:active {
    opacity: 0.75;
  }
</style>
