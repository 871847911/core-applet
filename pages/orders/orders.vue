<template>
	<view class="warp">
		<u-navbar back-text="店铺订单管理"  back-icon-name='none' :border-bottom='false'></u-navbar>
		<view class="slot-wrap">
			<u-search placeholder="搜索你想要的商品" shape="square" :show-action='fasle' v-model="keyword" >
				
			</u-search>
		</view>
		<view class="">
			<view class="tab">
				<view class="tab-one" v-for="(item,index) in onelist" @click="toggleTabone(index)">
					<view class="tab-title" :class="{'active': num==index}">
						{{item.name}}
					</view>
					<view class="line" :class="{actives:num==index}">
						
					</view>
				</view>
				
			</view>
			<view class="horizonal-tab" v-if="tabShow">
				<scroll-view scroll-x="true" scroll-with-animation class="scroll-tab">
					<block v-for="(item,index) in twolist" :key="index">
						<view class="scroll-tab-item" :class="{'active': tabIndex==index}" 
						@tap="toggleTabtwo(index)">
							{{item.name}}
						</view>
					</block>
				</scroll-view>
			</view>
		</view>
		<view class="content">
			<!-- 全部订单 -->
			<view class="one">
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							该订单将在<text>14:35:25</text>后关闭
						</view>
						<view class="list-one-right">
							待付款
						</view>
					</view>
					<view class="cards" @click="gopayment()">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店 <text>预订单</text>
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view>
					
					<view class="list-four">
						<!-- <view class="list-four-left">
							取消订单
						</view> -->
						<view class="list-four-right">
							立即付款
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13至2021/03/14  1天1晚
						</view>
						<view class="list-one-right">
							待使用
						</view>
					</view>
					<view class="cards" @click="gopending()">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view>
					<view class="list-four"  >
						<view class="list-four-left">
							申请退款
						</view>
						<view class="list-four-right">
							我要屯卷
						</view>
					</view>
				</view>
					
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13至2021/03/14  1天1晚
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="cards" @click="gocheckin()">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							退款
						</view>
						<view class="list-four-left">
							一键预定
						</view>
						<view class="list-four-right">
							更换房型
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13至2021/03/14  1天1晚
						</view>
						<view class="list-one-right">
							取消/退款中
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						<view class="list-four-left">
							联系用户
						</view>
						
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13至2021/03/14  1天1晚
						</view>
						<view class="list-one-right">
							已入住
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						<view class="list-four-left">
							删除订单
						</view>
						<view class="list-four-right">
							确认离店
						</view>
						
					</view>
				</view>
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13至2021/03/14  1天1晚
						</view>
						<view class="list-one-right">
							已离店
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							提醒评价
						</view>
						
					</view>
				</view>
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13至2021/03/14  1天1晚
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							拒单
						</view>
						<view class="list-four-left">
							确认有房
						</view>
					</view>
				</view>
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13至2021/03/14  1天1晚
						</view>
						<view class="list-one-right">
							待入住
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							确认入住
						</view>
						
					</view>
				</view>
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13 14:30:49
						</view>
						<view class="list-one-right">
							待付款
						</view>
					</view>
					<view class="card" @tap="goshoppayment()">
						<view class="card-img">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
							</view>
							<view class="card-right-two">
								<view class="card-right-two-left">
									白色XL
								</view>
								<view class="card-right-two-right">
									*1
								</view>
							</view>
							<view class="card-right-three">
								<view class="card-right-three-left">
									<text>398</text>金米粒
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four">
						<!-- <view class="list-four-left">
							取消订单
						</view> -->
						<view class="list-four-right">
							提醒付款
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13 14:30:49
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="card" @tap="goshoppayment()">
						<view class="card-img">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
							</view>
							<view class="card-right-two">
								<view class="card-right-two-left">
									白色XL
								</view>
								<view class="card-right-two-right">
									*1
								</view>
							</view>
							<view class="card-right-three">
								<view class="card-right-three-left">
									<text>398</text>金米粒
								</view>
								
							</view>
						</view>
					</view>
					<view class="list-four"  >
						<view class="list-four-left">
							参看物流
						</view>
						<view class="list-four-right">
							一件预定
						</view>
					</view>
				</view>
					
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13 14:30:49
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="card" @tap="goshoppayment()">
						<view class="card-img">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
							</view>
							<view class="card-right-two">
								<view class="card-right-two-left">
									白色XL
								</view>
								<view class="card-right-two-right">
									*1
								</view>
							</view>
							<view class="card-right-three">
								<view class="card-right-three-left">
									<text>398</text>金米粒
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							查看物流
						</view>
						
						<view class="list-four-right">
							立即发货
						</view>
					</view>
				</view>
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13 14:30:49
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="card" @tap="goshoppayment()">
						<view class="card-img">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
							</view>
							<view class="card-right-two">
								<view class="card-right-two-left">
									白色XL
								</view>
								<view class="card-right-two-right">
									*1
								</view>
							</view>
							<view class="card-right-three">
								<view class="card-right-three-left">
									<text>398</text>金米粒
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							查看物流
						</view>
						
						<view class="list-four-right">
							立即发货
						</view>
					</view>
				</view>
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13 14:30:49
						</view>
						<view class="list-one-right">
							待收货
						</view>
					</view>
					<view class="card" @tap="goshoppayment()">
						<view class="card-img">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
							</view>
							<view class="card-right-two">
								<view class="card-right-two-left">
									白色XL
								</view>
								<view class="card-right-two-right">
									*1
								</view>
							</view>
							<view class="card-right-three">
								<view class="card-right-three-left">
									<text>398</text>金米粒
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							查看售后
						</view>
						<view class="list-four-left">
							查看物流
						</view>
						<view class="list-four-right">
							提醒收获
						</view>
					</view>
				</view>
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13 14:30:49
						</view>
						<view class="list-one-right">
							已完成
						</view>
					</view>
					<view class="card" @tap="goshoppayment()">
						<view class="card-img">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
							</view>
							<view class="card-right-two">
								<view class="card-right-two-left">
									白色XL
								</view>
								<view class="card-right-two-right">
									*1
								</view>
							</view>
							<view class="card-right-three">
								<view class="card-right-three-left">
									<text>398</text>金米粒
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							查看售后
						</view>
						<view class="list-four-left">
							查看物流
						</view>
						<view class="list-four-right">
							提醒评价
						</view>
					</view>
				</view>
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							2021/03/13 14:30:49
						</view>
						<view class="list-one-right">
							取消/退款中
						</view>
					</view>
					<!-- <view class="cards" @click="gocheckin()">
						<view class="card-left">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							
							<view class="card-right-four">
								<text>398</text>金米粒
							</view>
						</view>
					</view> -->
					<view class="card" @tap="goshoppayment()">
						<view class="card-img">
							<image src="../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								春季男士新款棒球服男韩版潮流百搭宽松帅气夹克男装休…
							</view>
							<view class="card-right-two">
								<view class="card-right-two-left">
									白色XL
								</view>
								<view class="card-right-two-right">
									*1
								</view>
							</view>
							<view class="card-right-three">
								<view class="card-right-three-left">
									<text>398</text>金米粒
								</view>
								
							</view>
						</view>
					</view>
					
					<!-- <view class="list-four"  >
						<view class="list-four-left">
							查看售后
						</view>
						<view class="list-four-left">
							查看物流
						</view>
						<view class="list-four-right">
							提醒评价
						</view>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0,  //一级选项
				tabIndex:0,  //二级选项
				tabShow:false,  //二级菜单是否显示
				onelist:[
					{
						name:'全部订单'
					},
					{
						name:'房源采购'
					},
					{
						name:'商品采购'
					},
					{
						name:'我的民宿'
					}
				],
				twolist:[
					{
						name: '全部类型',
						id: 'tuijian'
					},
					{
						name: '待付款',
						id: 'qingjie'
					},
					{
						name: '待使用',
						id: '纸品'
					},
					{
						name: '待入住',
						id: 'tiyu'
					},
					{
						name: '已离店',
						id: 'caijing'
					},
					{
						name: '已付款',
						id: 'yule'
					}
					
				]
			}
		},
		methods: {
			toggleTabone(index){
				this.num=index
				console.log(this.num)
				if(index==0){
					this.tabShow=false
				}else{
					this.tabShow=true
				}
			},
			toggleTabtwo (index) {
				this.tabIndex=index;
			},
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	.slot-wrap{
		padding: 0 32rpx;
		background-color: #fff;
	}
	.tab{
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		.tab-one{
			display: flex;
			flex-direction: column;
			align-items: center;
			.tab-title{
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				margin: 22rpx 0 14rpx;
			}
			.line{
				width: 80rpx;
				height: 4rpx;
				background: #fff;
			}
		}	
	}
	.horizonal-tab{
		
	}
	.active{
		color: #00BBCC !important;
		// font-size: 32rpx
	}
	.actives{
		background-color:#00BBCC !important;
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
	.content{
		padding: 20rpx 32rpx;
		// background-color: #fff;
		.one{
			.list{
				padding: 20rpx;
				display: flex;
				flex-direction: column;
				background-color: #fff;
				border-radius: 10rpx;
				margin-bottom: 20rpx;
				.list-one{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.list-one-left{
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						color: #333;
						display: flex;
						align-items: center;
						text{
							color:#FF7919 ;
						}
					}
					.list-one-right{
						color: #999;
						font-size: 26rpx;
					}
				}
				.card{
					display: flex;
					align-items: center;
					background-color: #fff;
					padding: 20rpx 0;
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
				
				.cards{
					width: 686rpx;
					margin-bottom: 20rpx;
					padding: 20rpx 0;
					display: flex;
					background-color: #fff;
					border-radius: 10rpx;
					.card-left{
						width: 136rpx;
						height: 136rpx;
						margin-right: 20rpx;
						image{
							width: 136rpx;
							height: 136rpx;
						}
					}
					.card-right{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.card-right-one{
							font-size: 28rpx;
							color: #333;
							text{
								display: inline-block;
								width: 68rpx;
								height: 32rpx;
								font-size: 20rpx;
								color: #FF7919;
								background: rgba(255, 45, 25, 0.2);
								border-radius: 4rpx;
								line-height: 32rpx;
								text-align: center;
								margin-left: 15rpx;
								
							}
						}
						.card-right-two{
							font-size: 24rpx;
							color: #999;
						}
						.card-right-three{
							font-size: 24rpx;
							color: #999;
							text{
								margin-right: 10rpx;
							}
						}
						.card-right-four{
							font-size: 24rpx;
							color: #FF2D19;
							text{
								font-size: 32rpx;
								font-weight: 700;
							}
						}
					}
				}
				
				.list-three{
					padding: 20rpx;
					background: #FAFAFA;
					.list-three-left{
						font-size: 28rpx;
						color: #333;
					}
					.list-three-right{
						font-size: 24rpx;
						color: #999;
					}
				}
				.list-four{
					display: flex;
					align-items: center;
					justify-content: flex-end;
					.list-four-left{
						width: 144rpx;
						height: 56rpx;
						border-radius: 39rpx;
						border: 2rpx solid #CCCCCC;
						text-align: center;
						line-height: 56rpx;
						margin-left: 20rpx;
					}
					.list-four-right{
						
						background: #00BBCC;
						border-radius: 28rpx;
						width: 144rpx;
						height: 56rpx;
						
						text-align: center;
						line-height: 56rpx;
						color: #fff;
						margin-left: 20rpx;
					}
					
				}
			}
		}
		
	}
</style>
