<template>
	<view class="warp">
		<view class="content">
			<view class="box" v-for="item in 4">
				<view class="box-time">
					1月10日 中午11:05
				</view>
				<view class="box-title">
					<view class="box-title-one">
						您的订单已发货
					</view>
					<view class="box-title-two">
						<view class="box-title-left">
							<image src="../../../static/images/系统消息@2x.png" mode=""></image>
						</view>
						<view class="box-title-right">
							春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休闲上衣外套
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
		padding: 0 32rpx;
		.box{
			
			.box-time{
				text-align: center;
				font-size: 22rpx;
				color: #999;
				padding: 20rpx 0;
			}
			.box-title{
				padding: 20rpx;
				background-color: #fff;
				border-radius: 10rpx;
				.box-title-one{
					font-size: 28rpx;
					font-weight: 700;
					color: #333;
				}
				.box-title-two{
					display: flex;
					align-items: center;
					margin-top: 20rpx;
					.box-title-left{
						image{
							width: 120rpx;
							height: 120rpx;
						}
						margin-right: 20rpx;
					}
					.box-title-right{
						padding: 20rpx;
						background-color: #f5f5f5;
						border-radius: 10rpx;
					}
				}
			}
		}
	}
</style>
