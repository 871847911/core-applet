<template>
	<view class="warp">
		<view class="title">
			<view class="title-left" :class="{active:num==0}" @click="bind(0)">
				待使用
			</view>
			<view class="title-left" :class="{active:num==1}" @click="bind(1)">
				已过期/失效
			</view>
		</view>
		<view class="content">
			<view class="coupon-list" v-for="item in 3" v-if="shopShow">
				<view class="coupon-list-left">
					￥<text>30</text>
				</view>
				<view class="coupon-list-center">
					<view class="coupon-list-center-top">
						无门槛抵扣券
					</view>
					<view class="coupon-list-center-bottom">
						2021.03.20-2021.03.26
					</view>
				</view>
				<view class="coupon-list-right">
					<image src="../../../static/images/house.png" mode=""></image>
				</view>
			</view>
			
			<view class="coupon-list" v-for="item in 2" v-if="shopsShow">
				<view class="coupon-list-left">
					￥<text>40</text>
				</view>
				<view class="coupon-list-center">
					<view class="coupon-list-center-top">
						无门槛抵扣券
					</view>
					<view class="coupon-list-center-bottom">
						2021.03.20-2021.03.26
					</view>
				</view>
				<view class="coupon-list-right">
					<image src="../../../static/images/house.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0,
				shopShow:true,
				shopsShow:false,
				params: {
					year: true,
					month: true,
				},
			}
		},
		methods: {
			bind(index){
				if(index==0){
					this.num=0
					this.shopShow=true
					this.shopsShow=false
				}else if(index==1){
					this.num=1
					this.shopShow=false
					this.shopsShow=true
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
		color: #333 !important;
	}
	
	.title{
		display: flex;
		justify-content: space-around;
		height: 84rpx;
		align-items: center;
		background-color: #fff;
		.title-left{
			font-size: 28rpx;
			color: #666;
			display: flex;
			align-items: center;
			
		}
		
	}
	.content{
		padding:20rpx;
		.coupon-list{
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;
			margin-bottom: 20rpx;
			.coupon-list-left{
				font-size: 48rpx;
				font-weight: 700;
				color: #FF2D19;
				margin-left: 30rpx;
				text{
					font-size: 60rpx;
				}
			}
			.coupon-list-center{
				font-size: 28rpx;
				.coupon-list-center-top{
					color: #333;
				}
				.coupon-list-center-bottom{
					color: #999;
				}
			}
			.coupon-list-right{
				width: 164rpx;
				height: 164rpx;
				image{
					width: 164rpx;
					height: 164rpx;
				}
			}
		}
	}
	
</style>
