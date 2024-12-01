// 购物车相关数据存储

import Vue from 'vue'

const state = {
	cartList: [
		{picUrl: "https://yanxuan-item.nosdn.127.net/20645c2fbd1e32624dad51c588121369.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
		desc: "敏感宝宝肌可用，日本乳霜纸巾 100抽", 
		price: 15.9, count: 15, selected: 1, goodsId: 1},
		{picUrl: "https://yanxuan-item.nosdn.127.net/ef7a83229cf34896f4a86914dc9da75a.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
		desc: "经典爆款升级，毛毛虫儿童运动鞋 23-35码", 
		price: 99, count: 2, selected: 0, goodsId: 2},
		{picUrl: "https://yanxuan-item.nosdn.127.net/0fa40d91a53364e1194a22886d83959f.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
		desc: "busybear儿童水杯上学专用ppsu吸管防摔水壶", 
		price: 59.9, count: 1, selected: 0, goodsId: 3},
		{picUrl: "https://yanxuan-item.nosdn.127.net/1924576e216f5b39edc261d8a3ff3669.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
		desc: "全棉空气层大空间睡袋四季防踢被", 
		price: 89, count: 4, selected: 1, goodsId: 4},
		{picUrl: "https://yanxuan-item.nosdn.127.net/f7ae67a90399316efa123fe54bd1e4d7.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
		desc: "孕妇哺乳内衣怀孕期专用夏季薄款文胸聚拢", 
		price: 69.9, count: 1, selected: 0, goodsId: 5}
	]
}

const mutations = {
	addToCartListMutation(state, item) {		
		const goodsItem = state.cartList.find(goodsItem => goodsItem.goodsId === item.goodsId)		
		if (goodsItem) {
			goodsItem.count += 1
		} else {
			// vue中，后期添加的属性都不是响应式的，需要使用vm.$set(obj, pName, pValue)或Vue.set(obj, pName, pValue)转变为响应式
			// 1、响应式的数据包括：data、computed、props、state中已定义的
			// item.count = 1;
			// item.selected = 1;
			Vue.set(item, 'count', 1)
			Vue.set(item, 'selected', 1)
			
			state.cartList.push(item);
			
			
		}
		
	},
	addCountMutation(state, id) {
		const item = state.cartList.find(item => item.goodsId === id)
		if (item) {
			item.count += 1
		}
	},
	subCountMutation(state, id) {
		const item = state.cartList.find(item => item.goodsId === id)
		if (item && item.count > 0) {
			item.count -= 1
		}
	},	
	removeItemMutation(state, id) {
		const index = state.cartList.findIndex(item => item.goodsId === id)		
		if (index) {
			state.cartList.splice(index, 1)
		}
	},
	setCheckedMutation(state, id) {
		const item = state.cartList.find(item => item.goodsId === id)
		if (item) {
			if (item.selected === 1) {
				item.selected = 0
			} else {
				item.selected = 1
			}
		}
	},
	changeAllCheckedMutation(state, flag) {
		console.log('flag is ', flag)
		if (flag) {
			const items = state.cartList.filter(item => item.selected === 0)
			items.every(item => item.selected = 1)
		} else {
			const items = state.cartList.filter(item => item.selected === 1)
			items.forEach(item => item.selected = 0)
		}
	}
}

const actions = {
	addItemCountAction(context, id) {
		context.commit('addCountMutation', id)
	},
	subItemCountAction(context, id) {
		context.commit('subCountMutation', id)
	}
}

const getters = {
	isAllSelected(state) {
		return state.cartList.every(item => item.selected === 1)
	},
	totalSelectedCount(state) {
		return state.cartList.filter(item => item.selected === 1).length
	},
	totalSelectedPrice(state) {
		let totalPrice = 0
		
		// 使用foreach实现
		// const items = state.cartList.filter(item => item.selected === 1)
		// if (items) {			
		// 	items.forEach(item => totalPrice += item.price * item.count)
		// }
		
		// 使用reduce实现
		totalPrice = state.cartList.reduce((pre, item) => {			
			return item.selected === 1 ? pre += item.count * item.price : pre			
		}, totalPrice)
		return totalPrice.toFixed(2)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}