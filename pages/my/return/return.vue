<template>
	<view class="warp">
		<view class="content">
			<view class="card" @tap="goshoppayment()">
				<view class="card-img">
					<image src="../../../static/images/house.png" mode=""></image>
				</view>
				<view class="card-right">
					<view class="card-right-one">
						春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
					</view>
					<view class="card-right-two">
						<view class="card-right-two-left">
							白色XL
						</view>
						<view class="card-right-two-right">
							*1
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
			<view class="title" style="border-top: 1rpx solid #f5f5f5;">
				<view class="title-left">
					申请原因
				</view>
				<view class="title-right" style="color: #FF2D19;
				font-weight: 700;">
					￥88.00
				</view>
			</view>
			<view class="box">
				<view class="box-title">
					请具体描述原因（必填）
				</view>
				<view class="box-one">
					<textarea value="" placeholder="" />
				</view>
				<u-upload :action="action" :file-list="fileList" ></u-upload>
			</view>
			
			
		</view>
		<view class="footer">
			<view class="footer-one" @click="goprogress()">
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
			goprogress(){
				uni.navigateTo({
					url:'../progress/progress'
				})
			}
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
		.card{
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: 20rpx;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.card-radio{
				
			}
			.card-img{
				width: 180rpx;
				height: 180rpx;
				margin-right: 20rpx;
				image{
					width: 180rpx;
					height: 180rpx;
				}
			}
			.card-right{
				display: flex;
				flex-direction: column;
				height: 180rpx;
				
				.card-right-one{
					font-size: 28rpx;
					color: #333;
					font-family: PingFangSC-Regular, PingFang SC;
					margin-bottom: 5rpx;
				}
				.card-right-two{
					font-size: 24rpx;
					color: #999;
					display: flex;
					justify-content: space-between;
					.card-right-two-left{
						
					}
					.card-right-two-right{
						
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
				color: #999;
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
