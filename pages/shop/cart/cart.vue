<template>
	<view class="warp">
		<view class="address">
				<view class="address-icon">
					<image src="../../../static/images/距离@2x.png" mode=""></image>
				</view>
				<view class="address-title" @click="editShow = true;">
					浙江省 杭州市 拱墅区 广宇万科公园里10…
				</view>
			
			
			<view class="address-btn" v-if="btnShow" @click="btnShow=false" >
				编辑
			</view>
			<view class="address-btn" v-else @click="btnShow=true">
				取消
			</view>
		</view>
		<view class="content">
			<view class="card" v-for="(item,index) in list" :key='index'>
				<view class="card-radio">
					<u-checkbox-group @change="checkboxGroupChange">
								<u-checkbox 
									@change="checkboxChange(index)" 
									v-model="item.checked" 
									shape="circle"
								></u-checkbox>
							</u-checkbox-group>
					<!-- <u-checkbox v-model="checked" shape="circle" @change="checkboxChange(index)" ></u-checkbox> -->
				</view>
				<view class="card-img">
					<image :src="item.img" mode=""></image>
				</view>
				<view class="card-right">
					<view class="card-right-one">
						{{item.name}}
					</view>
					<view class="card-right-two">
						<view class="card-right-two-left">
							白色{{item.model}}
						</view>
						<view class="card-right-two-right">
							*1
						</view>
					</view>
					<view class="card-right-three">
						<view class="card-right-three-left">
							￥<text>{{item.price}}</text>
						</view>
						<view class="card-right-three-right">
							<u-number-box v-model="item.num" @change="valChange"></u-number-box>
						</view>
					</view>
				</view>
			</view>
			<view class="content-recommend-title">
				为您推荐
			</view>
			<view class="content-recommend-two">
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
		<view class="footer" v-if="btnShow" >
			<view class="footer-left">
				￥<text>{{total}}</text>
			</view>
			<view class="footer-one">
				明细<image src="../../../static/images/立即抢购@2x.png" mode=""></image>
			</view>
			<view class="footer-right" @tap="goresults()">
				提交订单
			</view>
		</view>
		
		<view class="footer" v-else >
			<view class="">
				<u-checkbox v-model="checked" shape="circle" @change="checkboxAll" >全选</u-checkbox>
			</view>
			<view class="footer-btn">
				删除
			</view>
		</view>
		
	
		<u-popup v-model="editShow" height="800" mode="bottom" closeable='true'>
			<view class="box">
				<view class="box-title">
					配送至
				</view>
				<view class="box-content" v-for="item in 3">
					<view class="">
						<u-checkbox v-model="checked" shape="circle" @change="checkboxChange" ></u-checkbox>
					</view>
					<view class="box-right">
						<view class="box-right-one">
							广宇万科公园里10号楼1单元9楼901室
						</view>
						<view class="box-right-two">
							浙江省 杭州市 拱墅区
						</view>
					</view>
				</view>
			</view>
		</u-popup>
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				checked:false,
				editShow:false,
				btnShow:true,
				footerShow:true,
				list:[
					{
						img:'../../../static/images/house.png',
						name:'春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…',
						model:'XL',
						price:'88',
						checked:false,
						id:1,
						num:3
					},
					{
						img:'../../../static/images/立即抢购@2x.png',
						name:'春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…',
						model:'XL',
						price:'188',
						checked:false,
						id:2,
						num:4
					},
					{
						img:'../../../static/images/house.png',
						name:'春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…',
						model:'XL',
						price:'288',
						checked:false,
						id:3,
						num:5
					},
				]
			}
		},
		computed:{
			total(){
				let total=0
				this.list.forEach(item=>{
					if(item.checked==true){
						total+=item.num*item.price
					}
				})
				return total
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			

			checkboxChange(e) {
				console.log(e);
			},
			checkboxGroupChange(e){
				console.log(e)
			},
			// 全选
			checkboxAll(){
				
				this.list.forEach(val => {
					if(this.checked==false){
						val.checked = true;
					}else{
						val.checked = false;
					}
					
				})
			}
				
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		
	}
	.address{
		width: 750rpx;
		height: 88rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		padding: 0 32rpx;
		.address-icon{
			width: 36rpx;
			height: 36rpx;
			image{
				width: 36rpx;
				height: 36rpx;
			}
		}
		.address-title{
			color: #333;
			margin: 0 80rpx 0 10rpx;
		}
		.address-btn{
			color: #666;
		}
			
	}


	.content{
		padding: 20rpx 32rpx;
		background-color: #f5f5f5;
		margin-bottom: 120rpx;
		.card{
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: 20rpx;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.card-radio{
				
			}
			.card-img{
				width: 180rpx;
				height: 180rpx;
				margin-right: 20rpx;
				image{
					width: 180rpx;
					height: 180rpx;
				}
			}
			.card-right{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 180rpx;
				.card-right-one{
					font-size: 28rpx;
					color: #333;
				}
				.card-right-two{
					font-size: 24rpx;
					color: #999;
					display: flex;
					justify-content: space-between;
					.card-right-two-left{
						
					}
					.card-right-two-right{
						
					}
				}
					
				.card-right-three{
					display: flex;
					justify-content: space-between;
					.card-right-three-left{
						color: #FF2D19;
						font-size: 24rpx;
						text{
							font-size: 32rpx;
							font-weight: 700;
						}
					}
					.card-right-three-right{
						
					}
				}
			}
		}
	
		.content-recommend-title{
			font-size: 32rpx;
			color: #333;
			font-weight: 700;
			padding: 20rpx 0;
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

	.footer{
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		position: fixed !important;
		bottom: 0rpx;
		display: flex;
		padding: 0 32rpx;
		justify-content: space-between;
		align-items: center;
		.footer-left{
			color: #FF2D19;
			font-size: 24rpx;
			text{
				font-size: 40rpx;
				font-weight: 700;
			}
		}
		.footer-one{
			font-size: 22rpx;
			color: #999;
			display: flex;
			margin-left: -250rpx;
			image{
				width: 32rpx;
				height: 32rpx;
			}
		}
		.footer-right{
			width: 216rpx;
			height: 80rpx;
			background: #FF4D00;
			border-radius: 39rpx;
			line-height: 80rpx;
			text-align: center;
			color: #fff;
			font-size: 28rpx;
		}
		.footer-btn{
			width: 216rpx;
			height: 80rpx;
			border-radius: 39rpx;
			border: 2rpx solid #999999;
			line-height: 80rpx;
			text-align: center;
		}
	}

	// 弹出层
	.box{
		border-radius: 10rpx 10rpx 0 0;
		padding: 0 32rpx;
		.box-title{
			margin: 20rpx 0 40rpx;
			font-size: 32rpx;
			color: #333;
			text-align: center;
			font-weight: 700;
		}
		.box-content{
			display: flex;
			align-items: center;
			.box-right{
				color: #333;
				margin-bottom: 20rpx;
				.box-right-one{
					font-size: 28rpx;
					font-size: 500;
					margin-bottom: 5rpx;
				}
				.box-right-two{
					font-size: 24rpx;
				}
			}
		}
	}




</style>
