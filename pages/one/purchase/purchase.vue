<template>
	<view class="warp">
		
			<view class="time">
				<view class="time-one" v-for="(item,index) in 6"  @click="btn(index)">
					<view class="time-top" :class="{active:index==num}" >
						今天
					</view>
					<view class="time-bottom" :class="{actives:index==num}"> 
						00:00:00
					</view>
				</view>
			</view>
			<view class="tap">
				<view class="tap-left">
					<view class="tap-left-one">
						<view class="tap-left-text">
							综合排序
						</view>
						<view class="tap-left-img">
							<image src="../../../static/images/全部.png" mode=""></image>
						</view>
					</view>
					
				</view>
				<view class="tap-left">
					<view class="tap-left-one">
						<view class="tap-left-text">
							价格
						</view>
						<view class="tap-left-img">
							<image src="../../../static/images/全部.png" mode=""></image>
						</view>
					</view>
					<view class="tap-left-one">
						<view class="tap-left-text">
							距离
						</view>
						<view class="tap-left-img">
							<image src="../../../static/images/全部.png" mode=""></image>
						</view>
					</view>
					
				</view>
			</view>
			<view class="content">
				<view class="card" v-for="item in 4">
					<view class="card-img" @click="gospecial()">
						<image src="../../../static/images/house.png" mode=""></image>
					</view>
					<view class="card-right">
						<view class="card-right-one">
							似水中餐厅｜4588元奢华8~10…
						</view>
						<view class="card-right-two">
							已抢2345份
							
						</view>
						<view class="card-right-three">
							<view class="card-right-three-left">
								<text class="text1">88</text> <text class="text2"></text>
							</view>
							<view class="card-right-three-right">
								立即抢购
							</view>
							
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
				num:0
			}
		},
		methods: {
			gospecial(){
				uni.navigateTo({
					url:'../special/special'
				})
			},
			btn(index){
				console.log(index)
				this.num=index
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	.active{
		font-size: 28rpx !important;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500 !important;
		color: #00BBCC !important;
	}
	.actives{
		font-size: 20rpx !important;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FF2D19 !important;
	}
		.time{
			background-color: #fff;
			padding: 0 32rpx;
			display: flex;
			align-items: center;
			height: 88rpx;
			justify-content: space-between;
			.time-one{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.time-top{
					font-size: 28rpx;
					color: #666;
				}
				.time-bottom{
					font-size: 20rpx;
					color: #999;
				}
			}
		}
		.tap{
			background-color: #fff;
			padding: 0 32rpx;
			display: flex;
			align-items: center;
			height: 88rpx;
			justify-content: space-between;
			.tap-left{
				display: flex;
				align-items: center;
				.tap-left-one{
					display: flex;
					align-items: center;
					.tap-left-text{
						font-size: 28rpx;
						color: #333;
					}
					.tap-left-img{
						width: 40rpx;
						height: 40rpx;
						image{
							width: 40rpx;
							height: 40rpx;
						}
					}
				}
			}
		}
	.content{
		padding: 20rpx 32rpx;
		.card{
			display: flex;
			// align-items: center;
			background-color: #fff;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			
			.card-img{
				width: 220rpx;
				height: 220rpx;
				// margin-right: 20rpx;
				image{
					width: 220rpx;
					height: 220rpx;
					border-radius: 10rpx;
				}
			}
			.card-right{
				display: flex;
				flex-direction: column;
				// justify-content: space-between;
				padding: 20rpx;
				position: relative;
				.card-right-one{
					font-size: 28rpx;
					color: #333;
				}
				.card-right-two{
					font-size: 24rpx;
					color: #999;
					margin: 10rpx 0 50rpx;
				
				}
					
				.card-right-three{
					display: flex;
					justify-content: space-between;
					.card-right-three-left{
						color: #FF2D19;
						font-size: 24rpx;
						font-weight: 700;
						.text1{
							font-size: 34rpx;
						}
						.text2{
							font-size: 22rpx;
							color: #999;
							font-weight: normal;
							margin-left: 10rpx;
						}
					}
					.card-right-three-right{
						width: 144rpx;
						height: 56rpx;
						background: linear-gradient(270deg, #FF8000 0%, #FF4D00 100%);
						border-radius: 4rpx;
						line-height: 56rpx;
						color: #fff;
						text-align: center;
					}
				}
			
				
			}
		}
	}
</style>
