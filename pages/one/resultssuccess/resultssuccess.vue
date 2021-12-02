<template>
	<view class="warp">
		<view class="results">
			<view class="results-left">
				<image src="../../../static/images/酒店位置.png" mode=""></image>
			</view>
			<view class="results-right">
				支付成功
			</view>
		</view>
		
		<view class="content">
			<view class="content-title">
				<view class="content-title-left">
					收款方
				</view>
				<view class="content-title-right">
					民宿酒店
				</view>
			</view>
			<view class="content-title">
				<view class="content-title-left">
					支付方式
				</view>
				<view class="content-title-right">
					微信余额
				</view>
			</view>
			<view class="content-title">
				<view class="content-title-left">
					支付时间
				</view>
				<view class="content-title-right">
					2021-03-16 08:24:41
				</view>
			</view>
			<view class="content-title">
				<view class="content-title-left">
					订单编号
				</view>
				<view class="content-title-right">
					10023848377423848293
				</view>
			</view>
		</view>
	
		<view class="footer">
			<view class="footer-left">
				返回首页
			</view>
			<view class="footer-right">
				查看订单
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
		padding: 80rpx 32rpx;
		background-color: #f5f5f5;
		height: 100vh;
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
			font-weight: 700;
		}
	}
	.content{
		padding:0 20rpx;
		background-color: #fff;
		margin: 80rpx 0;
		border-radius: 10rpx;
		.content-title{
			font-size: 28rpx;
			display: flex;
			padding: 20rpx;
			align-items: center;
			border-top: 1rpx solid #f5f5f5;
			.content-title-left{
				width: 164rpx;
				color: #666;
			}
			.content-title-right{
				color: #333;
			}
		}
	}

	.footer{
		display: flex;
		justify-content: space-between;
		.footer-left{
			width: 332rpx;
			height: 80rpx;
			border-radius: 39rpx;
			border: 2rpx solid #CCCCCC;
			line-height: 80rpx;
			text-align: center;
			color: #333;
		}
		.footer-right{
			width: 332rpx;
			height: 80rpx;
			border-radius: 39rpx;
			line-height: 80rpx;
			text-align: center;
			color: #fff;
			background: #FF4D00;
		}
	}

</style>
