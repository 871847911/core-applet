<template>
	<view class="warp">
		<view class="content">
			<view class="img">
				<image src="../../../static/images/首页.png" mode=""></image>
			</view>
			<view class="one">
				全景网民宿服务
			</view>
			<view class="two">
				V0.13.14
			</view>
			<view class="three">
				全景网民宿服务是某某某全景网民宿服务是某某某全景网民宿服务是某某某全景网民宿服务是某某某全景网民宿服务是某某某。
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
		height: 100vh;
	}
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		.img{
			margin: 80rpx 0 20rpx;
			image{
				width: 120rpx;
				height: 120rpx;
			}
		}
		.one{
			font-size: 28rpx;
			color: #333;
		}
		.two{
			font-size: 24rpx;
			color: #999;
			margin: 10rpx 0 34rpx;
		}
		.three{
			font-size: 26rpx;
			color: #999;
			width: 550rpx;
			line-height: 1.5em;
		}
	}
</style>
