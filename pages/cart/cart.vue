<template>
	<view class="cart">
		
		<view class="cart-list">
			<view class="cart-item" v-for="(item, idx) in cartList" :key="idx">
				<!-- 左边选中框 -->
				<text class="iconfont icon-gouxuan" :class="{selected: item.selected === 1}"  @click="setChecked(item.goodsId)"></text>
				
				<!-- 右边商品信息 -->
				<view class="goods-item">
					<image :src="item.picUrl" class="goods-image" mode="" />
					<view class="goods-info">
						<view class="goods-name">
							{{item.desc}}
						</view>
						<view class="goods-price">
							￥{{item.price}}元
						</view>
					</view>
				</view>
				<view class="count-ctrl">
					<text class="sub" @click="subCount(item.goodsId)">-</text>
					<text class="count">{{item.count}}</text>
					<text class="add" @click="addCount(item.goodsId)">+</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<text class="iconfont icon-gouxuan" :class="{active: isAllSelected === true}" @click="allSelected(!isAllSelected)"></text>
			<text class="selected">已选{{totalSelectedCount}}</text>
			<text class="right">
				<text class="btn">合计{{totalSelectedPrice}}</text>
				<text class="btn order">下单</text>
			</text>
		</view>
	</view>
</template>

<script>
	import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
	export default {
		data() {
			return {
			
			};
		},
		computed: {
			...mapState('cart', ['cartList']),
			...mapGetters('cart', ['isAllSelected', 'totalSelectedCount', 'totalSelectedPrice'])
		},
		mounted: {
			
		},
		methods: {
			...mapActions('cart', ['subItemCountAction', 'addItemCountAction']),
			...mapMutations('cart', ['removeItemMutation', 'setCheckedMutation', 'changeAllCheckedMutation']),
			subCount(id) {
				const currentCount = this.cartList.find(item => item.goodsId === id).count	
				
				if (currentCount > 1) {
					this.subItemCountAction(id)
				} else {
					uni.showModal({
						title: '确认是否删除',
						content: '请确认是否删除',
						cancelText: '取消删除',
						confirmText: '确认删除',
						confirmColor: 'red',
						success: (res) => {
							if (res.confirm) {
								this.removeItemMutation(id)
							}
						}
					})
				}
				
			},
			addCount(id) {				
				this.addItemCountAction(id)
			},
			setChecked(id) {
				this.setCheckedMutation(id)
				// // const total = this.cartList.length
				// // const selected = this.cartList.filter(item => item.selected === 1)
				// // console.log('total ', total, 'selected ', selected)
				// // if (total === selected.length) {
				// 	console.log('is all selected ', this.isAllSelected)
				// if (this.isAllSelected) {
				// 	this.allChecked = true
				// } else {
				// 	this.allChecked = false
				// }
			},
			allSelected(flag) {
				// this.allChecked = !this.allChecked
					
				// if (!this.isAllSelected) {					
				// 	const items = this.cartList.filter(item => item.selected === 1)			
				// 	items.forEach(item => item.selected = 0)					
				// } else {
				// 	const items = this.cartList.filter(item => item.selected === 0)
				// 	console.log('items ', items)
				// 	items.forEach(item => item.selected = 1)
				// }
				this.changeAllCheckedMutation(flag)
			}
		}
	}
</script>

<style lang="stylus">
	.cart
		background-color #f5f5f5
		.cart-list
			// height calc(100vh)
			margin 0 0 100upx 0
			.cart-item				
				position relative
				height 172upx
				width 100%
				margin-top 10upx
				background-color #fff
				padding 20upx
				display flex
				// flex-wrap nowrap
				.iconfont					
					line-height 172upx
					font-size 40upx
					&.selected
						color red
				.goods-item
					display flex				
					.goods-image
						width 172upx
						height 172upx
						background-color pink
						margin 0 20px
					.goods-name
						font-size 36upx
						
					.goods-price
						font-size 36upx
						color red
						
				.count-ctrl
					position absolute
					bottom 50upx
					right 50upx
					text
						border 1upx solid #ddd
						padding 8upx 15upx
						
						// 单独设置某一个标签
						&:nth-child(2)
							border: none
							border-top 1upx solid #ddd
							border-bottom 1upx solid #ddd
		.footer 
			display flex
			flex-wrap nowrap
			height 80upx
			line-height 80upx
			position fixed
			bottom 0
			left 0
			right 0
			border-top 1upx solid #ccc
			background-color #fff
			.iconfont
				// flex 1
				height 60upx
				line-height 60upx
				width 40upx
				margin 20upx 40upx
				&.active 
					color red
			.selected
				// flex 1
				width 200upx				
			.right
				display: inline-flex
				.btn
					flex 2
					border-left 1upx solid #ccc
					text-align center
					vertical-align middle	
					width 100upx
					&.order
						width 80upx
						background-color red
						color #fff
						margin 0 20upx
						
</style>
