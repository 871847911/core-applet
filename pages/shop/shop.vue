
<!-- 横向选项卡（水平滚动导航栏） -->
<template>
	<view class="warp">
		<view class="" >
			<u-navbar back-text="返回" :is-back="false">
				<view class="slot-wrap">
					<u-search placeholder="日照香炉生紫烟" shape="square" :show-action='fasle'  :clearabled="true" v-model="keyword"></u-search>
				</view>
			</u-navbar>
		</view>
		<!-- 顶部导航栏 -->
		<view class="horizonal-tab">
			<scroll-view scroll-x="true" scroll-with-animation class="scroll-tab">
				<block v-for="(item,index) in tabBars" :key="index">
					<view class="scroll-tab-item" :class="{'active': tabIndex==index}" 
					@tap="toggleTab(index)">
						{{item.name}}
					</view>
				</block>
			</scroll-view>
		</view>
		
		<!-- 内容区 -->
		<!-- <view class="content">
			滑块视图
			<swiper :current="tabIndex" @change="tabChange">current:当前所在滑块的index
				<swiper-item v-for="(content,index) in contentList" :key="index">
					<view class="content">{{content}}</view>
				</swiper-item>
			</swiper>
		</view> -->
		
		<view class="list">
			<view class="list-one" v-for="item in 10" @tap='golist()'>
				<view class="list-img">
					<image src="../../static/images/在线点餐.png" mode=""></image>
				</view>
				<view class="list-title">
					粮油调味
				</view>
			</view>
		</view>
		<view class="content-recommend">
			
			<view class="content-recommend-two">
				<view class="content-recommend-two-first" v-for="item in 6" @click="goshopdetails()">
					<view class="content-recommend-two-one">
						<image src="../../static/images/位图(1).png" mode=""></image>
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
		<!-- 购物车 -->
		<view class="cart" @tap="gocart()">
			<u-icon name="shopping-cart" color="#FF4D00" size="50"></u-icon>
		</view>
	</view>
</template>
 
<script>
	export default {
		data () {
			return {
				tabIndex: 0, /* 选中标签栏的序列,默认显示第一个 */
				keyword: '',
				contentList: [
					"关注",
					"推荐",
					"热点",
					"体育",
					'财经',
					'娱乐',
					"体育",
					'财经',
					'娱乐',
				],
				tabBars:[
					{
						name: '推荐',
						id: 'tuijian'
					},
					{
						name: '清洁',
						id: 'qingjie'
					},
					{
						name: '纸品',
						id: '纸品'
					},
					{
						name: '体育',
						id: 'tiyu'
					},
					{
						name: '财经',
						id: 'caijing'
					},
					{
						name: '娱乐',
						id: 'yule'
					},
					{
						name: '体育',
						id: 'tiyu'
					},
					{
						name: '财经',
						id: 'caijing'
					},
					{
						name: '娱乐',
						id: 'yule'
					}
				]
			}
		},
		methods:{
			//切换选项卡
			toggleTab (index) { 
				this.tabIndex=index;
			},
			//滑动切换swiper
			tabChange (e) { 
				console.log(e);
				this.tabIndex=e.detail.current;
			},
			// 去往购物车页面
			gocart(){
				uni.navigateTo({
					url:'./cart/cart'
				})
			},
			// 去往粮油调味
			golist(){
				uni.navigateTo({
					url:'./list/list'
				})
			},
			// 去往商品详情
			goshopdetails(){
				uni.navigateTo({
					url:'./shopdetails/shopdetails'
				})
			}
				
		}
	}
	
</script>
 
<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	.horizonal-tab{
		
	}
	.horizonal-tab .active{
		color: #FF4D00;
		font-size: 32rpx
	}
	.scroll-tab{
		white-space: nowrap; /* 必要，导航栏才能横向*/
		/* border-bottom: 1rpx solid #eee; */
		text-align: center;
		height: 84rpx;
		background-color: #fff;
		color: #333;
	}
	.scroll-tab-item{
		display: inline-block; /* 必要，导航栏才能横向*/
		margin: 20rpx 30rpx 0 30rpx;
	}
	
	.list{
		padding: 20rpx 32rpx;
		width: 750rpx;
		height: 352rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #fff;
		.list-one{
			width: 116rpx;
			height: 166rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.list-img{
				width: 102rpx;
				height: 102rpx;
				border-radius: 51rpx;
				image{
					width: 102rpx;
					height: 102rpx;
					border-radius: 51rpx;
				}
			}
			.list-title{
				font-size: 24rpx;
				color: #666;
				margin-top: 8rpx;
			}
		}
	}

	.content-recommend{
		padding: 20rpx 32rpx;
			
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
	
	.cart{
		width:80rpx;
		height: 80rpx;
		background-color: #fff;
		position: fixed;
		right: 32rpx;
		bottom: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 40rpx;
	}	
	
</style>
