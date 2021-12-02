<template>
	<view class="warp">
		<view class="card">
			<view class="card-one">
				<view class="card-one-left">
					<image src="../../../static/images/位图(1).png" mode=""></image>
				</view>
				<view class="card-one-right">
					<view class="card-one-right-one">
						「2 晚 特 惠」 遇染民宿酒店，2晚连住低至7折，送…
					</view>
					<view class="card-one-right-two">
						2天1晚住宿+早餐+下午茶+年货伴手礼+限定款红包+夜宵
					</view>
				</view>
			</view>
			<view class="card-two">
				<view class="card-two-first" v-for="item in 3">
					<view class="card-two-top">
						3-17
					</view>
					<view class="card-two-bottom">
						周三
					</view>
				</view>
				<view class="card-two-second">
					<view class="card-two-second-bottom">
						更多日期
					</view>
				</view>
			</view>
			<view class="card-three">
				选择套餐的入住日期和房型，商家确认后即预定成功
			</view>
		</view>
	
		<view class="content">
			<view class="content-title">
				<view class="content-title-left">
					<view class="content-title-one">
						
					</view>
					<view class="content-title-two">
						遇染民宿酒店
					</view>
				</view>
				<view class="content-title-right">
					商户详情 >
				</view>
			</view>
		
			<view class="content-list">
				<view class="content-list-one" v-for="(item,index) in 5" :class="{active:index==num}" @click="bind(index)">
					红藕深 · 观景大床房
				</view>
			</view>
		</view>
		
		<view class="footer">
			<view class="footer-left">
				<text>398</text>.00
			</view>
			<view class="footer-one">
				明细<image src="../../../static/images/立即抢购@2x.png" mode=""></image>
			</view>
			<view class="footer-right" @tap="gosubmit()">
				提交订单
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
			bind(index){
				this.num=index
			},
			// 跳转提交订单页面
			gosubmit(){
				uni.navigateTo({
					url:'../submit/submit'
				})
			}
				
		}
	}
</script>

<style scoped lang="scss">
	.active{
		background: rgba(0, 187, 204, 0.1) !important;
		border: 2rpx solid #00BBCC;
		color: #00BBCC !important;
	}
	.warp{
		background-color: #f5f5f5;
		// padding: 20rpx 32rpx;
		padding-top: 20rpx;
		height: 100vh;
		font-family: PingFangSC-Regular, PingFang SC;
	}
	.card{
		padding: 20rpx;
		width: 686rpx;
		height: 442rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 0rpx 32rpx 20rpx;
		.card-one{
			display: flex;
			justify-content: space-between;
			.card-one-left{
				width: 280rpx;
				height: 220rpx;
				image{
					width: 280rpx;
					height: 220rpx;
				}
			}
			.card-one-right{
				// margin-left: 20rpx;
				letter-spacing: 0rpx;
				width: 346rpx;
				.card-one-right-one{
					font-size: 28rpx;
					color: #333;
					margin-bottom: 10rpx;
				}
				.card-one-right-two{
					font-size: 24rpx;
					color: #999;
				}
			}
		}
		.card-two{
			margin: 20rpx 0;
			display: flex;
			justify-content: space-between;
			.card-two-first{
				width: 148rpx;
				height: 108rpx;
				border-radius: 4rpx;
				border: 2rpx solid #E6E6E6;
				padding: 20rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 24rpx;
				.card-two-top{
					color: #666;
				}
				.card-two-bottom{
					color: #999;
				}
			}
			.card-two-second{
				width: 148rpx;
				height: 108rpx;
				background: rgba(255, 77, 0, 0.1);
				border-radius: 4rpx;
				padding: 20rpx;
				.card-two-second-bottom{
					font-size: 24rpx;
					color: #FF4D00;
				}
			}
			
		}
	
		.card-three{
			font-size: 24rpx;
			color: #999;
		}
	
	}

	.content{
		padding: 20rpx;
		width: 686rpx;
		background-color: #fff;
		margin: 0rpx 32rpx 20rpx;
		.content-title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20rpx;
			.content-title-left{
				display: flex;
				align-items: center;
				.content-title-one{
					width: 12rpx;
					height: 12rpx;
					background: #00BBCC;
					border-radius: 2rpx;
					margin-right: 20rpx;
				}
				.content-title-two{
					font-size: 32rpx;
					color: #333;
				}
			}
			.content-title-right{
				font-size: 26rpx;
				color: #999;
			}
		}
	
		.content-list{
			.content-list-one{
				// padding: 10rpx 40rpx;
				width: 338rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 28rpx;
				margin-bottom: 20rpx;
				border-radius: 30rpx;
				background: #F5F5F5;
				color: #666;
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
			color: #FF7919;
			font-size: 24rpx;
			text{
				font-size: 40rpx;
				font-weight: 700;
			}
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
			background: linear-gradient(90deg, #FF2D19 0%, #FF6619 100%);
			border-radius: 39rpx;
			line-height: 80rpx;
			text-align: center;
			color: #fff;
			font-size: 28rpx;
		}
	}
</style>
