<template>
	<view class="warp">
		<view class="search" >
			<u-search placeholder="搜索你想要去的民宿" shape="square" :show-action='fasle' v-model="keyword" ></u-search>
		</view>
		<view class="content">
			<view class="content-one" v-for="item in 4">
				<image src="../../../static/images/位图.png" mode=""></image>
				<view class="content-title">
					<view class="content-title-one">
						杭州未迟精品民宿
					</view>
					<view class="content-title-two">
						2天1晚住宿+早餐+下午茶+年货伴手礼+限定款红包+夜宵
					</view>
					<view class="content-title-three">
						￥<text>1688</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	.search{
		padding:0 32rpx ;
		background-color: #fff;
		height: 88rpx;
		line-height: 88rpx;
	}
	.content{
		padding: 20rpx 32rpx;
		.content-one{
			width: 686rpx;
			height: 590rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			image{
				width: 686rpx;
				height: 400rpx;
			}
			.content-title{
				padding: 20rpx 20rpx 0rpx 20rpx;
				height: 190rpx;
				.content-title-one{
					font-size: 34rpx;
					color: #333;
					font-weight: 700;
				}
				.content-title-two{
					font-size: 22rpx;
					color: #999;
					margin: 10rpx 0;
				}
				.content-title-three{
					font-size: 24rpx;
					color: #FF2D19;
					text{
						font-size: 34rpx;
						font-weight: 700;
					}
				}
			}
		}
	}
</style>
