<template>
	<view class="warp">
		<view class="name">
			<input type="text" value="李嘉欣" />
			<view class="right">
				3/10
			</view>
		</view>
		<button type="default">确认</button>
		
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
		height: 100vh;
		padding-top: 20rpx;
	}
	.name{
		background-color: #fff;
		width: 686rpx;
		height: 80rpx;
		margin: 0rpx auto 40rpx;
		display: flex;
		align-items: center;
		padding: 20px;
		justify-content: space-between;
		input{
			// background-color: red;
		}
		.right{
			font-size: 22rpx;
			color: #999;
		}
	}
	button{
		width: 686rpx;
		height: 80rpx;
		background: linear-gradient(270deg, #3DCCCC 0%, #00BBCC 100%);
		border-radius: 39px;
		color: #fff;
		font-size: 28rpx;
		border: none;
	}
</style>
