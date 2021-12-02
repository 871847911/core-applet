<template>
	<view class="warp">
		<view class="scenicspot">
			
			<view class="scenicspot-list">
				<view class="scenicspot-list-image" v-for="item in 8" @click="gohousedetails">
					<image src="../../../static/images/位图(1).png" mode=""></image>
					<view class="scenicspot-list-title">
						已消毒步行西湖10多分钟 近浙大 黄龙 植物…
					</view>
					<view class="scenicspot-list-money">
						￥<text>1688</text>
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
			gohousedetails(){
				uni.navigateTo({
					url:"../housedetails/housedetails"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		padding: 20rpx 32rpx;
		background-color: #f5f5f5;
	}
	.scenicspot{
		
		.scenicspot-list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.scenicspot-list-image{
				width: 332rpx;
				background-color: #fff;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
				image{
					width: 332rpx;
					height: 280rpx;
				}
				.scenicspot-list-title{
					padding: 20rpx;
					font-size: 28rpx;
					color: #333;
				}
				.scenicspot-list-money{
					color: #FF2D19;
					font-size: 26rpx;
					padding: 0 0 20rpx 20rpx;
					text{
						font-size: 32rpx;
						font-weight: 700;
					}
				}
			}
			
		}
	}
</style>
