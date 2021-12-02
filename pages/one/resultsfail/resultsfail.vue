<template>
	<view class="warp">
		<view class="results">
			<view class="results-left">
				<image src="../../../static/images/酒店位置.png" mode=""></image>
			</view>
			<view class="results-right">
				待支付
			</view>
		</view>
		<view class="content">
			该交易将在<text>14分50秒后</text>自动关闭，请尽快付款！
		</view>
	
		<view class="footer">
			立即支付
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
		padding: 80rpx 32rpx;
		height: 100vh;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: PingFangSC-Medium, PingFang SC;
	}
	.results{
		display: flex;
		justify-content: center;
		.results-left{
			margin-right: 20rpx;
			image{
				width: 56rpx;
				height: 56rpx;
			}
		}
		.results-right{
			font-size: 40rpx;
			color: #333;
		}
	}
	.content{
		font-size: 24rpx;
		color: #999;
		margin: 20rpx 0 80rpx;
		text{
			color: #FF2D19;
		}
	}

	.footer{
			width: 400rpx;
			height: 80rpx;
			border-radius: 39rpx;
			line-height: 80rpx;
			text-align: center;
			color: #fff;
			background: #FF4D00;
	}

</style>
