<template>
	<!-- 分类导航页 -->
	<view class="category">
		
		
		<!-- 搜索按钮 -->
		<view class="header">
			<view class="search">
				搜索
			</view>
			
		</view>
		
		<!-- 主展示区 -->
		<view class="main-area">
			
			<!-- 左边部分 -->
			<view class="left-area">
				<scroll-view class="left-nav-scroll" scroll-y="true" enable-flex="true">
					
					<view class="left-nav-item" :class="{active: item.categoryName === currentCategoryName}"  v-for="(item, idx) in categoryData" :key="idx" @click="getCategoryItem(item.categoryName)">
						{{item.categoryName}}
					</view>					
				</scroll-view>
			</view>
			<!-- 右半部分 -->
			<view class="right-area">
				<image class="right-image" :src="currentCategory.headerImage" mode="" />
				<scroll-view class="right-nav-scroll" scroll-y="true" enable-flex="true">
					<view class="right-nav-item-list">
						<view class="right-nav-item" v-for="(item, idx) in currentCategory.goodsList" :key="idx">
							<image class="right-nav-item-image" :src="item.picUrl" mode="" />
							<view class="right-nav-item-desc">{{item.desc}}</view>
						</view>
					</view>
					
					
				</scroll-view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		data() {
			return {
				currentCategory: {},
				currentCategoryName: '家庭清洁',
			};
		},
		mounted() {
			
			this.getCategoryDataActions()
		},
		computed: {
			...mapState('category', ['categoryData']),
			// 计算属性会生成与函数名相同的属性，可以直接调用
			categoryObj() {
				return this.currentCategory = this.categoryData[0]
			},
			
			
		},
		methods: {
			getCategoryItem(name) {
				this.currentCategoryName = name;
				this.currentCategory = this.categoryData.find((category) => category.categoryName === name)
			},
			
			// 映射actions中定义的方法为本地方法
			...mapActions('category', ['getCategoryDataActions'])
		}
	}
</script>

<style lang="stylus">
	.category		
		.header
			padding 20upx 0
			.search
				width 90%
				height 60upx
				line-height 60upx
				border 2upx solid #ccc
				background-color: #ccc
				// 边框圆角
				border-radius 4upx
				margin 0 auto				
				font-size 26upx
				text-align center
		.main-area
			display flex
			
			
			// 为适应所有屏幕高度，采用动态计算高度
			// 第一个参数为将屏幕分成的份数，这里时100份
			// 第二个可选参数为需要减掉的高度，这里指.header部分的高度(20upx + 20upx + 60upx)
			height calc(100vh - 102upx)
			border-top 2upx solid #ccc
			.left-area
				width 20%
				height 100%				
				border-right 2upx solid #ccc
				
				// 滚动条必须要设置高度，否则滚动会出问题
				.left-nav-scroll	
					
					height 100%
					.left-nav-item
						position relative
						height 60upx
						line-height 60upx
						font-size 26upx
						text-align center
						justify-content space-around
						&.active::before
							content ""
							width 2upx
							height 60upx
							position absolute
							left 5upx
							top 5upx
							background-color red
			.right-area
				width 80%				
				text-align center	
				height 100%			
				.right-image
					width 90%
					display block
					height 300upx
					margin 20upx auto
				.right-nav-scroll
					height calc(100vh - 102upx - 320upx)					
					.right-nav-item-list	
							display flex
							flex-wrap wrap							
						.right-nav-item
							width 33.33%								
							height 300upx							
							margin 20upx 0							
							.right-nav-item-image
								width 140upx
								height 180upx
							.right-nav-item-desc
								font-size 26upx
								text-align center
								
</style>
