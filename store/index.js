/*
	使用vuex作为数据管理仓库，主入口
*/

import Vue from 'vue'
import Vuex from 'vuex'

// 导入home模块的内容，有多个模块时分别导入
import home from './modules/home'
import category from './modules/category'
import cart from './modules/cart'

// 安装vuex插件
Vue.use(Vuex);

// 创建仓库
const store = new Vuex.Store({
	modules: {
		home,
		category,
		cart,
	}
});

export default store;