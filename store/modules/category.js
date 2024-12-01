/*
	分类导航页数据仓库	
*/

import request from '../../utils/request'

const state = {
	categoryData: []
}

const mutations = {
	setCategoryDataMutations(state, data) {
		state.categoryData = data
	}
}

const actions  = {
	async getCategoryDataActions(context) {
		const result = await request('common/get-resource', {params: {filename: "category-data.json"}}, 'POST')
		console.log('category data ', result.data)
		context.commit("setCategoryDataMutations", JSON.parse(result.data).categoryData)
	}
}

const getters = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
