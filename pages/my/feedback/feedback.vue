<template>
	<view class="warp">
		<view class="content">
			<view class="box">
				<view class="box-title">
					请选择反馈的问题类型（必选）
				</view>
				<view class="box-one">
					<view class="box-one-left">
						界面太卡，展示不出来
					</view>
					<view class="box-one-right">
						<u-checkbox v-model="checked" shape="circle"></u-checkbox>
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						文字太小，看不清楚商品信息
					</view>
					<view class="box-one-right">
						<u-checkbox v-model="checked" shape="circle"></u-checkbox>
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						下错门店，找不到购买时的门店
					</view>
					<view class="box-one-right">
						<u-checkbox v-model="checked" shape="circle"></u-checkbox>
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						推荐的门店不是最近的
					</view>
					<view class="box-one-right">
						<u-checkbox v-model="checked" shape="circle"></u-checkbox>
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						商品数量少，没有想要的商品
					</view>
					<view class="box-one-right">
						<u-checkbox v-model="checked" shape="circle"></u-checkbox>
					</view>
				</view>
				<view class="box-one">
					<view class="box-one-left">
						其他
					</view>
					<view class="box-one-right">
						<u-checkbox v-model="checked" shape="circle"></u-checkbox>
					</view>
				</view>
			</view>
			
			<view class="box">
				<view class="box-title">
					请具体描述功能（必填）
				</view>
				<view class="box-two">
					<textarea value="" placeholder="例如：您在什么界面发现了什么bug功能，您可以具体在此描述" />
				</view>
			</view>
			
			<view class="box">
				<view class="box-title">
					上传凭证（非必填）
				</view>
				<view class="box-two">
					<u-upload :action="action" :file-list="fileList" ></u-upload>
				</view>
			</view>
			
			<view class="box" style="margin-bottom: 150rpx;">
				<view class="box-title">
					联系方式（必填）
				</view>
				<view class="box-two">
					<input type="text" value="" placeholder="请输入11位手机号码" />
				</view>
				<view class="box-three">
					为了更快捷的解决问题，我们可能会联系您
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer-one" @click="goexchanges()">
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
	}
	.content{
		padding: 20rpx 32rpx;
		.box{
			background-color: #fff;
			padding: 20rpx;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.box-title{
				font-weight: 700;
				font-size: 28rpx;
				color: #333;
				padding-bottom: 20rpx;
			}
			.box-one{
				padding: 20rpx 0;
				border-top: 1rpx solid #f5f5f5;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.box-one-left{
					font-size: 28rpx;
					color: #666;
				}
				.box-one-right{
					
				}
			}
			.box-two{
				textarea{
					background-color: #f5f5f5;
				}
				input{
					background-color: #f5f5f5;
					height: 80rpx;
					text-indent: 1em;
				}
			}
			.box-three{
				font-size: 22rpx;
				margin-top: 20rpx;
				color: #999;
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
			background-color: #FF4D00;
			border-radius: 40rpx;
			color: #fff;
		}
	}
</style>
