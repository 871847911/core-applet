<template>
	<view class="warp">
		<view class="title">
			<view class="title-left" :class="{active:num==0}" @click="bind(0)">
				全部
			</view>
			<view class="title-left" :class="{active:num==1}" @click="bind(1)">
				可开发票
			</view>
			<view class="title-left" :class="{active:num==2}" @click="bind(2)">
				申请记录
			</view>
			<view class="title-left" :class="{active:num==3}" @click="bind(3)">
				抬头管理
			</view>
		</view>
		<view class="content" v-if="shop1Show">
			<view class="list">
				<view class="list-one">
					<view class="list-one-left">
						<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
					</view>
					<view class="list-one-right">
						未开票
					</view>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						<image src="../../../static/images/在线点餐.png" mode=""></image>
					</view>
					<view class="list-two-right">
						似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
					</view>
				</view>
				
				<view class="list-four" style="color: #FF2D19;border: 2rpx solid #FF2D19;" @tap="goinformation()">
					申请开票
				</view>
			</view>
			
			<view class="list">
				<view class="list-one">
					<view class="list-one-left">
						<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
					</view>
					<view class="list-one-right">
						开票中
					</view>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						<image src="../../../static/images/在线点餐.png" mode=""></image>
					</view>
					<view class="list-two-right">
						似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
					</view>
				</view>
				<view class="list-three">
					<view class="list-three-left">
						电子普通发票-个人
					</view>
					<view class="list-three-right">
						抬头名称：个人
					</view>
					
				</view>
				<view class="list-four">
					查看详情
				</view>
			</view>
			<view class="list">
				<view class="list-one">
					<view class="list-one-left">
						<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
					</view>
					<view class="list-one-right">
						已开票
					</view>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						<image src="../../../static/images/在线点餐.png" mode=""></image>
					</view>
					<view class="list-two-right">
						似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
					</view>
				</view>
				<view class="list-three">
					<view class="list-three-left">
						电子普通发票-个人
					</view>
					<view class="list-three-right">
						抬头名称：个人
					</view>
					
				</view>
				<view class="list-four" @tap="goinvoicedetails()">
					查看详情
				</view>
			</view>
			
			<view class="list">
				<view class="list-one">
					<view class="list-one-left">
						<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
					</view>
					<view class="list-one-right">
						已撤销
					</view>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						<image src="../../../static/images/在线点餐.png" mode=""></image>
					</view>
					<view class="list-two-right">
						似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
					</view>
				</view>
				<view class="list-three">
					<view class="list-three-left">
						电子普通发票-个人
					</view>
					<view class="list-three-right">
						抬头名称：个人
					</view>
					
				</view>
				<view class="list-four">
					查看详情
				</view>
			</view>
		</view>
	
		<view class="content" v-if="shop2Show">
			<view class="list">
				<view class="list-one">
					<view class="list-one-left">
						<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
					</view>
					<view class="list-one-right">
						未开票
					</view>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						<image src="../../../static/images/在线点餐.png" mode=""></image>
					</view>
					<view class="list-two-right">
						似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
					</view>
				</view>
				
				<view class="list-four" style="color: #FF2D19;border: 2rpx solid #FF2D19;">
					申请开票
				</view>
			</view>
		</view>
	
		<view class="content" v-if="shop3Show">
			<view class="list">
				<view class="list-one">
					<view class="list-one-left">
						<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
					</view>
					<view class="list-one-right">
						开票中
					</view>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						<image src="../../../static/images/在线点餐.png" mode=""></image>
					</view>
					<view class="list-two-right">
						似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
					</view>
				</view>
				<view class="list-three">
					<view class="list-three-left">
						电子普通发票-个人
					</view>
					<view class="list-three-right">
						抬头名称：个人
					</view>
					
				</view>
				<view class="list-four">
					查看详情
				</view>
			</view>
			<view class="list">
				<view class="list-one">
					<view class="list-one-left">
						<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
					</view>
					<view class="list-one-right">
						已开票
					</view>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						<image src="../../../static/images/在线点餐.png" mode=""></image>
					</view>
					<view class="list-two-right">
						似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
					</view>
				</view>
				<view class="list-three">
					<view class="list-three-left">
						电子普通发票-个人
					</view>
					<view class="list-three-right">
						抬头名称：个人
					</view>
					
				</view>
				<view class="list-four">
					查看详情
				</view>
			</view>
			<view class="list">
				<view class="list-one">
					<view class="list-one-left">
						<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
					</view>
					<view class="list-one-right">
						已撤销
					</view>
				</view>
				<view class="list-two">
					<view class="list-two-left">
						<image src="../../../static/images/在线点餐.png" mode=""></image>
					</view>
					<view class="list-two-right">
						似水中餐厅｜4588元奢华8~10人度假套餐！【阿丽拉乌镇】
					</view>
				</view>
				<view class="list-three">
					<view class="list-three-left">
						电子普通发票-个人
					</view>
					<view class="list-three-right">
						抬头名称：个人
					</view>
					
				</view>
				<view class="list-four">
					查看详情
				</view>
			</view>
		</view>
	
		<view class="content" v-if="shop4Show">
			<view class="box">
				<view class="box-left">
					普通发票-个人
				</view>
				<view class="box-right">
					<view class="box-right-one">
						杜凉柠
					</view>
					<view class="box-right-two" @tap="goeditinvoice()">
						<image src="../../../static/images/编组%202@2x(1).png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="box">
				<view class="box-left">
					普通发票-企业
				</view>
				<view class="box-right">
					<view class="box-right-one">
						杭州银秘信息科技有限公司
					</view>
					<view class="box-right-two">
						<image src="../../../static/images/编组%202@2x(1).png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
			<view class="footer" v-if="show">
				<view class="footer-one" >
					保存
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0,
				show:false,
				shop1Show:true,
				shop2Show:false,
				shop3Show:false,
				shop4Show:false,
				
			}
		},
		methods: {
			bind(index){
				if(index==0){
					this.num=0
					this.shop1Show=true
					this.shop2Show=false
					this.shop3Show=false
					this.shop4Show=false
					this.show=false
				}else if(index==1){
					this.num=1
					this.shop1Show=false
					this.shop2Show=true
					this.shop3Show=false
					this.shop4Show=false
					this.show=false
				}else if(index==2){
					this.num=2
					this.shop1Show=false
					this.shop2Show=false
					this.shop3Show=true
					this.shop4Show=false
					this.show=false
				}else if(index==3){
					this.num=3
					this.shop1Show=false
					this.shop2Show=false
					this.shop3Show=false
					this.shop4Show=true
					this.show=true
				}
			},
			// 去往发票信息页面
			goinformation(){
				uni.navigateTo({
					url:'../incoiceinformation/incoiceinformation'
				})
			},
			// 去往发票详情
			goinvoicedetails(){
				uni.navigateTo({
					url:'../invoicedetails/invoicedetails'
				})
			},
			// 去往发票编辑
			goeditinvoice(){
				uni.navigateTo({
					url:'../editinvoice/editinvoice'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	.active{
		color: #333 !important;
		font-weight: 700 !important;
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
		padding:20rpx 32rpx;
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
					color: #333;
					display: flex;
					align-items: center;
					image{
						width: 52rpx;
						height: 52rpx;
					}
				}
				.list-one-right{
					color: #FF2D19;
					font-size: 26rpx;
				}
			}
			.list-two{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 26rpx 0 20rpx;
				.list-two-left{
					image{
						width: 120rpx;
						height: 120rpx;
					}
					margin-right: 20rpx;
				}
				.list-two-right{
					font-size: 28rpx;
					font-weight: 700;
					color: #333;
					font-family: PingFangSC-Medium, PingFang SC;
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
				width: 144rpx;
				height: 56rpx;
				border-radius: 39rpx;
				border: 2rpx solid #CCCCCC;
				text-align: center;
				line-height: 56rpx;
				margin-top: 40rpx;
				 margin-left:auto;
			}
		}
	
		.box{
			background-color: #fff;
			padding: 0 20rpx;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.box-left{
				font-size: 26rpx;
				color: #333;
				font-weight: 700;
				padding: 20rpx 0;
			}
			.box-right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 0;
				border-top: 1rpx solid #f5f5f5;
				.box-right-one{
					font-size: 28rpx;
					color: #333;
				}
				.box-right-two{
					image{
						width: 40rpx;
						height: 40rpx;
					}
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
			background-color: #FF4D00;
			border-radius: 40rpx;
		}
	}
</style>
