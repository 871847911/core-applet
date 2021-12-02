<template>
	<view class="warp">
		<view class="content">
			<view class="card">
				<view class="card-title">
					<view class="card-title-left">
						
							<image src="../../../static/images/编组%202@2x%20-%20万能看图王.png" mode=""></image>余额
						
					</view>
					<view class="card-title-right">
						仅用于消费，不可提现
					</view>
				</view>
				<view class="card-one">
					￥<text>100</text>
				</view>
			</view>
			
			<view class="list" >
				<view class="list-title">
					<view class="list-title-left">
						账单信息
					</view>
					<view class="list-title-right" @click="gotrade()">
						2021-03 <image src="../../../static/images/全部.png" mode=""></image>
					</view>
				</view>
				<view class="list-order" v-for="item in 8">
					<view class="list-order-left">
						<view class="list-order-one">
							遇染民宿酒店（杭州湖滨店）
						</view>
						<view class="list-order-two">
							2021-03-20 13:24:22
						</view>
					</view>
					<view class="list-order-right">
						-¥188.00
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
			gotrade(){
				uni.navigateTo({
					url:'../trade/trade'
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
		padding: 20rpx 32rpx;
	}
	.card{
		padding: 20rpx;
		background-color: #fff;
		border-radius: 10rpx;
		.card-title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.card-title-left{
				font-size: 28rpx;
				color: #666;
				display: flex;
				align-items: center;
				image{
					width: 34rpx;
					height: 34rpx;
					margin-right: 6rpx;
				}
			}
			.card-title-right{
				font-size: 22rpx;
				color: #999;
			}
		}
		.card-one{
			color: #FF4D00;
			font-size: 24rpx;
			margin-top: 10rpx;
			text{
				font-size: 40rpx;
				font-weight: 700;
			}
		}
	}

	.list{
		padding: 20rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin-top: 20rpx;
		.list-title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 20rpx;
			.list-title-left{
				font-size: 28rpx;
				color: #333;
				font-weight: 700;
			}
			.list-title-right{
				font-size: 26rpx;
				color: #999;
				display: flex;
				align-items: center;
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	
	
		.list-order{
			display: flex;
			justify-content: space-between;
			padding: 20rpx 0;
			align-items: center;
			border-top: 1rpx solid #f5f5f5;
			.list-order-left{
				.list-order-one{
					outline-offset: 28rpx;
					color: #333;
					font-weight: 400;
					font-family: PingFangSC-Regular, PingFang SC;
					margin-bottom: 10rpx;
				}
				.list-order-two{
					font-size: 24rpx;
					color: #999;
				}
			}
			.list-order-right{
				outline-offset: 28rpx;
				color: #333;
				font-weight: 700;
			}
		}
	
	}


</style>
