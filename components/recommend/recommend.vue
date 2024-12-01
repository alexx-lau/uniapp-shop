<template>
	<view class="recommend">
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item  v-for="(item, idx) in swipers.recommend" :key="idx">
				<view class="swiper-item">
					<image :src="item.picUrl" mode=""/>
				</view>
			</swiper-item>
			
		</swiper>
		
		<!-- 三个固定项 -->
		<view class="policy-list">
			<view class="policy-item" v-for="(item, idx) in policyDescList" :key="idx">
				<image :src="item.icon" mode=""/>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- 10个导航图标 -->
		<view class="nav-list" enable-flex="true">
			<view class="nav-item" v-for="(item, idx) in navList" :key="idx">
				<image :src="item.icon" mode="" />
				<view>{{item.desc}}</view>
			</view>
		</view>
		<!-- 分类区 -->
		<view class="category-list">
			<view class="category-item" v-for="(item, idx) in categoryExList" :key="idx">
				<image :src="item.titlePicUrl" mode="" class="category-item-image"/>
				<scroll-view scroll-x="true" enable-flex="true" class="category-scroll">
					<view class="category-scroll-item" v-for="(cItem, cIdx) in item.items" :key="cIdx">
						<image class="category-scroll-item-image" :src="cItem.picUrl" mode="" />
						<view class="category-scroll-item-desc">{{cItem.desc}}</view>
					</view>
				</scroll-view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		name:"recommend",
		data() {
			return {
				
			};
		},
		computed: {
			...mapState('home', ['policyDescList', 'navList', 'categoryExList', 'swipers']),
		},
	}
</script>

<style lang="stylus">
	.recommend
		.swiper
			height 350upx
			image
				width 100%
				height 350upx
		.policy-list
			display flex
			
			margin 10upx 0
			.policy-item
			// 设置flex平行布局为均等分配
				flex 1
				text-align center
				image
					width 40upx
					height 40upx
					vertical-align middle
				text
					font-size: 26upx
		.nav-list
			display flex
			
			// flex布局设置进行换行，在uniapp中无效
			flex-wrap wrap
			
			// flex布局设置进行换行，uniapp中可以使用
			// white-space pre-wrap
			
			margin 20upx 0
			.nav-item
				// 每行5个项目
				width 20%
				text-align center
				margin 5upx 0
				image 
					width 100upx
					height 100upx
					vertical-align middle
				view
					font-size 26upx
					text-align center
					margin 5upx 0
		.category-list
			.category-item	
				margin 10upx 0
				.category-item-image
					width 100%
					height 370upx
				.category-scroll
					display flex
					white-space nowrap
					
					// 滑块一定要设置高度，否则会撑满全屏
					height 300upx
					
					.category-scroll-item						
						height 300upx
						width 200upx
						display inline-block
						
						margin 5upx
						.category-scroll-item-image
							width 150upx
							height 150upx
							background-color: #f5f5f5
						.category-scroll-item-desc
							font-size 26upx
							
							// 达到宽度后换行							
							white-space: pre-wrap
							
							// 超出部分隐藏，并使用...替代
							overflow: hidden						
							// text-overflow: "123"
							display: -webkit-box
							
							// 内容垂直布局
							-webkit-box-orient: vertical
							
							// 最大展示行数
							-webkit-line-clamp 2
							
							
					
</style>