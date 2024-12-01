<template>
	<view class="content">
		<view class="indexContainer">
			<view class="header">
				<image class="logo" src="/static/images/logo.png" />
				<view class="search">
					<button class="iconfont icon-sousuo-xuanzhong"></button>
					<input type='text' placeholder="请输入搜索内容" placeholder-class="placeholder"/>
				</view>
				<button type="default">李四</button>				
			</view>
			 <!-- 为防止出现页面渲染时，数据还没获取到，导致对象undefined的情况，需要先判断拿到数据后再渲染节点 -->
			 <!-- 由于v-for的优先级高于v-if，所以数据判断部分应该放在父元素中进行 -->
			<scroll-view class="navScroll" scroll-x="true" enable-flex="true" v-if="categoryList">
					<view class="navItem" @click="setIndex(0)"  :class="{active: itemNum === 0}">推荐</view>
					<view class="navItem"  @click="setIndex(category.id)" :class="{active: itemNum === category.id}"  v-for="(category, idx) in categoryList" :key="category.id">{{category.role_name}}</view>
			</scroll-view>		
				
			<!-- 内容部分，包括滑动窗口及商品展示区，会在子components中去定义，这里先定义一个父组件 -->
			<scroll-view scroll-y="true" enable-flex="true">
				<!-- 引入的推荐模块 -->
				
					<recommend v-if="itemNum === 0"/>
				
					<cateList v-else :columnId="columnId"/>
				
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	
	// 常规方式调用
	// import request from '../../utils/request';
	
	// 引入vuex
	import {mapActions, mapState} from 'vuex';
	
	// 引入组件
	import recommend from '../../components/recommend/recommend.vue'
	import cateList from '../../components/cateList/cateList.vue'
	export default {
		
		// 注册组件
		components: {
			recommend,
			cateList
		},
		data() {
			return {
				
				// 常规方式调用
				// categoryList: [],
				itemNum: 0, 
				columnId: -1,
			}
		},
		computed: {
			
			// 数据映射
			// 1、方法1：使用mapState进行映射（推荐）
			// ...mapState('home', ['categoryList']),
			
			// 2、方法2：箭头函数方式调用
			...mapState({
				categoryList: (state) => state.home.categoryList,
			})
		},
		onLoad() {
			
			// 常规方式调用
			// this.getCategory();
			// console.log(this.$store.state.home.test)
			
			// 触发获取分类信息的action
			// 1、第一种：dispatch
			// this.$store.dispatch('home/getCategoryListActions')
			// 2、第二种：使用mapActions
			this.getCategoryListActions();
		},		
		methods: {
			// 2、第二种：使用mapaction
			// 映射actions中定义的方法为本地方法
			...mapActions('home', ['getCategoryListActions']),
			
			setIndex(id) {				
				this.itemNum = id;
				if (0 === id) {
					return;
				}
				this.columnId = id;
			}, 
			async getCategory() {
				const res = await request('role/search', {id: 1, id_handle: 1}, 'POST');
				// console.log(res);
				
				this.categoryList = JSON.parse(res.data)
				
				console.log('category list', this.categoryList)
				// uni.request({
				// 	url:"http://192.168.88.20:8430/role/search",
				// 	data:{
				// 		id: 1,
				// 		id_handle: 1
				// 	},
				// 	header: {
				// 		'content-type': 'application/json'
				// 	},
				// 	method: 'POST',
				// 	success(res) {
				// 		console.log(res.data);
				// 		const resp = JSON.parse(res.data.data);
				// 		console.log(this.categoryList)
				// 		this.categoryList = resp;
				// 	},
				// 	fail(res) {
				// 		console.log(res);
				// 	}
				// })
			}
		}
	}
</script>

<style lang="stylus">
	.indexContainer {
		.header {
			display: flex
			flex-direction: row
			padding: 10upx 5upx
			.logo {
				width: 140upx
				height: 40upx
				margin-top: 10upx
			}
			.search {
				position: relative
				width: 420upx
				height: 60upx
				background: #f5f5f5
				button {
					width: 60upx
					height:60upx
					position: absolute
					left: 4upx
					font-size: 40upx
				}
				input {					
					width: 360upx
					height: 60upx
					
					margin-left: 60upx
					// margin-top: -45upx
					.placeholder {
						font-size: 30upx
						color: skyblue
					}
				}
			}
			button {
				width: 144upx
				height: 60upx
				font-size: 26upx
				padding 0 4upx
				line-height: 60upx
				text-align: center
			}
		}
		.navScroll {
			// 不换行
			white-space: nowrap;
			display: flex;
			height: 80upx;
			.navItem {
				display: inline-block;
				width: 120upx
				height: 40upx
				padding: 12upx
				font-size: 30upx
				// &表示父级引用
				&.active {
					border-bottom: 3upx solid #ccc 
					color: red
					
				}
			}
		}
	}
</style>
