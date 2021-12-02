<template>
	<view class="warp">
		<view class="">
			<u-navbar back-text=" " title="杭州"></u-navbar>
		</view>
		<view class="search" >
			<u-search placeholder="搜索你想要去的民宿" shape="square"  v-model="keyword" ></u-search>
		</view>
		<view class="date">
			<view class="date-one">
				<view class="date-start">
					<view class="date-start-one">
						入住日期
					</view>
					<view class="date-start-two">
						02月09日
					</view>
				</view>
				<view class="date-date">
					1晚
				</view>
				<view class="date-start">
					<view class="date-start-one">
						离店日期
					</view>
					<view class="date-start-two">
						02月10日
					</view>
				</view>
			</view>
			
			<view class="date-two">
				<view class="date-two-one">
					综合
				</view>
				<view class="date-two-two">
					价格
				</view>
				<view class="date-two-three">
					离我最近
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-recommend-two">
				<view class="content-recommend-two-first" v-for="item in 6" @click="gocomment()">
					<view class="content-recommend-two-one">
						<image src="../../../static/images/位图(1).png" mode=""></image>
					</view>
					<view class="content-recommend-two-two">
						已消毒步行西湖10多分钟 近浙大 黄龙 植物…
					</view>
					<view class="content-recommend-two-three">
						<view class="text1">
							398
						</view>
						<view class="">
							
						</view>
						<view class="text2">
							
						</view>
					</view>
					<view class="fen">
					<u-icon name="map" color="#fff" ></u-icon>	浙江省  杭州市
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
		background-color: #f5f5f5;
	}
	.search{
		padding:0 32rpx ;
		background-color: #fff;
		height: 88rpx;
		line-height: 88rpx;
	}
	.date{
		padding: 0 32rpx;
		background-color: #fff;
		.date-one{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 118rpx;
			border-bottom: 1rpx solid #f5f5f5;
			.date-start{
				.date-start-one{
					font-size: 24rpx;
					color: #666;
					font-family: PingFangSC-Regular, PingFang SC
				}
				.date-start-two{
					font-size: 32rpx;
					color: #333;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 700;
				}
			}
			.date-date{
				font-size: 26rpx;
				color: #333;
			}
		}
		.date-two{
			height: 78rpx;
			display: flex;
			align-items: center;
			color: #666;
			font-size: 26rpx;
			.date-two-one{
				font-size: 26rpx;
				color: #FF4D00;
			}
			.date-two-two{
				font-size: 26rpx;
				margin: 0 80rpx;
			}
			.date-two-three{
				font-size: 26rpx;
			}
		}
	}
	.content{
		padding: 20rpx 32rpx;
		.content-recommend-two{
			display: flex;
			width: 686rpx;
			flex-wrap: wrap;
			justify-content: space-between;
			.content-recommend-two-first{
				width: 332rpx;
				height: 458rpx;
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
					padding:  0 20rpx;
					display: flex;
					align-items: center;
					.text1{
						font-size: 32rpx;
						font-weight: 700;
						color: #FF2D19;
					}
					.text2{
						font-size: 20rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #999999;
						position: relative;
						margin-left: 50rpx;
						.line{
							width: 90rpx;
							height: 1rpx;
							background-color: #999;
							position: absolute;
							top: 14rpx;
						}
					}
				}
				.fen{
					width: 182rpx;
					height: 36rpx;
					background: rgba(0, 0, 0, 0.4);
					border-radius: 5rpx;
					text-align: center;
					line-height: 36rpx;
					color: #fff;
					position: absolute;
					top: 234rpx;
					left: 10rpx;
					font-size: 20rpx;
				}
			}
		}
	}
</style>
