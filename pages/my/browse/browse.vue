<template>
	<view class="warp">
		<view class="content">
			<view class="list" v-for="item in 5">
				<view class="list-one">
					<image src="../../../static/images/在线点餐.png" mode=""></image>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						遇染民宿
					</view>
					<view class="list-two-right">
						上次访问：2021-03-14 12:55:23
					</view>
				</view>
				<view class="list-three">
					进入<image src="../../../static/images/全部@2x.png" mode=""></image>
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
		height: 100vh;
	}
	.content{
		padding: 20rpx 32rpx;
		.list{
			padding: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;
			margin-bottom: 20rpx;
			.list-one{
				image{
					width: 120rpx;
					height: 120rpx;
				}
			}
			.list-two{
				.list-two-left{
					font-size: 28rpx;
					color: #333;
				}
				.list-two-right{
					font-size: 24rpx;
					color: #999;
					margin-top: 10rpx;
				}
			}
			.list-three{
				font-size: 24rpx;
				color: #999;
				display: flex;
				align-items: center;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
	}
</style>
