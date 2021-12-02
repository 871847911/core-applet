<template>
	<view class="warp">
		<view class="card">
			<view class="card-one">
				已开票
			</view>
			<view class="card-two">
				商家已为您开好发票，如有问题请咨询商家
			</view>
		</view>
		<view class="content">
			<view class="box">
				<view class="box-title">
					电子普通发票
				</view>
				<view class="box-one">
					<view class="box-one-left">
						发票抬头
					</view>
					<view class="box-one-right">
						对啥叫
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						税票
					</view>
					<view class="box-one-right">
						对啥叫
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						发票金额
					</view>
					<view class="box-one-right">
						269.00元
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						发票内容
					</view>
					<view class="box-one-right">
						对啥叫
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						申请时间
					</view>
					<view class="box-one-right">
						2021.0305
					</view>
				</view>
			</view>
			
			<view class="footer">
				预览发票
			</view>
			<view class="footer" style="background-color: #FF4D00;color: #fff;">
				修改申请
			</view>
			<view class="footer">
				撤销申请
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
		position: relative;
	}
	.card{
		width: 750rpx;
		height: 320rpx;
		background: linear-gradient(135deg, #FF8000 0%, #FF4D00 100%);
		padding: 40rpx 32rpx 0;
		.card-one{
			font-size: 32rpx;
			font-weight: 700;
			color: #fff;
			font-family: PingFangSC-Medium, PingFang SC;
		}
		.card-two{
			font-size: 22rpx;
			color: #fff;
			margin-top: 10rpx;
			font-family: PingFangSC-Regular, PingFang SC;
		}
	}
	.content{
		padding:0 32rpx;
		position: absolute;
		top: 166rpx;
		.box{
			width: 686rpx;
			padding: 20rpx 34rpx;
			background-color: #fff;
			border-radius: 10rpx;
			.box-title{
				color: #E63E2E;
				font-size: 26;
				text-align: center;
				margin-bottom: 20rpx;
			}
			.box-one{
				display: flex;
				align-items: center;
				padding: 20rpx ;
				border-top: 1rpx solid #f5f5f5;
				.box-one-left{
					font-size: 28rpx;
					margin-right: 40rpx;
					color: #333;
					width: 120rpx;
				}
				.box-one-right{
					font-size: 26rpx;
					color: #666;
				}
			}
		}
	
		.footer{
			width: 686rpx;
			height: 80rpx;
			margin-top: 80rpx;
			color: #FF4D00;
			line-height: 80rpx;
			text-align: center;
			background-color: #fff;
			border-radius: 40rpx;
		}
	}
</style>
