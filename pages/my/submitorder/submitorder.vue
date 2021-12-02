<template>
	<u-form :model="form" ref="uForm">
	<view class="warp">
		<view class="content">
			<view class="map">
				<view class="map-left">
					<u-icon name="map" color="#FF4D00" size="40" style="margin-right: 12rpx;"></u-icon> 添加收获地址
				</view>
				<view class="map-right">
					<u-icon name="arrow-right" color="#999" size="30"></u-icon>
				</view>
			</view>
			<view class="card" >	
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
					<view class="card-right-three">
						<view class="card-right-three-left">
							<text>1688积分</text>
						</view>
						
					</view>
				</view>
			</view>
			
			
		</view>
		<view class="footer">
			<view class="footer-left">
				1688积分
			</view>
			
			<view class="footer-right" @tap="goresults()">
				确定兑换
			</view>
		</view>
	</view>
	</u-form>
</template>

<script>
	export default {
		data() {
			return {
				timeShow:false
			}	
		},
		methods: {
			goresults(){
				uni.showModal({
					    title: '您确定要支付吗',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
								uni.navigateTo({//跳转页面
									url:"../resultssuccess/resultssuccess"
								})
					        } else if (res.cancel) {
					            console.log('用户点击取消');
								uni.navigateTo({//跳转页面
									url:"../resultsfail/resultsfail"
								})
					        }
					    }
					});
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
		font-family: PingFangSC-Medium, PingFang SC;
	}
	.content{
		padding: 20rpx 32rpx;
		.map{
			display: flex;
			align-items: center;
			padding: 20rpx 20rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			justify-content: space-between;
			.map-left{
				display: flex;
				align-items: center;
			}
			.map-right{
				
			}
		}
		.card{
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: 20rpx;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
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
				justify-content: space-between;
				height: 180rpx;
				.card-right-one{
					font-size: 28rpx;
					color: #333;
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
					
				.card-right-three{
					display: flex;
					justify-content: space-between;
					.card-right-three-left{
						color: #FF2D19;
						font-size: 24rpx;
						text{
							font-size: 32rpx;
							font-weight: 700;
						}
					}
					.card-right-three-right{
						
					}
				}
			}
		}
		
		
	}
	.footer{
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		position: fixed !important;
		bottom: 0rpx;
		display: flex;
		padding: 0 32rpx;
		justify-content: space-between;
		align-items: center;
		.footer-left{
			color: #FF2D19;
			font-size: 32rpx;
			font-weight: 700;
			
		}
		.footer-one{
			font-size: 22rpx;
			color: #999;
			display: flex;
			margin-right: 250rpx;
			image{
				width: 32rpx;
				height: 32rpx;
			}
		}
		.footer-right{
			width: 216rpx;
			height: 80rpx;
			background: #FF4D00;
			border-radius: 39rpx;
			line-height: 80rpx;
			text-align: center;
			color: #fff;
			font-size: 28rpx;
		}
	}
</style>
