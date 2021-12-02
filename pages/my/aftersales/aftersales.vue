<template>
	<view class="warp">
		<view class="content">
			<view class="list">
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
						
					</view>
				</view>
			</view>
			
			
			<view class="box" @click="goreturn()">
				<view class="box-one">
					<image src="../../../static/images/1.png" mode=""></image>
					<view class="box-two">
						<view class="box-two-one">
							我要退货退款
						</view>
						<view class="box-two-two">
							已收到货，需要退还已收到的货物
						</view>
					</view>
				</view>
				
				<view class="box-three">
					<image src="../../../static/images/评分／评价@2x.png" mode=""></image>
				</view>
			</view>
			
			
			<view class="box" @click="goexchange()">
				<view class="box-one">
					<image src="../../../static/images/2.png" mode=""></image>
					<view class="box-two">
						<view class="box-two-one">
							我要换货
						</view>
						<view class="box-two-two">
							对收到的商品不满意，可与商家协商换货
						</view>
					</view>
				</view>
				
				<view class="box-three">
					<image src="../../../static/images/评分／评价@2x.png" mode=""></image>
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
			// 去往退货退款
			goreturn(){
				uni.navigateTo({
					url:'../return/return'
				})
			},
			// 去往换货页面
			goexchange(){
				uni.navigateTo({
					url:'../exchange/exchange'
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
		padding: 20rpx;
		.list{
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			background-color: #fff;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			
			.card{
				display: flex;
				align-items: center;
				background-color: #fff;
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
		.box{
			display: flex;
			justify-content: space-between;
			height: 152rpx;
			align-items: center;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 0 20rpx;
			margin-bottom: 20rpx;
			.box-one{
				display: flex;
				align-items: center;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
				.box-two{
					.box-two-one{
						font-size: 28rpx;
						color: #333;
						font-weight: 700;
					}
					.box-two-two{
						font-size: 22rpx;
						color: #333;
					}
				}
			}
			.box-three{
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	
	}
</style>
