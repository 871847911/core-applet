<template>
	<view class="warp">
		<view class="card">
			
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
			
			
			<view class="content-list" v-for="item in 3">
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
				<view class="content-list-five">
					<text>商家回复：</text>非常感谢您的好评，授人玫瑰手有余香，您的好评是对我们最大的支持与鼓励，
					也将是我们不断前进的动力！谢谢您的光临，希望与您有更多的合作！再次非常感谢，祝你生活愉快，万事如意。
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
		// height:276rpx ;
		background-color: #fff;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		
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
			.content-list-five{
				font-size: 24rpx;
				padding: 20rpx;
				color: #666;
				background-color: #f5f5f5;
				margin-top: 20rpx;
				text{
					color: #333;
					font-weight: 700;
				}
			}
			
		}
	
	}

</style>
