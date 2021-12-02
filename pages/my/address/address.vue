<template>
	<view class="warp">
		<view class="content">
			<view class="list" v-for="item in 3" @click="goedit()">
				<view class="list-left">
					<view class="list-left-one">
						<image src="../../../static/images/编组@2x%20-%20万能看图王.png" mode="" style="margin-right: 5rpx;"></image >	浙江省 杭州市 拱墅区
					</view>
					<view class="list-left-two">
						广宇万科公园里10号楼1单元9楼901室
					</view>
					<view class="list-left-three">
						<text style="margin-right: 40rpx;">李欣悦</text>
						<text>156****9988</text>
					</view>
				</view>
				<view class="list-right">
					<image src="../../../static/images/全部@2x.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer-one" @click="gonewaddress()">
				新建收货地址
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
			gonewaddress(){
				uni.navigateTo({
					url:'../newaddress/newaddress'
				})
			},
			// 编辑地址
			goedit(){
				uni.navigateTo({
					url:'../editaddress/editaddress'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	.content{
		padding: 20rpx 32rpx;
		.list{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			.list-left{
				.list-left-one{
					font-size: 24rpx;
					color: #999;
					display: flex;
					align-items: center;
					image{
						width: 48rpx;
						height: 34rpx;
					}
				}
				.list-left-two{
					font-size: 28rpx;
					color: #333;
					font-weight: 700;
					margin: 10rpx 0;
				}
					
				.list-left-three{
					font-size: 24rpx;
					color: #999;
				}
			}
			.list-right{
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
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
