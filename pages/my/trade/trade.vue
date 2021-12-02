<template>
	<view class="warp">
		<view class="title">
			<view class="title-left" @click="tradeShow=true">
				全部账单<image src="../../../static/images/立即抢购@2x.png" mode=""></image>
			</view>
			<view class="title-left" @click="timeShow=true">
				选择明细<image src="../../../static/images/立即抢购@2x.png" mode="">
			</view>
		</view>
		<u-popup v-model="tradeShow" mode="top">
			<view class="box">
				<view class="box-one" :class="{active:num==0}">
					全部账单
				</view>
				<view class="box-one">
					收入
				</view>
				<view class="box-one">
					支出
				</view>
			</view>
		</u-popup>
		<u-picker mode="time" v-model="timeShow" :params="params"></u-picker>
		
		<view class="content">
			<view class="list"  v-for="item in 3">
				<view class="list-title">
					2021年3月
				</view>
				<view class="list-order" v-for="item in 3">
					<view class="list-order-left">
						<view class="list-order-one">
							遇染民宿酒店（杭州湖滨店）
						</view>
						<view class="list-order-two">
							2021-03-20 13:24:22
						</view>
					</view>
					<view class="list-order-right">
						-¥188.00
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
				tradeShow:false,
				num:0,
				timeShow:false,
				params: {
					year: true,
					month: true,
				},
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
	.active{
		color: #FF4D00 !important;
		border: 2rpx solid rgba(255, 77, 0, 0.4) !important;
	}
	.box{
		height: 136rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.box-one{
			width: 214rpx;
			height: 56rpx;
			text-align: center;
			line-height: 56rpx;
			border-radius: 4rpx;
			border: 2rpx solid #ccc;
			font-size: 26rpx;
			color: #333;
		}
	}
	.title{
		display: flex;
		justify-content: space-around;
		height: 84rpx;
		align-items: center;
		background-color: #fff;
		.title-left{
			font-size: 28rpx;
			color: #333;
			display: flex;
			align-items: center;
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
		
	}
	.content{
		padding:0 20rpx 0 32rpx;
	}
	.list{
		// background-color: #fff;
		border-radius: 10rpx;
		.list-title{
			font-size: 28rpx;
			color: #333;
			font-weight: 700;
			margin: 40rpx 0 20rpx;
			
		}
	
	
		.list-order{
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			align-items: center;
			border-top: 1rpx solid #f5f5f5;
			.list-order-left{
				.list-order-one{
					outline-offset: 28rpx;
					color: #333;
					font-weight: 400;
					font-family: PingFangSC-Regular, PingFang SC;
					margin-bottom: 10rpx;
				}
				.list-order-two{
					font-size: 24rpx;
					color: #999;
				}
			}
			.list-order-right{
				outline-offset: 28rpx;
				color: #333;
				font-weight: 700;
			}
		}
	
	}
</style>
