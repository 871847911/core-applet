<template>
	<view class="warp">
		<view class="search" @tap="gosearch()">
			<u-search placeholder="搜索你想要去的民宿" shape="square" :show-action='fasle'  v-model="keyword" ></u-search>
		</view>
		<view class="date">
			
			
			<view class="date-two">
				<view class="date-two-one">
					综合
				</view>
				<view class="date-two-two">
					销量
				</view>
				<view class="date-two-three">
					价格
				</view>
				<view class="date-two-two">
					新品
				</view>
				<view class="date-two-three" @click="bind()">
					图片切换
				</view>
			</view>
		</view>
		<view class="content">
			
			<view class="" v-if="show">
				
				<view class="hot-order" v-for="item in 6">
					<view class="hot-order-left">
						<image src="../../../static/images/位图(1).png" mode=""></image>
					</view>
					<view class="hot-order-right">
						<view class="hot-order-top">
							似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
						</view>
						<view class="hot-order-center">
							￥<text>398</text>
						</view>
						<view class="hot-order-bottom">
							1000+条评论
						</view>
					</view>
				</view>
			</view>
			<view class="content-recommend-two" v-else>
				<view class="content-recommend-two-first" v-for="(item,index) in 6" :key='index'>
					<view class="content-recommend-two-one">
						<image src="../../../static/images/位图(1).png" mode=""></image>
					</view>
					<view class="content-recommend-two-two">
						「已消毒步行西湖10多分钟 近浙大 黄龙 植物…
					</view>
					<view class="content-recommend-two-three">
						￥<text>398</text>
					</view>
					<view class="content-recommend-two-four">
						1000+条评论
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
				show:true
			}
		},
		methods: {
			bind(){
				// this.show=false
				if(this.show==true){
					this.show=false
				}else{
					this.show=true
				}
			},
			// 去往搜索页面
			gosearch(){
				uni.navigateTo({
					url:'../../homestay/search/search'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	.search{
		padding:0 32rpx ;
		background-color: #fff;
		height: 88rpx;
		line-height: 88rpx;
	}
	.date{
		padding: 0 32rpx;
		background-color: #fff;
		
		.date-two{
			height: 78rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #666;
			font-size: 26rpx;
			.date-two-one{
				font-size: 26rpx;
				color: #FF4D00;
			}
			.date-two-two{
				font-size: 26rpx;
			}
			.date-two-three{
				font-size: 26rpx;
			}
		}
	}
	.content{
		padding: 20rpx 32rpx;
		.content-one{
			display: flex;
			justify-content: space-between;
			margin: 20rpx 0;
			.content-one-left{
				font-size: 32rpx;
				color: #333;
				font-weight: 700;
				font-family: PingFangSC-Medium, PingFang SC;
			}
			.content-one-right{
				
			}
		}
		.hot-order{
			display: flex;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.hot-order-left{
				width: 220rpx;
				height: 220rpx;
				image{
					width: 220rpx;
					height: 220rpx;
				}
			}
			.hot-order-right{
				padding: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.hot-order-top{
					font-size: 28rpx;
					color: #333;
				}
				.hot-order-center{
					color: #FF2D19;
					font-size: 28rpx;
					text{
						font-size: 32rpx;
						font-weight: 700;
					}
				}
				.hot-order-bottom{
					font-size: 22rpx;
					color: #999;
				}
			}
		}
		.content-two{
			display: flex;
			flex-wrap:wrap;
			.content-two-one{
				font-size: 28rpx;
				color: #666;
				font-family: PingFangSC-Regular, PingFang SC;
				padding:10rpx 20rpx;
				background-color: #fff;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
			}
		}
		.content-recommend-two{
			display: flex;
			width: 686rpx;
			flex-wrap: wrap;
			justify-content: space-between;
			.content-recommend-two-first{
				width: 332rpx;
				// height: 458rpx;
				// margin-right: 20rpx;
				background-color: #fff;
				position: relative;
				margin-bottom: 30rpx;
				.content-recommend-two-one{
					width: 332rpx;
					height: 280rpx;
					image{
						width: 332rpx;
						height: 280rpx;
					}
				}
				.content-recommend-two-two{
					font-size: 28rpx;
					color: #333;
					margin: 20rpx 0 10rpx;
					padding:  0 15rpx;
				}
				.content-recommend-two-three{
					font-size: 24rpx;
					color: #FF2D19;
					padding:  0 20rpx;
					text{
						font-size: 32rpx;
						font-weight: 700;
					}
				}
				.content-recommend-two-four{
					padding:  0 20rpx 20rpx;
					font-size: 22rpx;
					color: #999;
				}
					
			}
		}
	}
</style>
