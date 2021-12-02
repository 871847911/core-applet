<template>
	<view class="warp">
		<view class="center">
			<view class="card">
				<view class="card-title">
					<view class="card-title-one">
						<image src="../../../static/images/转发%20-%20生成海报@2x.png" mode=""></image>
					</view>
					<view class="card-title-two">
						综合评分
					</view>
					<view class="card-title-three">
						<u-rate :count="count" v-model="value" active-color="#FFAA00" size="40"></u-rate>
					</view>
					<view class="card-title-four">
						非常好
					</view>
				</view>
				<view class="card-one">
					<textarea value="" placeholder="从多个角度评价宝贝，可以帮助更多的小伙伴哦～" />
				</view>
				<view class="">
					<u-upload :action="action" :file-list="fileList" ></u-upload>
				</view>
				<view class="">
						<u-checkbox v-model="checked" shape="circle">匿名评价</u-checkbox>
				</view>
			</view>
			
			
			<view class="box">
				<view class="box-title">
					物流服务评价
				</view>
				<view class="box-center">
					<view class="box-left">
						房间干净
					</view>
					<view class="box-right">
						<u-rate :count="count" v-model="value" active-color="#FFAA00" size="40"></u-rate>
					</view>
				</view>
				<view class="box-center">
					<view class="box-left">
						性价比高
					</view>
					<view class="box-right">
						<u-rate :count="count" v-model="value" active-color="#FFAA00" size="40"></u-rate>
					</view>
				</view>
				<view class="box-center" style="border-bottom: none;">
					<view class="box-left">
						服务态度
					</view>
					<view class="box-right" >
						<u-rate :count="count" v-model="value" active-color="#FFAA00" size="40"></u-rate>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer-one" >
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 5,
				value: 5,
				checked: false,
				
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
	.center{
		padding: 20rpx 32rpx;
		height: 100vh;
		margin-bottom: 150rpx;
		.card{
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			.card-title{
				display: flex;
				align-items: center;
				padding-bottom: 10rpx;
				border-bottom: 1rpx solid #f5f5f5;
				.card-title-one{
					image{
						width: 80rpx;
						height: 80rpx;
					}
					margin-right: 20rpx;
				}
				.card-title-two{
					font-size: 28rpx;
					color: #333;
					font-weight: 700;
					margin-right: 20rpx;
				}
				.card-title-three{
					margin-right: 20rpx;
				}
				.card-title-four{
					font-size: 22rpx;
					color: #999;
				}
			}
		
			.card-one{
				margin-top: 20rpx;
			}
		
		}
	
		.box{
			padding: 20rpx;
			background-color: #fff;
			margin-top: 20rpx;
			border-radius: 10rpx;
			.box-title{
				font-size: 28rpx;
				color: #333;
				font-weight: 700;
			}
			.box-center{
				display: flex;
				align-items: center;
				padding: 20rpx;
				border-bottom: 1rpx solid #f5f5f5;
				.box-left{
					font-size: 28rpx;
					color: #333;
					margin-right: 20rpx;
				}
				.box-right{
					
				}
			}
		}
	
	
	}
	.footer{
		height: 100rpx;
		width: 750rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.footer-one{
			height: 80rpx;
			width: 686rpx;
			line-height: 80rpx;
			text-align: center;
			color: #fff;
			
			background: linear-gradient(90deg, #FF2D19 0%, #FF6619 100%);
			border-radius: 40rpx;
		}
	}
</style>
