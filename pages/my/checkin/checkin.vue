<template>
	<view class="warp">
		<view class="bgc">
			<view class="bgc-title">
				商家已为您备好房间，期待您的入住～
			</view>
		</view>
		<view class="content">
			<view class="cards">
				<view class="card-title">
					<view class="card-title-left">
						<view class="card-one">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-two">
							快乐的民宿
						</view>
					</view>
					<view class="card-title-right">
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="card-content">
					<view class="card-left">
						<image src="../../../static/images/house.png" mode=""></image>
					</view>
					<view class="card-right">
						<view class="card-right-one">
							遇染民宿酒店（杭州湖滨店）
						</view>
						<view class="card-right-two">
							温馨家庭房
						</view>
						<view class="card-right-three">
							<text>03/18入住</text>
							<text>至</text>
							<text>03/19离店</text>
							<text>1晚</text>
						</view>
						<view class="card-right-four">
							￥<text>398</text>
						</view>
					</view>
				</view>
			</view>
		
			<view class="address-map">
				<view class="address-map-one">
					<text>西湖湖滨商圈</text>
					<text>平海路38号</text>
				</view>
				<view class="address-map-two">
						<view class="map-one">
							<image src="../../../static/images/距离@2x.png" mode=""></image>
						</view>
						<view class="map-two">
							距离杭州体育馆3.4公里，驾车至此4.9公里，约17分钟
						</view>
						<view class="map-four">
							
						</view>
						<view class="map-three" @click="phoneShow=true">
							<image src="../../../static/images/位置@2x.png" mode=""></image>
						</view>
						<u-popup v-model="phoneShow" mode="bottom" height="300">
							<view class="" style="font-size: 28rpx;color: #999;text-align: center;margin: 40rpx auto;" >
								400-1000-8899
							</view>
							<view class="" style="margin: 0 52rpx;background-color: #f5f5f5;height: 2rpx;">
								
							</view>
							<view class="" style="font-size: 28rpx;color: #333;text-align: center;margin: 40rpx auto;" @click="phone">
								呼叫
							</view>
						</u-popup>
							
				</view>
				<view class="address-map-three">
					<view class="map-three-one">
						<image src="../../../static/images/编组备份@2x.png" mode=""></image>联系客服
					</view>
					<view class="map-three-one" >
						<image src="../../../static/images/编组备份@2x.png" mode="">拨打电话
					</view>
				</view>
			</view>
		
			<view class="title">
				<view class="title-one">
					<view class="title-one-left">
						入住人
					</view>
					<view class="title-one-right">
						阿萨德
					</view>
				</view>
				<view class="title-one">
					<view class="title-one-left">
						电话号码
					</view>
					<view class="title-one-right">
						12123222121
					</view>
				</view>
			</view>
		
			<view class="title">
				<view class="title-one">
					<view class="title-one-left">
						订单编号
					</view>
					<view class="title-one-right">
						7834783478
					</view>
					<view class="title-one-btn">
						复制
					</view>
				</view>
				<view class="title-one">
					<view class="title-one-left">
						订单时间
					</view>
					<view class="title-one-right">
						2021-03-23  20:39:58
					</view>
				</view>
			</view>
			
			
			<view class="titles">
				<view class="title-one">
					<view class="title-one-left">
						商品总额
					</view>
					<view class="title-one-right">
						¥88.00
					</view>
				</view>
				<view class="title-one">
					<view class="title-one-left">
						优惠
					</view>
					<view class="title-one-right">
						-¥0.00
					</view>
				</view>
				
				<view class="title-two">
					实付款：
					<view class="title-one-one">
						￥<text>88.00</text>
					</view>
				</view>
			</view>
			
			<view class="recommend">
					<view class="recommend-title">
						超值推荐
					</view>
					<view class="recommend-card">
						<view class="recommend-card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="recommend-card-right">
							<view class="recommend-card-one">
								已消毒步行西湖10多分钟 近浙大 …
							</view>
							<view class="recommend-card-two">
								<image src="../../../static/images/1@2x(3).png" mode=""></image>
								<image src="../../../static/images/1@2x(2).png" mode=""></image>
							</view>
							<view class="recommend-card-three">
								￥<text>398</text>
							</view>
						</view>
					</view>
					<view class="recommend-card">
						<view class="recommend-card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="recommend-card-right">
							<view class="recommend-card-one">
								已消毒步行西湖10多分钟 近浙大 …
							</view>
							<view class="recommend-card-two">
								<image src="../../../static/images/1@2x(3).png" mode=""></image>
								<image src="../../../static/images/1@2x(2).png" mode=""></image>
							</view>
							<view class="recommend-card-three">
								￥<text>398</text>
							</view>
						</view>
					</view>
					<view class="recommend-card">
						<view class="recommend-card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="recommend-card-right">
							<view class="recommend-card-one">
								已消毒步行西湖10多分钟 近浙大 …
							</view>
							<view class="recommend-card-two">
								<image src="../../../static/images/1@2x(3).png" mode=""></image>
								<image src="../../../static/images/1@2x(2).png" mode=""></image>
							</view>
							<view class="recommend-card-three">
								￥<text>398</text>
							</view>
						</view>
					</view>
				</view>
				
			</view>
		
		<view class="footer" style="">
			<view class="footer-left">
				申请退款
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
		position: relative;
		height: 200vh;
	}
	.bgc{
		height: 116rpx;
		// background-color: #FF8000;
		padding: 20rpx 0;
		.bgc-title{
			font-size: 26rpx;
			color: #666;
			text-align: center;
			text{
				color: #ff8000;
			}
		}
	}
	.content{
		padding: 20rpx 32rpx;
		position: absolute;
		top: 50rpx;
		.cards{
			background-color: #fff;
			padding: 20rpx;
			margin-bottom: 20rpx;
			.card-title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;
				background-color: #fff;
				.card-title-left{
					display: flex;
					align-items: center;
					.card-one{
						width: 40rpx;
						height: 40rpx;
						margin-right: 10rpx;
						image{
							width: 40rpx;
							height: 40rpx;
							border-radius: 20rpx;
						}
					}
					.card-two{
						
					}
				}
				.card-title-right{
					
				}
			}
			.card-content{
				// width: 686rpx;
				// padding: 20rpx;
				margin-bottom: 20rpx;
				display: flex;
				background-color: #fff;
				border-radius: 10rpx;
				.card-left{
					width: 188rpx;
					height: 188rpx;
					margin-right: 20rpx;
					image{
						width: 188rpx;
						height: 188rpx;
					}
				}
				.card-right{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.card-right-one{
						font-size: 28rpx;
						color: #333;
					}
					.card-right-two{
						font-size: 24rpx;
						color: #999;
					}
					.card-right-three{
						font-size: 24rpx;
						color: #999;
						text{
							margin-right: 10rpx;
						}
					}
					.card-right-four{
						font-size: 24rpx;
						color: #FF2D19;
						text{
							font-size: 32rpx;
							font-weight: 700;
						}
					}
				}
			}
			
		}
		.address-map{
			background-color: #fff;
			padding: 20rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			.address-map-one{
				margin-top: 20rpx;
				text{
					color: #333;
					font-size: 28rpx;
					font-weight: 500;
					margin-right: 22rpx;
					font-weight: 700;
				}
			}
			.address-map-two{
				display: flex;
				margin: 10rpx 0 20rpx;
				padding-bottom: 20rpx;
				border-bottom: 1rpx solid #f5f5f5;
					.map-one{
						width: 34rpx;
						height: 34rpx;
						margin-right: 10rpx;
						image{
							width: 34rpx;
							height: 34rpx;
						}
					}
					.map-two{
						font-size: 24rpx;
						color: #999;
						width: 472rpx;
						letter-spacing:2rpx
					}
					.map-four{
						height: 40rpx;
						width: 2rpx;
						background-color: #E6E6E6;
						margin: 0 40rpx;
					}
					.map-three{
						width: 48rpx;
						height: 48rpx;
						image{
							width: 48rpx;
							height: 48rpx;
						}
					}
			}
		
			.address-map-three{
				
				display: flex;
				justify-content: space-around;
				.map-three-one{
					display: flex;
					align-items: center;
					image{
						width: 36rpx;
						height: 36rpx;
						margin-right: 10rpx;
					}
					font-size: 26rpx;
					font-weight: 700;
					color: #333;
				}
				
			}
		}
		.title{
			padding:0 20rpx;
			margin: 20rpx 0;
			background-color: #fff;
			border-radius: 10rpx;
			.title-one{
				display: flex;
				align-items: center;
				padding: 20rpx 0;
				font-size: 26rpx;
				border-bottom: 1rpx solid #f5f5f5;
				.title-one-left{
					width: 112rpx;
					margin-right: 40rpx;
					color: #666;
				}
				.title-one-right{
					color: #333;
				}
				.title-one-btn{
					width: 60rpx;
					height: 32rpx;
					border-radius: 4rpx;
					border: 2rpx solid #FF8000;
					color: #FF8000;
					line-height: 32rpx;
					text-align: center;
					font-size: 22rpx;
					margin-left: 10rpx;
				}
			}
		}
		
		.titles{
			padding:0 20rpx;
			margin: 20rpx 0;
			background-color: #fff;
			border-radius: 10rpx;
			.title-one{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20rpx 0;
				font-size: 26rpx;
				border-bottom: 1rpx solid #f5f5f5;
				.title-one-left{
					width: 112rpx;
					margin-right: 40rpx;
					color: #666;
				}
				.title-one-right{
					color: #333;
				}
				
				
			}
			.title-two{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				padding: 40rpx 0 20rpx;
				.title-one-one{
					color: #FF2D19;
					font-size: 24rpx;
					text{
						font-size: 32rpx;
						font-weight: 700;
					}
				}
			}
		}
	
		.recommend{
			.recommend-title{
				font-size: 32rpx;
				font-weight: 700;
				color: #333;
				margin: 40rpx 0 20rpx;
			}
			.recommend-card{
				display: flex;
				background-color: #fff;
				margin-bottom: 20rpx;
				.recommend-card-left{
					width: 220rpx;
					height: 220rpx;
					image{
						width: 220rpx;
						height: 220rpx;
					}
				}
					
				.recommend-card-right{
					padding: 20rpx 0 20rpx 20rpx;
					.recommend-card-one{
						font-size: 28rpx;
						color: #333;
					}
					.recommend-card-two{
						margin: 10rpx 0 48rpx;
						image{
							width: 86rpx;
							height: 34rpx;
							margin-right: 12rpx;
						}
					}
					.recommend-card-three{
						font-size: 24rpx;
						color: #FF2D19;
						text{
							font-size: 32rpx;
							font-weight: 700;
						}
					}
				}
			}
		}
	
		
	}
	.footer{
		display: flex;
		background-color: #fff;
		height: 100rpx;
		width: 750rpx;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		bottom: 0;
		padding: 0 32rpx;
		.footer-left{
			height: 68rpx;
			width: 184rpx;
			border-radius: 39rpx;
			border: 2rpx solid #999999;
			line-height: 68rpx;
			text-align: center;
		}
		.footer-right{
			width: 158rpx;
			height: 68rpx;
			background: #FF4D00;
			border-radius: 39rpx;
			line-height: 68rpx;
			text-align: center;
			color: #fff;
			margin-left: 20rpx;
		}
	}
</style>
