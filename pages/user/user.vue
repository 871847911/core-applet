<template>
	<view class="warp">
		<u-navbar back-text="我的" border-bottom="false" back-icon-color="#fff" :background="background" back-icon-name='none' :border-bottom='false'></u-navbar>			
		</u-navbar>
		<view class="card-bgc">
			
			<view class="content">
				<view class="login" v-if="isLogin">
					<view class="card-one">
						<view class="card-img">
							<image src="../../static/images/未登录／用户头像@2x.png" mode=""></image>
						</view>
						<view class="card-title">
							<view class="card-title-one" @click="login()">
								点击登录/注册
							</view>
							<view class="card-title-two">
								
							</view>
						</view>
					</view>
				</view>
				<view class="login" v-else>
					<view class="card-one">
						<view class="card-img">
							<image :src="wxUserInfo.avatarUrl" mode=""></image>
						</view>
						<view class="card-title">
							<view class="card-title-one">
								{{wxUserInfo.nickName}}
							</view>
							<view class="card-title-two">
								<text>李倩</text> | <text>负责人</text>
							</view>
						</view>
					</view>
					<view class="card-two" @click="goinformation()">
						编辑
					</view>
				</view>
				<view class="card" >
					
					<view class="card-two">
						<view class="card-two-one" @tap="goremaining()">
							<view class="card-two-two">
								500.00
							</view>
							<view class="card-two-three">
								金米粒
							</view>
						</view>
						<view class="card-two-one" @tap="gointegral()">
							<view class="card-two-two">
								500.00
							</view>
							<view class="card-two-three">
								平台房费
							</view>
						</view>
						<view class="card-two-one" @tap="gocoupon()">
							<view class="card-two-two">
								5000.00
							</view>
							<view class="card-two-three">
								保证金
							</view>
						</view>
						<view class="card-two-one" @tap="gocoupon()">
							<view class="card-two-two">
								<image src="../../static/images/编组备份@2x(2).png" mode=""></image>
							</view>
							<view class="card-two-three">
								我的钱包
							</view>
						</view>
					</view>
					
				</view>
				
				
			
				<!-- 我的订单 -->
				<view class="order">
					
					<view class="order-list">
						<view class="order-list-one">
							<view class="order-list-one-top">
								<image src="../../static/images/编组备份@2x(2).png" mode=""></image>
							</view>
							<view class="order-list-one-bottom">
								我的预约
							</view>
						</view>
						<view class="order-list-one">
							<view class="order-list-one-top">
								<image src="../../static/images/编组备份@2x(2).png" mode=""></image>
							</view>
							<view class="order-list-one-bottom">
								囤货/屯卷
							</view>
						</view>
						<view class="order-list-one" @click="goevaluation()">
							<view class="order-list-one-top">
								<image src="../../static/images/编组备份@2x(2).png" mode=""></image>
							</view>
							<view class="order-list-one-bottom">
								我的民宿
							</view>
						</view>
						<view class="order-list-one">
							<view class="order-list-one-top">
								<image src="../../static/images/编组备份@2x(2).png" mode=""></image>
							</view>
							<view class="order-list-one-bottom">
								我的供应
							</view>
						</view>
						<view class="order-list-one" @click="gomyorder()">
							<view class="order-list-one-top">
								<image src="../../static/images/编组备份@2x(2).png" mode=""></image>
							</view>
							<view class="order-list-one-bottom">
								全部订单
							</view>
						</view>
						
					</view>
				</view>
				
				<view class="list-one" @tap="goaddress()">
					<view class="list-one-left">
						地址管理
						
					</view>
					<view class="list-one-right">
						<image src="../../static/images/全部.png" mode=""></image>
					</view>
				</view>
				<view class="list-one" @tap="goaddress()">
					<view class="list-one-left">
						管理日志
						
					</view>
					<view class="list-one-right">
						<image src="../../static/images/全部.png" mode=""></image>
					</view>
				</view>
				<view class="list-one" @tap="goaddress()">
					<view class="list-one-left">
						快捷回复
						
					</view>
					<view class="list-one-right">
						<image src="../../static/images/全部.png" mode=""></image>
					</view>
				</view>
				<view class="list-one" @tap="goaddress()">
					<view class="list-one-left">
						商品收藏
						
					</view>
					<view class="list-one-right">
						<image src="../../static/images/全部.png" mode=""></image>
					</view>
				</view>
				<view class="list-one" @tap="goaddress()">
					<view class="list-one-left">
						消息提醒
						
					</view>
					<view class="list-one-right">
						<image src="../../static/images/全部.png" mode=""></image>
					</view>
				</view>
				<view class="list-one" @tap="goaddress()">
					<view class="list-one-left">
						系统版本
						
					</view>
					<view class="list-one-right">
						<image src="../../static/images/全部.png" mode=""></image>
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
				isLogin:true,
				background: {
					backgroundColor: '#00BBCC',
					// 导航栏背景图
					// background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
					// 还可以设置背景图size属性
					// backgroundSize: 'cover',
					
					// 渐变色
					
					// backgroundImage: 'linear-gradient(180deg, #3DCCCC 0%, #00BBCC 100%)'
				},
				wxUserInfo:{},  //存储用户信息
			}
		},
		methods: {
			goremaining(){
				uni.navigateTo({
					url:'../my/remain/remain'
				})
			},
			// 跳转积分页面
			gointegral(){
				uni.navigateTo({
					url:'../my/integral/integral'
				})
			},
			// 跳转优惠券
			gocoupon(){
				uni.navigateTo({
					url:'../my/coupon/coupon'
				})
			},
			// 跳转收藏
			gocollection(){
				uni.navigateTo({
					url:'../my/collection/collection'
				})
			},
			// 跳转地址
			goaddress(){
				uni.navigateTo({
					url:'../my/address/address'
				})
			},
			// 跳转我要加盟
			gojoin(){
				uni.navigateTo({
					url:'../my/join/join'
				})
			},
			// 跳转浏览商品页面
			gobrowse(){
				uni.navigateTo({
					url:'../my/browse/browse'
				})
			},
			// 跳转设置
			gosetting(){
				uni.navigateTo({
					url:'../my/setting/setting'
				})
			},
			// 跳转消息页面
			gonews(){
				uni.navigateTo({
					url:'../my/news/news'
				})
			},
			// 跳转我的订单页面
			gomyorder(){
				uni.navigateTo({
					url:'../my/myorder/myorder'
				})
			},
			// 跳转评价中心页面
			goevaluation(){
				uni.navigateTo({
					url:'../my/evaluation/evaluation'
				})
			},
			// 跳转账号与安全页面
			goinformation(){
				uni.navigateTo({
					url:'../my/information/information'
				})
			},
			// 点击登陆
			login(){
				let that=this
				 wx.getUserProfile({
					desc: "获取你的昵称、头像、地区及性别",
					success: res => {
						that.isLogin=false
						console.log(res)
						that.wxUserInfo = res.userInfo;
						console.log(that.wxUserInfo)
					}
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f7f7f7;
		height: 100vh;
	}
	u-navbar{
		color: #fff;
	}
.card-bgc{
	width: 750rpx;
	height: 236rpx;
	background-color:#00BBCC ;
	
	// background: linear-gradient(180deg, #3DCCCC 0%, #00BBCC 100%);		
	// background-image:linear-gradient(135deg, #FF8000 0%, #FF4D00 100%);
	border-radius: 0 0 30% 30%;
}
.content{
	padding: 40rpx 36rpx 0;
	.login{
		margin-bottom: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.card-two{
			font-size: 28rpx;
			
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
		}
		.card-one{
			display: flex;
			.card-img{
				width: 100rpx;
				background-color: #999;
				height: 100rpx;
				border-radius: 50rpx;
				margin-right: 20rpx;
				image{
					width: 100rpx;
					height: 100rpx;
					border-radius: 50rpx;
				}
			}
			.card-title{
				display: flex;
				flex-direction: column;
				justify-content: center;
				.card-title-one{
					font-size: 34rpx;
					color: #fff;
					font-weight: 700;
					margin-bottom: 10rpx;
					font-family: PingFangSC-Medium, PingFang SC;
				}
				.card-title-two{
					font-size: 24rpx;
					color: #fff;
				}
			}
		}
	}
	.card{
		width: 686rpx;
		height: 122rpx;
		background-color: #fff;
		border-radius: 10rpx;
		
		
		
		.card-two{
			display: flex;
			justify-content: space-between;
			padding: 30rpx 20rpx 0;
			.card-two-one{
				display: flex;
				flex-direction: column;
				align-items: center;
				.card-two-two{
					margin-bottom: 10rpx;
					font-size: 32rpx;
					height: 40rpx;
					color: #333;
					font-weight: 700;
					font-family: PingFangSC-Medium, PingFang SC;
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
				.card-two-three{
					font-size: 20rpx;
					
					color: #999;
					font-family: PingFangSC-Regular, PingFang SC;
				}
			}
			
		}
		.card-image{
			width: 48rpx;
			height: 48rpx;
			position: absolute;
			right: 20rpx;
			top: 20rpx;
			image{
				width: 48rpx;
				height: 48rpx;
			}
		}
	}
	
	.order{
		padding: 20rpx;
		background-color: #fff;
		margin: 20rpx 0;
		
		.order-list{
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-top: 20rpx;
			.order-list-one{
				display: flex;
				flex-direction: column;
				align-items: center;
				.order-list-one-top{
					image{
						width: 44rpx;
						height: 40rpx;
					}
				}
				.order-list-one-bottom{
					font-size: 20rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
				}
			}
		}
	}
	
	.list-one{
		background-color: #fff;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		margin-bottom: 20rpx;
		.list-one-left{
			display: flex;
			align-items: center;
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
		.list-one-right{
			width: 40rpx;
			height: 40rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	

}
</style>
