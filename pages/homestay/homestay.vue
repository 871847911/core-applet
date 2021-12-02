<template>
	<view class="warp">
		<view class="search" @click="gosearch">
			<u-search placeholder="搜索你想要去的民宿" shape="square" :show-action='fasle' v-model="keyword" ></u-search>
		</view>
		<view class="content">
			<view class="swiper">
				<u-swiper :list="list" height="320"></u-swiper>
			</view>
			<view class="list">
				<view class="list-one" @click="godestination()">
					<view class="list-left">
						<image src="../../static/images/酒店位置@2x.png" mode=""></image>
					</view>
					<view class="list-right" >
						目的地
					</view>
				</view>
				<view class="list-one" @click="gogroup()">
					<view class="list-left">
						<image src="../../static/images/旅客评价@2x.png" mode=""></image>
					</view>
					<view class="list-right">
						团建民宿
					</view>
				</view>
				<view class="list-one" @click="goparenting()">
					<view class="list-left">
						<image src="../../static/images/联系我们@2x.png" mode=""></image>
					</view>
					<view class="list-right">
						亲子陪娃
					</view>
				</view>
				<view class="list-one" @click="godiscount()">
					<view class="list-left">
						<image src="../../static/images/我的订单@2x.png" mode=""></image>
					</view>
					<view class="list-right">
						折扣尾房
					</view>
				</view>
			</view>
			<!-- 火爆推荐 -->
			<view class="hot">
				<view class="hot-title">
					火爆推荐
				</view>
				<view class="hot-order" v-for="item in 3">
					<view class="hot-order-left">
						<image src="../../static/images/位图(1).png" mode=""></image>
					</view>
					<view class="hot-order-right">
						<view class="hot-order-top">
							似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
						</view>
						<view class="hot-order-bottom">
							<view class="hot-order-bottom-left">
								￥<text>398</text>
							</view>
							<view class="hot-order-bottom-right">
								立即抢购
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="hot">
				<view class="hot-title">
					民宿优选
				</view>
				<view class="scenicspot-list">
					<view class="scenicspot-list-image" v-for="item in 8" @click="gohousedetails">
						<image src="../../static/images/位图(1).png" mode=""></image>
						<view class="scenicspot-list-title">
							已消毒步行西湖10多分钟 近浙大 黄龙 植物…
						</view>
						<view class="scenicspot-list-money">
							￥<text>1688</text>
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
				title: 'Hello',
				list: [{
							image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
							title: '昨夜星辰昨夜风，画楼西畔桂堂东'
						},
						{
							image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
							title: '身无彩凤双飞翼，心有灵犀一点通'
						},
						{
							image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
							title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
						}
					],
			}
		},
		onLoad() {

		},
		methods: {
			// 去往搜索页面
			gosearch(){
				uni.navigateTo({
					url:'search/search'
				})
			},
			// 去往目的地页面
			godestination(){
				uni.navigateTo({
					url:'./destination/destination'
				})
			},
			// 去往团建民宿
			gogroup(){
				uni.navigateTo({
					url:'./group/group'
				})
			},
			// 去往亲子页面
			goparenting(){
				uni.navigateTo({
					url:'./parenting/parenting'
				})
			},
			// 去往折扣尾房页面
			godiscount(){
				uni.navigateTo({
					url:'./discount/discount'
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.warp{
		background-color: #f5f5f5;
	}
	.search{
		padding:0 32rpx ;
		background-color: #fff;
		height: 88rpx;
	}
	.content {
		padding: 20rpx 32rpx;
		.swiper{
			background-color: #fff;
		}
		.list{
			width: 686rpx;
			height: 154rpx;
			background-color: #fff;
			padding: 20rpx 54rpx;
			display: flex;
			justify-content: space-between;
			margin: 20rpx 0;
			border-radius: 10rpx;
			.list-one{
				display: flex;
				flex-direction: column;
				.list-left{
					width: 80rpx;
					height: 80rpx;
					image{
						width: 80rpx;
						height: 80rpx;
					}
				}
				.list-right{
					font-size: 24rpx;
					color: #666;
				}
			}
		}
		// 火爆推荐
		.hot{
			.hot-title{
				font-size: 32rpx;
				color: #333;
				margin: 20rpx 0;
				font-weight: 700;
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
					.hot-order-bottom{
						display: flex;
						justify-content: space-between;
						.hot-order-bottom-left{
							color: #FF2D19;
							font-size: 24rpx;
							text{
								font-size: 32rpx;
								font-weight: 700;
							}
						}
						.hot-order-bottom-right{
							width: 144rpx;
							height: 56rpx;
							background: #FF4D00;
							border-radius: 4rpx;
							color: #fff;
							line-height: 56rpx;
							text-align: center;
						}
					}
				}
			}
		
			.scenicspot-list{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.scenicspot-list-image{
					width: 332rpx;
					background-color: #fff;
					margin-bottom: 20rpx;
					border-radius: 10rpx;
					image{
						width: 332rpx;
						height: 280rpx;
					}
					.scenicspot-list-title{
						padding: 20rpx;
						font-size: 28rpx;
						color: #333;
					}
					.scenicspot-list-money{
						color: #FF2D19;
						font-size: 26rpx;
						padding: 0 0 20rpx 20rpx;
						text{
							font-size: 32rpx;
							font-weight: 700;
						}
					}
				}
				
			}
		}
	
	}
	
	
</style>
