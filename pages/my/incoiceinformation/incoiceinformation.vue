<template>
	<view class="warp">
		<view class="content">
			<u-form :model="form" ref="uForm" label-width='180'>
					<view class="one">
						<u-form-item label="发票类型">
						<view class="one-title">
							普通发票
						</view>
						</u-form-item>
						<u-form-item label="抬头类型">
							<text class="one-left" :class="{active:num==0}" @click="bind(0)">个人</text>
							<text class="one-left" :class="{active:num==1}" @click="bind(1)">企业</text>
							
						</u-form-item>
						<u-form-item label="发票抬头"><u-input v-model="form.sex" placeholder="请输入发票抬头" /></u-form-item>
						<u-form-item label="单位税数" v-if="show"><u-input v-model="form.sex" placeholder="请输入单位税数" /></u-form-item>
					</view>
					<view class="two" v-if="show">
						<u-form-item label="注册地址"><u-input v-model="form.sex" placeholder="选填" /></u-form-item>
						<u-form-item label="注册电话"><u-input v-model="form.sex" placeholder="选填" /></u-form-item>
						<u-form-item label="开户银行"><u-input v-model="form.sex" placeholder="选填" /></u-form-item>
						<u-form-item label="开户账号"><u-input v-model="form.sex" placeholder="选填" /></u-form-item>
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
				num:0,
				show:false,
				form: {
					name: '',
					intro: '',
					sex: ''
				},	

			}
		},
		methods: {
			bind(index){
				if(index==0){
					this.num=0
					this.show=false
				}else if(index==1){
					this.num=1
					this.show=true
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
		height: 100vh;
	}
	.active{
		border: 2rpx solid #FF4D00 !important;
		color: #ff4d00 !important;
	}
	.content{
		padding: 20rpx 32rpx;
		/* background-color: #FFF; */
		.one{
			 background-color: #FFF;
			 padding: 20rpx;
			 border-radius: 10rpx;
			 .one-title{
				 width: 168rpx;
				 height: 52rpx;
				 background: rgba(255, 77, 0, 0.1);
				 border-radius: 30rpx;
				 border: 2rpx solid #FF4D00;
				 line-height: 52rpx;
				 text-align: center;
				 color: #ff4d00;
			 }
			 .one-left{
				 display: inline-block;
				 width: 124rpx;
				 height: 52rpx;
				 background: #F5F5F5;
				 border-radius: 30px;
				 line-height: 52rpx;
				 text-align: center;
				 margin-right: 20rpx;
			 }
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
			background-color: #FF4D00;
			border-radius: 40rpx;
		}
	}
</style>
