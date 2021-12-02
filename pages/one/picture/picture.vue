<template>
	<view class="warp">
		<view class="card">
			<view class="card-btn" @click="bind(0)" :class="{active:num==0}">
				全部 8
			</view>
			<view class="card-btn" @click="bind(1)" :class="{active:num==1}">
				客房 3
			</view>
			<view class="card-btn" @click="bind(2)" :class="{active:num==2}">
				外观 1
			</view>
			<view class="card-btn" @click="bind(3)" :class="{active:num==3}">
				餐厅 1
			</view>
			<view class="card-btn" @click="bind(4)" :class="{active:num==4}">
				公共区域 3
			</view>
		</view>
		<!-- 客房 -->
		<view class="house" v-if="houseShow">
			<view class="house-title">
				客房
			</view>
			<view class="house-img">
				<view class="house-img-one" v-for="(item,index) in houseList">
					<image :src="item.image" mode="" @click="bindImage(index)"></image>
					<view class="house-img-two">
						{{item.title}}
					</view>
				</view>
				
			</view>
		</view>
		
		<!-- 外观 -->
		<view class="house" v-if="appearanceShow">
			<view class="house-title">
				外观
			</view>
			<view class="house-img">
				<view class="house-img-one">
					<image src="../../../static/images/house.png" mode=""></image>
					<view class="house-img-two">
						外观
					</view>
				</view>
			</view>
		</view>
		
		<!-- 餐厅 -->
		<view class="house" v-if="restaurantShow">
			<view class="house-title">
				餐厅
			</view>
			<view class="house-img">
				<view class="house-img-one">
					<image src="../../../static/images/house.png" mode=""></image>
					<view class="house-img-two">
						餐厅
					</view>
				</view>
				
			</view>
		</view>
		
		<!-- 公共区域 -->
		<view class="house" v-if="publicShow">
			<view class="house-title">
				公共区域
			</view>
			<view class="house-img">
				<view class="house-img-one">
					<image src="../../../static/images/house.png" mode=""></image>
					<view class="house-img-two">
						公共区域
					</view>
				</view>
				<view class="house-img-one">
					<image src="../../../static/images/house.png" mode=""></image>
					<view class="house-img-two">
						公共区域
					</view>
				</view>
				<view class="house-img-one">
					<image src="../../../static/images/house.png" mode=""></image>
					<view class="house-img-two">
						公共区域
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
				num:0,
				houseShow:true,  //客房显示隐藏
				appearanceShow:true,  //外观显示隐藏
				restaurantShow:true,  //餐厅显示隐藏
				publicShow:true,  //公共区域显示隐藏
				
				houseList:[
					{
					image:'../../../static/images/house.png',
					title:'客房'
					},
					{
					image:'../../../static/images/house.png',
					title:'客房'
					},
					{
					image:'../../../static/images/house.png',
					title:'客房'
					},
				]
			}
		},
		methods: {
			bind(index){
				if(index==0){
					this.num=0
					this.houseShow=true
					this.appearanceShow=true
					this.restaurantShow=true
					this.publicShow=true
				}else if(index==1){
					this.num=1
					this.houseShow=true
					this.appearanceShow=false
					this.restaurantShow=false
					this.publicShow=false
				}else if(index==2){
					this.num=2
					this.houseShow=false
					this.appearanceShow=true
					this.restaurantShow=false
					this.publicShow=false
				}else if(index==3){
					this.num=3
					this.houseShow=false
					this.appearanceShow=false
					this.restaurantShow=true
					this.publicShow=false
				}else if(index==4){
					this.num=4
					this.houseShow=false
					this.appearanceShow=false
					this.restaurantShow=false
					this.publicShow=true
				}
			},
		
			bindImage(index){
				console.log(index)
				let imgs = this.houseList.map( item =>{
						//只返回图片路径
							return item.image  
						})
				// console.log(imgs)
				uni.previewImage({
					current:index,
					urls:imgs
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f7f7f7;
		padding: 20rpx 32rpx 0;
	}
	.active{
		background: rgba(255, 77, 0,0.1) !important;
		border: 1rpx solid #FF2D19;
		color: #FF4D00;
	}
	.card{
		width: 686rpx;
		height: 180rpx;
		background-color: #fff;
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;
		// margin-top: 20rpx;
		.card-btn{
			padding: 10rpx 20rpx;
			background-color: #F5F5F5;
			margin-right: 38rpx;
			margin-bottom: 20rpx;
			border-radius:40rpx;
		}
		margin-bottom: 40rpx;
	}

	.house{
		.house-title{
			font-size: 32rpx;
			font-weight: 700;
			color: #333;
			margin: 20rpx 0;
		}
		.house-img{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.house-img-one{
				position: relative;
				width: 332rpx;
				height: 332rpx;
				margin-bottom: 20rpx;
				image{
					width: 332rpx;
					height: 332rpx;
				}
			}
			.house-img-two{
				position: absolute;
				font-size: 24rpx;
				color: #fff;		
				font-family: PingFangSC-Regular, PingFang SC;
				left: 20rpx;
				bottom: 20rpx;
			}
		}
	}


</style>
