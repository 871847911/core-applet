<template>
	<view class="warp">
		<view class="content">
			<view class="title">
				<view class="title-one">
					您已成功发起退款退货申请，请耐心等待商家处理
				</view>
				<view class="title-two">
					商家同意后，请按照给出的退货地址退货，并记录退货订单编号；如商家拒绝，您可以修改申请后再次发起，商家会重新处理。
				</view>
			</view>
			
			<view class="progress">
				<u-steps :list="numList" :current="1" active-color="#fa3534"></u-steps>
			</view>
			<view class="box1-one">
				<view class="box-one-left">
					申请原因
				</view>
				<view class="box-one-right">
					<input type="text" value="" placeholder="请填写您寄回商品的快递编号" style="color: #e6e6e6;"/>
				</view>
			</view>
			
			<view class="box">
				<view class="box-title">
					申请售后服务商品
				</view>
				<view class="card" @tap="goshoppayment()">
					<view class="card-img">
						<image src="../../../static/images/house.png" mode=""></image>
					</view>
					<view class="card-right">
						<view class="card-right-one">
							春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
						</view>
						<view class="card-right-two">
							<view class="card-right-two-left">
								白色XL
							</view>
							<view class="card-right-two-right">
								*1
							</view>
						</view>
						
					</view>
				</view>
				
				<view class="box-one">
					<view class="box-one-left">
						申请原因
					</view>
					<view class="box-one-right">
						多拍/错拍/不想要
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						退款金额
					</view>
					<view class="box-one-right">
						￥88.00
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						申请时间
					</view>
					<view class="box-one-right">
						2021-03-30  20:30:10
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						退款编号
					</view>
					<view class="box-one-right">
						1273438473294273
					</view>
				</view>
			</view>
		</view>
		
		<view class="footer-a">
			<view class="footer-one" @click="goprogress()">
				提交
			</view>
		</view>
		<view class="footer">
			<view class="footer-one">
				联系客服
			</view>
			<view class="footer-one">
				取消申请
			</view>
			<view class="footer-two">
				修改申请
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numList: [{
							name: '提交申请'
						}, {
							name: '商家处理'
						}, {
							name: '寄回商品'
						}, {
							name: '商品发货'
						}, ],
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
		padding: 20rpx 32rpx;
		.title{
			padding: 20rpx;
			background-color: #fff;
			.title-one{
				font-size: 28rpx;
				color: #333;
				font-weight: 700;
			}
			.title-two{
				font-size: 22rpx;
				margin-top: 10rpx;
				
				font-family: PingFangSC-Regular, PingFang SC;
				color: #999;
			}
		}
		
		.progress{
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			margin: 20rpx 0;
		}
		
		.box1-one{
			display: flex;
			align-items: center;
			padding: 20rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			.box-one-left{
				font-size: 28rpx;
				color: #666;
				margin-right: 68rpx;
			}
			.box-one-right{
				
			}
		}
		.box{
			padding: 20rpx;
			background-color: #fff;
			.box-title{
				font-size: 28rpx;
				color: #333;
				font-weight: 700;
			}
			
			.card{
				display: flex;
				align-items: center;
				background-color: #fff;
				border-radius: 10rpx;
				margin-top: 20rpx;
				// margin-bottom: 20rpx;
				.card-radio{
					
				}
				.card-img{
					width: 180rpx;
					height: 180rpx;
					margin-right: 20rpx;
					image{
						width: 180rpx;
						height: 180rpx;
					}
				}
				.card-right{
					display: flex;
					flex-direction: column;
					height: 180rpx;
					
					.card-right-one{
						font-size: 28rpx;
						color: #333;
						font-family: PingFangSC-Regular, PingFang SC;
						margin-bottom: 5rpx;
					}
					.card-right-two{
						font-size: 24rpx;
						color: #999;
						display: flex;
						justify-content: space-between;
						.card-right-two-left{
							
						}
						.card-right-two-right{
							
						}
					}
						
					
				}
			}
		
			.box-one{
				display: flex;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1rpx solid #f5f5f5;
				.box-one-left{
					font-size: 28rpx;
					color: #666;
					margin-right: 68rpx;
				}
				.box-one-right{
					font-size: 26rpx;
					color: #333;
				}
			}
		
		}
		
	}
	.footer-a{
		height: 100rpx;
		width: 750rpx;
		background-color: #fff;
		position: fixed;
		bottom: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.footer-one{
			height: 80rpx;
			line-height: 80rpx;
			width: 686rpx;
			text-align: center;
			background: linear-gradient(270deg, #3DCCCC 0%, #00BBCC 100%);
			border-radius: 40rpx;
			color: #fff;
		}
	}
	.footer{
		width: 750rpx;
		height: 100rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 32rpx;
		.footer-one{
			width: 184rpx;
			height: 68rpx;
			border-radius: 39rpx;
			border: 2rpx solid #999999;
			line-height: 68rpx;
			text-align: center;
			margin-left: 20rpx;
		}
		.footer-two{
			width: 184rpx;
			height: 68rpx;
			border-radius: 39rpx;
			background: linear-gradient(270deg, #3DCCCC 0%, #00BBCC 100%);
			line-height: 68rpx;
			text-align: center;
			color: #fff;
			margin-left: 20rpx;
		}
	}
</style>
