<template>
	<view class="warp">
		<view class="card">
			<view class="card-score">
				<view class="card-one">
					<view class="card-one-one">
						4.8
					</view>
					<view class="card-one-two">
						
					</view>
				</view>
				<view class="card-two">
					<view class="card-two-one">
						超赞“房东很好”
					</view>
					<view class="card-two-two">
						<view class="card-two-img" v-for="item in 5">
							<image src="../../../static/images/好评度@2x.png" mode=""></image>
						</view>
						
					</view>
				</view>
				<view class="card-three">
					<view class="card-three-one">
						性价比高<text>4.9</text>
					</view>
					<view class="card-three-one">
						干净卫生<text>4.5</text>
					</view>
					<view class="card-three-one">
						位置极佳<text>5.0</text>
					</view>
				</view>
			</view>
			<view class="card-list">
				<view class="card-list-one">
						全部 36
				</view>
				<view class="card-list-one">
						全部 36
				</view>
				<view class="card-list-one">
						全部 36
				</view>
				<view class="card-list-one">
						全部 36
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="content-title">
				<view class="content-title-one">
					按时间排序
				</view>
				<view class="content-title-two">
				</view>
				<view class="content-title-three">
					默认排序
				</view>
			</view>
			
			
			<view class="content-list">
				<view class="content-list-one">
					<view class="content-list-left">
						<view class="content-list-left-img">
							<image src="../../../static/images/位图(1).png" mode=""></image>
						</view>
						<view class="content-list-left-name">
							<view class="content-list-name">
								李***992
							</view>
							<view class="content-list-name-img">
								<view class="" v-for="item in 5">
									<image src="../../../static/images/@2x.png" mode=""></image>
								</view>
							</view>
						</view>
					</view>
					<view class="content-list-right">
						2020-05-12入住
					</view>
				</view>
				<view class="content-list-two">
					酒店地理位置好，交通方便，也有停车场。附近700米左右有地铁站，
					酒店傍边走20步左右就有一个小便利店，房间干净，住着很舒适。
					服务人员很热情，酒店提供免费的农夫山泉矿泉水。总体还是不错的，价格又很便宜的。
				</view>
				<view class="content-list-three">
					<view class="content-list-three-one" v-for="item in 3">
						<image src="../../../static/images/house.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="content-list">
				<view class="content-list-one">
					<view class="content-list-left">
						<view class="content-list-left-img">
							<image src="../../../static/images/位图(1).png" mode=""></image>
						</view>
						<view class="content-list-left-name">
							<view class="content-list-name">
								李***992
							</view>
							<view class="content-list-name-img">
								<view class="" v-for="item in 5">
									<image src="../../../static/images/@2x.png" mode=""></image>
								</view>
							</view>
						</view>
					</view>
					<view class="content-list-right">
						2020-05-12入住
					</view>
				</view>
				<view class="content-list-two">
					酒店地理位置好，交通方便，也有停车场。附近700米左右有地铁站，
					酒店傍边走20步左右就有一个小便利店，房间干净，住着很舒适。
					服务人员很热情，酒店提供免费的农夫山泉矿泉水。总体还是不错的，价格又很便宜的。
				</view>
				<view class="content-list-three">
					<view class="content-list-three-one" v-for="item in 3">
						<image src="../../../static/images/house.png" mode=""></image>
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
			
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		padding: 20rpx 32rpx 0;
		background-color: #f5f5f5;
	}
	.card{
		// width: 686rpx;
		height:276rpx ;
		background-color: #fff;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.card-score{
			// width: 646rpx;
			height: 152rpx;
			background-color: #f5f5f5;
			padding: 20rpx;
			display: flex;
			// align-items: center;
			.card-one{
				margin-right: 20rpx;
				height: 112rpx;
				position: relative;
				.card-one-one{
					font-size: 80rpx;
					font-weight: 700;
					// z-index: 100;
					position: absolute;
					// bottom: 10;
				}
				.card-one-two{
					width: 120rpx;
					height: 16rpx;
					background: #FF4D00;
					border-radius: 10rpx;
					margin-top: 78rpx;
					
					
				}
			}
			.card-two{
				height: 112rpx;
				margin-right: 115rpx;
				.card-two-one{
					font-size: 28rpx;
					color: #333;
					margin-top: 18rpx;
				}
				.card-two-two{
					display: flex;
					.card-two-img{
						width: 36rpx;
						height: 36rpx;
						image{
							width: 36rpx;
							height: 36rpx;
						}
					}
				}
			}
			.card-three{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.card-three-one{
					font-size: 22rpx;
					color: #333;
					text{
						color: #14CC70;
						margin-left: 5rpx;
					}
				}
			}
		}
	
		.card-list{
			display: flex;
			height: 60rpx;
			// width: 100%;
			.card-list-one{
				height: 60rpx;
				padding: 0rpx 20rpx;
				
				background-color: #f5f5f5;
				border-radius: 30rpx;
				line-height: 60rpx;
				margin-right: 20rpx;
			}
		}
	
	}

	.content{
		padding: 20rpx;
		background-color: #fff;
		margin-top: 20rpx;
		.content-title{
			font-size: 26rpx;
			display: flex;
			align-items: center;
			// float: right;
			justify-content: flex-end;
			margin-bottom: 40rpx;
			.content-title-one{
				color: #999;
			}
			.content-title-two{
				width: 2rpx;
				height: 20rpx;
				background: #E6E6E6;
				border-radius: 1rpx;
				margin: 0 10rpx;
			}
			.content-title-three{
				color: #333;
			}
		}
	
		.content-list{
			margin-bottom: 40rpx;
			.content-list-one{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.content-list-left{
					display: flex;
					.content-list-left-img{
						width: 68rpx;
						height: 68rpx;
						margin-right: 10rpx;
						image{
							width: 68rpx;
							height: 68rpx;
							border-radius: 34rpx;
						}
					}
					.content-list-left-name{
						.content-list-name{
							font-size: 28rpx;
							color: #333;
						}
						.content-list-name-img{
							width: 28rpx;
							height: 28rpx;
							display: flex;
							image{
								width: 28rpx;
								height: 28rpx;
							}
						}
					}
				}
				.content-list-right{
					font-size: 22rpx;
					color: #999;
				}
			}
			.content-list-two{
				font-size: 26rpx;
				color: #333;
				line-height: 2em;
				margin: 10rpx 0;
			}
			.content-list-three{
				display: flex;
				.content-list-three-one{
					width: 202rpx;
					height: 202rpx;
					margin-right: 20rpx;
					image{
						width: 202rpx;
						height: 202rpx;
					}
				}
			}
			
			
		}
	
	}

</style>
