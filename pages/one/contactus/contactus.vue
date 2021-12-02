<template>
	<view class="warp">
		<view class="image">
			<image src="../../../static/images/位图.png" mode=""></image>
			<view class="image-title">
				<view class="image-title-one">
					联系我们
				</view>
				<view class="image-title-two">
					
				</view>
			</view>
		</view>
		<view class="content">
			
			<view class="content-title" style="margin-bottom: 50rpx;">
				海邊邊民宿座落在花蓮市區的海濱街，距離太平洋公園只有短短200公尺，到花蓮最熱鬧的東大門夜市步行1分鐘、市區金三角商圈也只要步行15分鐘，便利的交通是您旅行花蓮渡假、洽公的最佳選擇。
			</view>
			<view class="content-title">
				讓您自在悠遊太平洋左岸的美好風光，附近海景自行車道，賞海景最佳地點，當您來到花蓮，海邊邊民宿是您最佳的歇腳站。
			</view>
			<view class="content-image">
				<image src="../../../static/images/位图.png" mode=""></image>
			</view>
		
			<view class="content-title" style="margin-bottom: 50rpx;">
				精品民宿，一个门里充满阳光的院子，崇尚分享的地方，在这里你可以和朋友分享快乐，分享假期，分享美食（入住即可分享私房菜一份）。地理位置靠近较场尾小区停车场，出门一分钟即到海边，目前有8间房，包场可接待20人，每间房都有独立洗浴，提供WIFI，洗漱用品，生活用品。	
			</view>
			<view class="content-title" style="margin-bottom: 50rpx;">
				每层楼都有约20平方的公共活动区域，一楼以书吧茶艺为主，二楼以电影电视娱乐为主，三楼大天台更可以同时容纳20人聚餐。
			</view>
			<view class="content-title">
				另有同时容纳60人用餐的特色私房菜馆，接受各种团体订餐，家庭订餐。
			</view>
			<view class="content-image">
				<image src="../../../static/images/位图.png" mode=""></image>
			</view>
		</view>
	
		<view class="footer">
			<view class="footer-one">
				<view class="">
					<u-icon name="phone" color="#FF4D00"></u-icon>	拨打电话
				</view>
				
			</view>
			<view class="footer-one">
				<view class="">
					<u-icon name="kefu-ermai" color="#FF4D00"></u-icon>	联系客服
				</view>
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
	.image{
		width: 750rpx;
		height: 400rpx;
		position: relative;
		image{
			width: 750rpx;
			height: 400rpx;
		}
		.image-title{
			position: absolute;
			top: 170rpx;
			left: 295rpx;
			.image-title-one{
				font-size: 40rpx;
				color: #fff;
				font-weight: 700;
				font-family: PingFangSC-Medium, PingFang SC;
			}
			.image-title-two{
				width: 80rpx;
				height: 4rpx;
				background: #FFFFFF;
				margin: 0 auto;
			}
		}
	}

	.content{
		padding: 20rpx 32rpx;
		margin-bottom: 120rpx;
		.content-title{
			font-family: PingFangSC-Regular, PingFang SC;
			font-size: 26rpx;
			color: #333;
		}
		.content-image{
			width: 686rpx;
			height: 360rpx;
			margin: 20rpx 0;
			image{
				width: 686rpx;
				height: 360rpx;
			}
		}
	}
	.footer{
		display: flex;
		justify-content: space-around;
		height: 100rpx;
		width: 750rpx;
		align-items: center;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		.footer-one{
			width: 332rpx;
			height: 80rpx;
			background: #FFFFFF;
			box-shadow: 0px 0px 10rpx 0px rgba(0, 0, 0, 0.1);
			border-radius: 39rpx;
			color: #FF4D00;
			line-height: 80rpx;
			text-align: center
		}
	}
	
</style>
