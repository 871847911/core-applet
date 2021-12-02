<template>
	<view class="warp">
		<view class="one">
			<image src="../../../static/images/形状结合@2x.png" mode=""></image>
		</view>
		<view class="two">
			<image src="../../../static/images/矩形备份%205@2x.png" mode=""></image>
		</view>
		<view class="three">
			<image src="../../../static/images/211.png" mode=""></image>
		</view>
		<view class="content">
			<u-form :model="form" ref="uForm" label-width='180'>
					<view class="one">
						<u-form-item label="姓名"><u-input v-model="form.name" /></u-form-item>
						<u-form-item label="手机号码"><u-input v-model="form.intro" /></u-form-item>
						<view class="title">
							情况说明(必填)
						</view>
						<textarea value="" placeholder="请说明您的情况，便于后续联系您" />
					</view>
					
				</u-form>
		</view>
		<view class="footer">
			<view class="footer-one" >
				保存
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
		background-color: #B31312;
		height: 100vh;
	}
	.one{
		margin: 0 40rpx;
		image{
			width: 670rpx;
			height: 180rpx;
		}
	}
	.two{
		margin: 40rpx 72rpx 0;
		image{
			width: 606rpx;
			height: 120rpx;
		}
	}
	.three{
		margin: 0 40rpx;
		image{
			width: 670rpx;
			height: 112rpx;
		}
	}
	.content{
		padding: 20rpx 32rpx;
		/* background-color: #FFF; */
		.one{
			 background-color: #FFF;
			 padding:0 20rpx;
			 border-radius: 10rpx;
		}
		.title{
			font-size: 28rpx;
			color: #333;
		}
		textarea{
			width: 526rpx;
			height: 220rpx;
			background-color: #f5f5f5;
			padding: 20rpx;
		}
		
	}
	.footer{
		
		.footer-one{
			width: 606rpx;
			height: 80rpx;
			background: #BF1D1D;
			border-radius: 10rpx;
			
			line-height: 80rpx;
			text-align: center;
			color: rgba($color: #fff, $alpha: 0.6);
			margin-left: 72rpx;
		}
	}
</style>
