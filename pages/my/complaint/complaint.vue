<template>
	<view class="warp">
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
			
			<view class="title">
				<view class="title-left">
					申请原因
				</view>
				<view class="title-right">
					请选择 <image src="../../../static/images/编组@2x.png" mode=""></image>
				</view>
			</view>
			<view class="box">
				<view class="box-title">
					请具体说明投诉原因（必填）
				</view>
				<view class="box-one">
					<textarea value="" placeholder="" />
				</view>
				<u-upload :action="action" :file-list="fileList" ></u-upload>
			</view>
			
			
		</view>
		<view class="footer">
			<view class="footer-one">
				提交
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
	}
	.content{
		padding: 20rpx 32rpx;
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
	
		.title{
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			.title-left{
				color: #333;
			}
			.title-right{
				display: flex;
				align-items: center;
				color: #ccc;
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	
		.box{
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			margin: 20rpx 0;
			.box-title{
				font-size: 28rpx;
				color: #333;
			}
			.box-one{
				textarea{
					background-color: #f5f5f5;
				}
			}
		}
	}


	.footer{
		height: 100rpx;
		width: 750rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
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
</style>
