<template>
	<view class="category-list">
		
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item-container" v-for="(item, idx) in ownSwiper.urls" :key="idx">
				<view class="swiper-item">
					<image class="swiper-image" :src="item.picUrl" mode=""/>					
				</view>
			</swiper-item>			
		</swiper>
		
		<!-- 商品展示列表 -->
		<view class="goods-list-container" v-if="ownGoodsList">
			<view class="goods-list-title">{{ownGoodsList.title}}</view>
			<view class="goods-list-sub_title">{{ownGoodsList.sub_title}}</view>
			<view class="goods-list"  enable-flex="true">
				<view class="goods" v-for="(goods, idx) in ownGoodsList.goods" :key="idx" @click="goodsDetail(goods)">
					<image class="goods-image" :src="goods.picUrl" mode="" />
					<view class="goods-desc">{{goods.desc}}</view>
					<view class="goods-price">{{goods.price}}元</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name:"cateList",
		
		// 接收传递过来的参数
		props: ['columnId'],
		data() {
			return {
				ownSwiper: {},
				ownGoodsList: {},
			}
		},	
		mounted() {
			
		},
		computed: {
			...mapState('home', ['swipers', 'goodsList']),
			cateObj() {				
				this.ownSwiper = this.swipers.categoryList.find((category) => category.column === this.columnId);				
				this.ownGoodsList = this.goodsList.find((platform) => platform.column === this.columnId)
			}
		},
		methods: {
			goodsDetail(goods) {				
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail',
					success: (res) => {
						res.eventChannel.emit('goods-detail', goods)
					}
				})
			}
		}
	}
</script>

<style lang="stylus">
	.category-list
		.swiper
			.swiper-item-container
				
				.swiper-item
					// width 360upx
					height 400upx
					.swiper-image
						width 100%
						height 100%
		.goods-list-container
			
			.goods-list-title
				font-size 35upx
				text-align center
			.goods-list-sub_title
				font-size 30upx
				text-align center
			.goods-list
				display flex
				flex-wrap wrap
				
				// 自动调整元素周边空白
				justify-content space-around
				
				// 防止出现单一商品在最后被置中的情况，加一个伪类，要去看一下说明
				&::after
					content ""
					width 50%
				.goods
					// margin 5upx 0
					width 50%
					display inline-block
					text-align center
					height 480upx
					.goods-image
						width: 350upx
						height: 350upx
					.goods-desc
						font-size 26upx
						margin 5upx 
						text-align center
						white-space pre-wrap
						overflow hidden
						display -webkit-box
						-webkit-box-orient vertical
						webkit-line-clamp 2
					.goods-price
						font-size 28upx
						color red
						text-align center
</style>