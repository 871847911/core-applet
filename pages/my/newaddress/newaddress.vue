<template>
	<view class="warp">
		<view class="content">
			<u-form :model="form" ref="uForm" label-width='180'>
					<view class="one">
						<u-form-item label="收货人"><u-input v-model="form.name" /></u-form-item>
						<u-form-item label="手机号码"><u-input v-model="form.intro" /></u-form-item>
						<u-form-item label="所在地区"><u-input v-model="form.sex" /></u-form-item>
						<u-form-item label="详细地址"><u-input v-model="form.sex"  /></u-form-item>
					</view>
					<view class="two">
						<u-form-item label="设为默认地址"><u-switch slot="right" v-model="switchVal"></u-switch></u-form-item>
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
				form: {
					name: '',
					intro: '',
					sex: ''
				},	
				radio: '',
				switchVal: false

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
		/* background-color: #FFF; */
		.one{
			 background-color: #FFF;
			 padding: 20rpx;
			 border-radius: 10rpx;
		}
		.two{
			background-color: #FFF;
			margin: 20rpx 0;
			padding:0 20rpx;
			border-radius: 10rpx;
		}
	}
	.footer{
		height: 100rpx;
		width: 750rpx;
		background-color: #fff;
		position: fixed;
		bottom: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.footer-one{
			height: 80rpx;
			width: 686rpx;
			line-height: 80rpx;
			text-align: center;
			color: #fff;
			background: linear-gradient(270deg, #3DCCCC 0%, #00BBCC 100%);
			border-radius: 40rpx;
		}
	}
</style>
