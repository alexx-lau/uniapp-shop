<template>
	<view class="goods-detail">
		<view class="header">商品的名字</view>
		<scroll-view scroll-y="true" enable-flex="true" class="goods-scroll">
			<image :src="goodsDetail.picUrl" mode="" />
			<view class="tag">商品标签</view>
			<view class="price">￥{{goodsDetail.price}}元</view>
			<view class="desc">{{goodsDetail.desc}}</view>
		</scroll-view>
		
		<!-- 底部布局 -->
		<view class="footer">
			<view class="img">
				<image src="/static/images/customer-service.png" mode="" />
			</view>
			<view class="btn">立即购买</view>
			<view class="btn cart" @click="addToCart">加入购物车</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				goodsDetail: {}
			};
		},
		onLoad(options) {
			const eventChannel = this.getOpenerEventChannel()
			eventChannel.on('goods-detail', (data) => {
				this.goodsDetail = data
			})
		},
		methods: {
			...mapMutations('cart', ['addToCartListMutation']),
			addToCart() {	
				console.log('add to cart ...')				
				this.addToCartListMutation(this.goodsDetail)
				uni.showToast({
					title: "添加到购物车成功",
					icon: "none",
					duration: 3000,
				})
			}
		}
	}
</script>

<style lang="stylus">
	.goods-detail
		
		.header
			width 570upx
			height 90upx
			line-height 90upx
			color #fff
			background-color: purple
			margin 0 auto
			text-align center
			font-size 32upx
		.goods-scroll				
			height calc(100vh - 90upx)
			image 
				width 100%
				height 570upx
			.tag
				width 90%
				height 100upx
				line-height 100upx
				background-color #bb2c08
				margin 20upx auto
				text-align center
				color #fff
				font-size 32upx
				border-radius 6upx
			.price 
				color red
				font-size 50upx
				margin 20upx 
	
		.footer
			display flex
			flex-wrap wrap
			height 100upx
			line-height 100upx
			
			// 固定位置
			position fixed
			bottom 0
			left 0
			right 0
			border-top 1upx solid #ccc
			.img 
				flex 1
				image 				
					height 60upx
					width 60upx
					margin 20upx 40upx					
			.btn 
				flex 2
				border-left 1upx solid #ccc
				text-align center
				vertical-align middle				
				&.cart
					background-color red
					color #fff
</style>
