<template>
	<view class="warp">
		
		<view class="content">
			<view class="top-title">
				该订单将在<text>14分钟59秒</text>后自动关闭
			</view>
			<view class="editmap">
				<view class="editmap-one">
					<view class="editmap-one-left">
						<image src="../../../static/images/编组@2x(1).png" mode=""></image>
						<text>王铁柱</text>
						<text>155****4544</text>
					</view>
					<view class="editmap-one-right">
						修改<image src="../../../static/images/编组@2x.png" mode=""></image>
					</view>
					
				</view>
				<view class="editmap-two">
					浙江省杭州市广宇万科公园里18号楼1单元10楼101室
				</view>
			</view>
			<view class="card">
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
								￥<text>88</text>.00
							</view>
							
						</view>
					</view>
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
						下单时间
					</view>
					<view class="title-one-right">
						2021-03-23  20:39:58
					</view>
				</view>
				<view class="title-one">
					<view class="title-one-left">
						配送方式
					</view>
					<view class="title-one-right">
						韵达快递
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
						运费
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
					<view class="content-recommend-two">
						<view class="content-recommend-two-first" v-for="(item,index) in 6" :key='index'>
							<view class="content-recommend-two-one">
								<image src="../../../static/images/位图(1).png" mode=""></image>
							</view>
							<view class="content-recommend-two-two">
								「已消毒步行西湖10多分钟 近浙大 黄龙 植物…
							</view>
							<view class="content-recommend-two-three">
								￥<text>398</text>
							</view>
							<view class="content-recommend-two-four">
								1000+条评论
							</view>
						</view>
					</view>
				</view>
				
			</view>
		
		<view class="footer" style="">
			<view class="footer-left">
				取消订单
			</view>
			<view class="footer-right">
				待付款
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
		height: 250vh;
	}
	.bgc{
		height: 116rpx;
		background-color: #FF8000 ;
		.bgc-title{
			font-size: 26rpx;
			color: #fff;
			text-align: center;
		}
	}
	.content{
		padding: 0 32rpx;
		position: absolute;
		// background-color: #f5f5f5;
		// top: 50rpx;
		.top-title{
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			text-align: center;
			margin: 20rpx 0;
			text{
				color: #FF2D19;
			}
		}
		.editmap{
			padding: 20rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			.editmap-one{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.editmap-one-left{
					display: flex;
					align-items: center;
					image{
						width: 40rpx;
						height: 40rpx;
						margin-right: 10rpx;
					}
					text{
						font-size: 28rpx;
						color: #333;
						font-weight: 700;
						margin-right: 20rpx;
					}
				}
				.editmap-one-right{
					display: flex;
					align-items: center;
					font-size: 26rpx;
					color: #666;
					image{
						width: 36rpx;
						height: 36rpx;
					}
				}
			}
			.editmap-two{
				font-size: 22rpx;
				color: #999;
				padding-top: 20rpx;
				margin-left: 50rpx;
			}
		}
		.card{
			background-color: #fff;
			padding: 20rpx;
			.card-title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;
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
				display: flex;
				align-items: center;
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
			.address-map-three{
				
				display: flex;
				justify-content: space-around;
				padding-top: 20rpx;
				border-top: 1rpx solid #f5f5f5;
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
			margin-bottom: 110rpx;
			.recommend-title{
				font-size: 32rpx;
				font-weight: 700;
				color: #333;
				margin: 40rpx 0 20rpx;
			}
			.content-recommend-two{
				display: flex;
				width: 686rpx;
				flex-wrap: wrap;
				justify-content: space-between;
				.content-recommend-two-first{
					width: 332rpx;
					// height: 458rpx;
					// margin-right: 20rpx;
					background-color: #fff;
					position: relative;
					margin-bottom: 30rpx;
					.content-recommend-two-one{
						width: 332rpx;
						height: 280rpx;
						image{
							width: 332rpx;
							height: 280rpx;
						}
					}
					.content-recommend-two-two{
						font-size: 28rpx;
						color: #333;
						margin: 20rpx 0 10rpx;
						padding:  0 15rpx;
					}
					.content-recommend-two-three{
						font-size: 24rpx;
						color: #FF2D19;
						padding:  0 20rpx;
						text{
							font-size: 32rpx;
							font-weight: 700;
						}
					}
					.content-recommend-two-four{
						padding:  0 20rpx 20rpx;
						font-size: 22rpx;
						color: #999;
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
