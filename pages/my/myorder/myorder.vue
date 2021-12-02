<template>
	<view class="warp">
		<view class="titles">
			<view class="titles-left" :class="{actives:nums==0}" @click="binds(0)">
				商品
			</view>
			<view class="titles-left" :class="{actives:nums==1}" @click="binds(1)">
				房源
			</view>
		</view>
		<!-- 商品 -->
		<view class="title" v-if="show">
			<view class="title-left" :class="{active:num==0}" @click="bind(0)">
				全部
			</view>
			<view class="title-left" :class="{active:num==1}" @click="bind(1)">
				待付款
			</view>
			<view class="title-left" :class="{active:num==2}" @click="bind(2)">
				待处理
			</view>
			<view class="title-left" :class="{active:num==3}" @click="bind(3)">
				待收货
			</view>
			<view class="title-left" :class="{active:num==4}" @click="bind(4)">
				已完成
			</view>
		</view>
		
		<!-- 房源 -->
		<view class="title" v-if="shows">
			<view class="title-left" :class="{active:num==0}" @click="bind(0)">
				全部
			</view>
			<view class="title-left" :class="{active:num==1}" @click="bind(1)">
				待付款
			</view>
			<view class="title-left" :class="{active:num==2}" @click="bind(2)">
				待处理
			</view>
			<view class="title-left" :class="{active:num==3}" @click="bind(3)">
				待入驻
			</view>
			<view class="title-left" :class="{active:num==4}" @click="bind(4)">
				已完成
			</view>
		</view>
		<!-- 商品 -->
		<view class="" v-if="show">
			<!-- 全部 -->
			<view class="content" v-if="shop1Show">
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待付款
						</view>
					</view>
					<view class="card" @tap="goshoppayment()">
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									<text>88</text>
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							取消订单
						</view>
						<view class="list-four-right">
							立即付款
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="card" @click="goshoppending()">
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					<view class="list-four"  >
						<view class="list-four-left" @click="goaftersales">
							申请售后
						</view>
						<view class="list-four-left">
							参看物流
						</view>
					</view>
				</view>
					
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待收货
						</view>
					</view>
					<view class="card" @click="goshopreceived()">
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						<view class="list-four-left">
							参看物流
						</view>
						<view class="list-four-right">
							确认收货
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已完成
						</view>
					</view>
					<view class="card" @click="goshopcomplete()">
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						<view class="list-four-left">
							参看物流
						</view>
						<view class="list-four-left">
							申请售后
						</view>
						<view class="list-four-right">
							评价
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已取消
						</view>
					</view>
					<view class="card" >
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						<view class="list-four-left">
							删除订单
						</view>
						
					</view>
				</view>
					
			</view>
			
			<!-- 待付款 -->
			<view class="content" v-if="shop2Show">
				<view class="list" v-for="item in 3">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待付款
						</view>
					</view>
					<view class="card" >
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							取消订单
						</view>
						<view class="list-four-right">
							立即付款
						</view>
					</view>
				</view>
			</view>
			<!-- 待处理 -->
			<view class="content" v-if="shop3Show">
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="card" >
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					<view class="list-four" >
						<view class="list-four-left">
							申请售后
						</view>
						<view class="list-four-left">
							参看物流
						</view>
					</view>
				</view>
			</view>
			
			<!-- 待收货 -->
			<view class="content" v-if="shop4Show">
				<view class="list" v-for="item in 3">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待收货
						</view>
					</view>
					<view class="card" >
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						<view class="list-four-left">
							参看物流
						</view>
						<view class="list-four-right">
							确认收货
						</view>
					</view>
				</view>
			</view>
			<!-- 已完成 -->
			<view class="content" v-if="show5Show">
				<view class="list" v-for="item in 3">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已完成
						</view>
					</view>
					<view class="card" >
						<view class="card-img">
							<image src="../../../static/images/house.png" mode=""></image>
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
									￥<text>88</text>.00
								</view>
								
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							参看物流
						</view>
						<view class="list-four-left" @click="goaftersales()">
							申请售后
						</view>
						<view class="list-four-right">
							评价
						</view>
					</view>
				</view>
			</view>
		</view>	
		
		<!-- 房源 -->
		<view class="" v-if="shows">
			<!-- 全部 -->
			<view class="content" v-if="shop1Show">
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待付款
						</view>
					</view>
					<view class="cards" @click="gopayment()">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					
					<view class="list-four">
						<view class="list-four-left">
							取消订单
						</view>
						<view class="list-four-right">
							立即付款
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="cards" @click="gopending()">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					<view class="list-four"  >
						<view class="list-four-left">
							申请售后
						</view>
						<view class="list-four-left">
							联系客服
						</view>
					</view>
				</view>
					
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待入住
						</view>
					</view>
					<view class="cards" @click="gocheckin()">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							申请售后
						</view>
						<view class="list-four-right">
							联系客服
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已完成
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						<view class="list-four-left">
							删除订单
						</view>
						<view class="list-four-left">
							投诉
						</view>
						<view class="list-four-right">
							评价
						</view>
					</view>
				</view>
				
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已取消
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						<view class="list-four-left">
							删除订单
						</view>
						
					</view>
				</view>
				
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已退款
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							删除订单
						</view>
						
					</view>
				</view>
					
			</view>
			<!-- 待付款 -->
			<view class="content" v-if="shop2Show">
				<view class="list" v-for="item in 3">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待付款
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							取消订单
						</view>
						<view class="list-four-right">
							立即付款
						</view>
					</view>
				</view>
			</view>
			<!-- 待处理 -->
			<view class="content" v-if="shop3Show">
				<view class="list">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待处理
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					<view class="list-four" >
						<view class="list-four-left">
							申请售后
						</view>
						<view class="list-four-left">
							联系客服
						</view>
					</view>
				</view>
			</view>
			
			<!-- 待入住 -->
			<view class="content" v-if="shop4Show">
				<view class="list" v-for="item in 3">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							待入住
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					
					<view class="list-four"  >
						<view class="list-four-left">
							申请售后
						</view>
						<view class="list-four-right">
							联系客服
						</view>
					</view>
				</view>
			</view>
			<!-- 已完成 -->
			<view class="content" v-if="show5Show">
				<view class="list" v-for="item in 3">
					<view class="list-one">
						<view class="list-one-left">
							<image src="../../../static/images/编组%202@2x(2).png" mode=""></image>xxx民宿
						</view>
						<view class="list-one-right">
							已完成
						</view>
					</view>
					<view class="cards">
						<view class="card-left">
							<image src="../../../static/images/house.png" mode=""></image>
						</view>
						<view class="card-right">
							<view class="card-right-one">
								遇染民宿酒店（杭州湖滨店）
							</view>
							<view class="card-right-two">
								温馨家庭房
							</view>
							<view class="card-right-three">
								<text>03/18入住</text>
								<text>至</text>
								<text>03/19离店</text>
								<text>1晚</text>
							</view>
							<view class="card-right-four">
								￥<text>398</text>
							</view>
						</view>
					</view>
					
					<view class="list-four" >
						
						<view class="list-four-left" @click="gocomplaint()">
							投诉
						</view>
						<view class="list-four-right">
							评价
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
				num:0,
				nums:0,
				show:true,
				shows:false,
				shop1Show:true,
				shop2Show:false,
				shop3Show:false,
				shop4Show:false,
				show5Show:false
				
			}
		},
		methods: {
			binds(index){
				if(index==0){
					this.nums=0
					this.show=true
					this.shows=false
				}else if(index==1){
					this.nums=1
					this.shows=true
					this.show=false
				}
			},
			bind(index){
				if(index==0){
					this.num=0
					this.shop1Show=true
					this.shop2Show=false
					this.shop3Show=false
					this.shop4Show=false
					this.show5Show=false
				}else if(index==1){
					this.num=1
					this.shop1Show=false
					this.shop2Show=true
					this.shop3Show=false
					this.shop4Show=false
					this.show5Show=false
				}else if(index==2){
					this.num=2
					this.shop1Show=false
					this.shop2Show=false
					this.shop3Show=true
					this.shop4Show=false
					this.show5Show=false
				}else if(index==3){
					this.num=3
					this.shop1Show=false
					this.shop2Show=false
					this.shop3Show=false
					this.shop4Show=true
					this.show5Show=false
				}else if(index==4){
					this.num=4
					this.shop1Show=false
					this.shop2Show=false
					this.shop3Show=false
					this.shop4Show=false
					this.show5Show=true
				}
			},
			// 去往商品待付款详情页面
			goshoppayment(){
				uni.navigateTo({
					url:'../shoppayment/shoppayment'
				})
			},
			// 去往商品待处理页面
			goshoppending(){
				uni.navigateTo({
					url:'../shoppending/shoppending'
				})
			},
			// 去往商品已完成页面
			goshopcomplete(){
				uni.navigateTo({
					url:'../shopcomplete/shopcomplete'
				})
			},
			// 去往商品待收货页面
			goshopreceived(){
				uni.navigateTo({
					url:'../shopreceived/shopreceived'
				})
			},
			// 去往房源待付款详情页面
			gopayment(){
				uni.navigateTo({
					url:'../payment/payment'
				})
			},
			// 去往房源待处理页面
			gopending(){
				uni.navigateTo({
					url:'../pending/pending'
				})
			},
			// 去往房源待入住页面
			gocheckin(){
				uni.navigateTo({
					url:'../checkin/checkin'
				})
			},
			// 去往投诉页面
			gocomplaint(){
				uni.navigateTo({
					url:'../complaint/complaint'
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
			},
			// 去往商品申请售后页面
			goaftersales(){
				uni.navigateTo({
					url:'../aftersales/aftersales'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		background-color: #f5f5f5;
	}
	.actives{
		color: #ff4f00 !important;
		font-weight: 700 !important;
	}
	.active{
		color: #333 !important;
		font-weight: 700 !important;
	}
	
	.titles{
		display: flex;
		justify-content: space-around;
		height: 84rpx;
		align-items: center;
		background-color: #fff;
		.titles-left{
			font-size: 28rpx;
			color: #666;
			display: flex;
			align-items: center;
			
		}
		
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
					color: #999;
					font-size: 26rpx;
				}
			}
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
			
			.cards{
				width: 686rpx;
				padding: 20rpx;
				margin-bottom: 20rpx;
				display: flex;
				background-color: #fff;
				border-radius: 10rpx;
				.card-left{
					width: 188rpx;
					height: 188rpx;
					margin-right: 20rpx;
					image{
						width: 188rpx;
						height: 188rpx;
					}
				}
				.card-right{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.card-right-one{
						font-size: 28rpx;
						color: #333;
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
					width: 144rpx;
					height: 56rpx;
					border-radius: 39rpx;
					background: linear-gradient(90deg, #FF2D19 0%, #FF6619 100%);
					text-align: center;
					line-height: 56rpx;
					color: #fff;
					margin-left: 20rpx;
				}
				
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
