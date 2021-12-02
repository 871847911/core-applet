<template>
	<view class="warp">
			<view class="content">
				<view class="list" >
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已完成
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four" @click="goshopcenter()">
						
						<view class="list-four-right">
							评价
						</view>
					</view>
				</view>
		
		
			
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已完成
						</view>
					</view>
					<view class="cards">
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
					
					<view class="list-four" @click="gocenter()">
						<view class="list-four-right">
							评价
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
			// 跳转民宿评价中心
			gocenter(){
				uni.navigateTo({
					url:'../center/center'
				})
			},
			// 跳转商品评价中心
			goshopcenter(){
				uni.navigateTo({
					url:'../shopcenter/shopcenter'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	
	.content{
		padding:20rpx 32rpx;
		.list{
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			background-color: #fff;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.list-one{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.list-one-left{
					font-size: 28rpx;
					color: #333;
					display: flex;
					align-items: center;
					image{
						width: 52rpx;
						height: 52rpx;
					}
				}
				.list-one-right{
					color: #999;
					font-size: 26rpx;
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
			
			.cards{
				width: 686rpx;
				padding: 20rpx;
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
			
			.list-three{
				padding: 20rpx;
				background: #FAFAFA;
				.list-three-left{
					font-size: 28rpx;
					color: #333;
				}
				.list-three-right{
					font-size: 24rpx;
					color: #999;
				}
			}
			.list-four{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.list-four-left{
					width: 144rpx;
					height: 56rpx;
					border-radius: 39rpx;
					border: 2rpx solid #CCCCCC;
					text-align: center;
					line-height: 56rpx;
					margin-left: 20rpx;
				}
				.list-four-right{
					width: 144rpx;
					height: 56rpx;
					border-radius: 39rpx;
					border: 2rpx solid #FF4D00;
					text-align: center;
					line-height: 56rpx;
					color: #FF4D00;
					margin-left: 20rpx;
				}
				
			}
		}
	
		
	}
	
</style>
