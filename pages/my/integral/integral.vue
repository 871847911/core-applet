<template>
	<view class="warp">
		<view class="content">
			<view class="card">
				<view class="card-title">
					<view class="card-title-left">
						<image src="../../../static/images/编组%202@2x%20-%20万能看图王.png" mode=""></image>积分
					</view>
					<view class="card-title-right">
						仅用于兑换部分商品
					</view>
				</view>
				<view class="card-one">
					0
				</view>
			</view>
			<view class="content-recommend-title">
				兑换中心
			</view>
			<view class="content-recommend-two">
				<view class="content-recommend-two-first" v-for="(item,index) in 6" :key='index' @click="gomydetails()">
					<view class="content-recommend-two-one">
						<image src="../../../static/images/位图(1).png" mode=""></image>
					</view>
					<view class="content-recommend-two-two">
						「已消毒步行西湖10多分钟 近浙大 黄龙 植物…
					</view>
					<view class="content-recommend-two-three">
						1688积分
					</view>
					<view class="content-recommend-two-four">
						已兑换20.2万件
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
			},
			// 去往积分详情页面
			gomydetails(){
				uni.navigateTo({
					url:'../mydetails/mydetails'
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
			color: #333;
			font-size: 40rpx;
			margin-top: 10rpx;
			font-weight: 700;
		}
	}

	.content-recommend-title{
		font-size: 32rpx;
		color: #333;
		font-weight: 700;
		padding: 20rpx 0;
		font-family: PingFangSC-Medium, PingFang SC;
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
				color: #FF2D19;
				padding:  0 20rpx;
				font-size: 32rpx;
				font-weight: 700;
				font-family: PingFangSC-Medium, PingFang SC;
			}
			.content-recommend-two-four{
				padding:  0 20rpx 20rpx;
				font-size: 22rpx;
				color: #999;
			}
				
		}
	}
		
</style>
