/*
	首页仓库内容
*/

import request from '../../utils/request'

// 负责数据保存
const state = {
	// test: '测试数据',
	categoryList: [],
	policyDescList: [
		{icon: "/static/images/fixed-icon1.png", schemeUrl: "", desc: "网易自营品牌"},
		{icon: "/static/images/fixed-icon2.png", schemeUrl: "", desc: "30天无忧退货"},
		{icon: "/static/images/fixed-icon3.png", schemeUrl: "", desc: "48小时快速退款"},
	
	],
	navList: [
		{icon: "/static/images/nav-icon1.png", desc: "居家生活"},
		{icon: "/static/images/nav-icon2.png", desc: "服饰箱包"},
		{icon: "/static/images/nav-icon3.png", desc: "美食酒水"},
		{icon: "/static/images/nav-icon4.png", desc: "个护清洁"},
		{icon: "/static/images/nav-icon5.png", desc: "母婴亲子"},
		{icon: "/static/images/nav-icon6.png", desc: "运动旅行"},
		{icon: "/static/images/nav-icon7.png", desc: "数码家电"},
		{icon: "/static/images/nav-icon8.png", desc: "全球特色"},
		{icon: "/static/images/nav-icon9.png", desc: "好货抄底"},
		{icon: "/static/images/nav-icon10.png", desc: "其他商品"},		
	],
	categoryExList: [
		{titlePicUrl: "https://yanxuan.nosdn.127.net/6dcb40c6818b892aa9a51d8928705211.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95", items: [
			{picUrl: "https://yanxuan-item.nosdn.127.net/ac931886418a1cc7f448f83144502048.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "裸睡亲肤 经典A类针织四件套"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/8b9d1671522b1551bbbdd02aacc922bf.jpg?type=webp&quality=95&thumbnail=265x265&imageView", desc: "每一口都有九种肉，全价猫粮"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/9d6a8c087e9ded5c828c74741a77bd14.jpg?type=webp&quality=95&thumbnail=265x265&imageView", desc: "吸湿发热，牛奶绒暖炎床笠套件"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/239d5177c8d6b0643d6d468dea904260.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "如享云端好眠 泰国93%天然乳胶床垫7.5-10cm"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/ac606893c49141e695354552c51e76e8.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "双12省钱卡 花3元得29元"},
		]},
		{titlePicUrl: "https://yanxuan.nosdn.127.net/3768fa50dd5ca3aa0537a72990b48554.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95", items: [
			{picUrl: "https://yanxuan-item.nosdn.127.net/ac931886418a1cc7f448f83144502048.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "裸睡亲肤 经典A类针织四件套"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/8b9d1671522b1551bbbdd02aacc922bf.jpg?type=webp&quality=95&thumbnail=265x265&imageView", desc: "每一口都有九种肉，全价猫粮"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/9d6a8c087e9ded5c828c74741a77bd14.jpg?type=webp&quality=95&thumbnail=265x265&imageView", desc: "吸湿发热，牛奶绒暖炎床笠套件"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/239d5177c8d6b0643d6d468dea904260.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "如享云端好眠 泰国93%天然乳胶床垫7.5-10cm"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/ac606893c49141e695354552c51e76e8.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "双12省钱卡 花3元得29元"},
		]},
		{titlePicUrl: "https://yanxuan.nosdn.127.net/3297667a12ee6b8f6203ff81754dd1cd.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95", items: [
			{picUrl: "https://yanxuan-item.nosdn.127.net/ac931886418a1cc7f448f83144502048.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "裸睡亲肤 经典A类针织四件套"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/8b9d1671522b1551bbbdd02aacc922bf.jpg?type=webp&quality=95&thumbnail=265x265&imageView", desc: "每一口都有九种肉，全价猫粮"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/9d6a8c087e9ded5c828c74741a77bd14.jpg?type=webp&quality=95&thumbnail=265x265&imageView", desc: "吸湿发热，牛奶绒暖炎床笠套件"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/239d5177c8d6b0643d6d468dea904260.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "如享云端好眠 泰国93%天然乳胶床垫7.5-10cm"},
			{picUrl: "https://yanxuan-item.nosdn.127.net/ac606893c49141e695354552c51e76e8.png?type=webp&quality=95&thumbnail=265x265&imageView", desc: "双12省钱卡 花3元得29元"},
		]},
	],
	swipers: {
		recommend: [
			{picUrl: "https://yanxuan.nosdn.127.net/static-union/1731563238dc59e2.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
			{picUrl: "https://yanxuan.nosdn.127.net/hxm/oly-picture/c859e1022f59a0a3864f128daf9d77c3.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
			{picUrl: "https://yanxuan.nosdn.127.net/static-union/1731563238dc59e2.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
		],
		categoryList: [
			{column: 2, urls: [
				{picUrl: "https://yanxuan.nosdn.127.net/3297667a12ee6b8f6203ff81754dd1cd.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95"},
				{picUrl: "https://yanxuan.nosdn.127.net/27038ec46af2f4554e370e612aa47431.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95"},
				{picUrl: "https://yanxuan.nosdn.127.net/b9600064ece962a0883a8179765ca2ba.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95"},
			]},
			{column: 4, urls: [
				{picUrl: "http://images.shejidaren.com/wp-content/uploads/2019/11/33325-9.jpg"},
				{picUrl: "https://tse2-mm.cn.bing.net/th/id/OIP-C.ZTTP_usHAHKEyGE3du5zwQHaGO?pid=ImgDet&w=474&h=398&rs=1"},
				{picUrl: "https://tse4-mm.cn.bing.net/th/id/OIP-C.e4AxCD4D0esVvMUvNk8ZQwHaGI?pid=ImgDet&w=474&h=392&rs=1"},
			]},
			{column: 6, urls: [
				{picUrl: "https://tse3-mm.cn.bing.net/th/id/OIP-C.Xcu0hREDTnSv_E12g9hC9AHaFV?pid=ImgDet&w=474&h=341&rs=1"},
				{picUrl: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UuJwYKoD2q-Kq0-1mMa0PQHaFs?pid=ImgDet&w=474&h=364&rs=1"},
				{picUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.709f2d65b8d426b36a98264022a9ed0d?rik=jDxdZ3uioxKa4Q&riu=http%3a%2f%2fimages.shejidaren.com%2fwp-content%2fuploads%2f2019%2f11%2f33325-11.jpg&ehk=Ndtk%2fRVqVjTyyEM9ni%2bNt3sjS8%2f%2fcD39hDJRa3kZIXU%3d&risl=&pid=ImgRaw&r=0"},
			]},	
		]		
	},
	goodsList: [
		{column: 2, title:"家庭清洁", sub_title: "给你安心洁净的生活", goods: [
			{
				picUrl: "https://yanxuan-item.nosdn.127.net/e1b552d3ec524e2a245c5277ecd592c1.png?type=webp&imageView&thumbnail=430x430&quality=95", 
				desc: "肌初水嫩/盈润乳液120ml（原活颜保湿乳）", 
				price: 78.9,
				goodsId: 21
			},
			{picUrl: "https://yanxuan-item.nosdn.127.net/774aea605c91e277b4ffe8791ce689e7.png?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "时刻照亮你的美 指触式LED子母化妆镜", 
			price: 109, goodsId: 22},
			{picUrl: "https://yanxuan-item.nosdn.127.net/31d2fe27497c92cb4d46fd130c04ab54.png?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "蓝月亮风清白兰手洗专用洗衣液组合", 
			price: 18.8, goodsId: 23},
			{picUrl: "https://yanxuan-item.nosdn.127.net/efb15965fd685b66065383e60dd20a06.png?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "30天巨留香 粉液三腔香氛洗衣凝珠", 
			price: 34.9, goodsId: 24},
			{picUrl: "https://yanxuan-item.nosdn.127.net/9dc882586b598139ab300f88795b9727.png?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "全新升级！99%抑菌率，抑菌除臭管道疏通剂", 
			price: 18.9, goodsId: 25}
		]},
		{column: 4, title:"宠物生活", sub_title: "天然食材，激活天性", goods: [
			{picUrl: "https://yanxuan-item.nosdn.127.net/0de1a3439874b89c7d9fd3cf06b30385.jpg?type=webp&imageView&thumbnail=430x430&quality=95", 
			desc: "趣味互动小零食，猫用薄荷饼干", 
			price: 6.9, goodsId: 41},
			{picUrl: "https://yanxuan-item.nosdn.127.net/b8af56b04e1ebac6952d1979d49a66f6.png?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "宠爱相伴全价猫粮", 
			price: 36, goodsId: 42},
			{picUrl: "https://yanxuan-item.nosdn.127.net/57e53bb02f9fd11b308db112a7bebd4d.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "宠物零食 猫用浓汤红肉罐头", 
			price: 6.2, goodsId: 43},
			{picUrl: "https://yanxuan-item.nosdn.127.net/48c404ecf71d643b53eda51cddbea520.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "可调速可控温，宠物智能吹水机&烘干箱", 
			price: 279, goodsId: 44},
			{picUrl: "https://yanxuan-item.nosdn.127.net/5fb739f3dae38b94751edc855d04af86.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "FUKUFUKU小鸭水獭船窝可爱风狗窝猫窝", 
			price: 88, goodsId: 45}
		]},
		{column: 6, title:"母婴亲子", sub_title: "秉父母心，更懂中国宝宝", goods: [
			{picUrl: "https://yanxuan-item.nosdn.127.net/20645c2fbd1e32624dad51c588121369.jpg?type=webp&imageView&thumbnail=430x430&quality=95", 
			desc: "敏感宝宝肌可用，日本乳霜纸巾 100抽", 
			price: 15.9, goodsId: 61},
			{picUrl: "https://yanxuan-item.nosdn.127.net/ef7a83229cf34896f4a86914dc9da75a.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "经典爆款升级，毛毛虫儿童运动鞋 23-35码", 
			price: 99, goodsId: 62},
			{picUrl: "https://yanxuan-item.nosdn.127.net/0fa40d91a53364e1194a22886d83959f.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "busybear儿童水杯上学专用ppsu吸管防摔水壶", 
			price: 59.9, goodsId: 63},
			{picUrl: "https://yanxuan-item.nosdn.127.net/1924576e216f5b39edc261d8a3ff3669.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "全棉空气层大空间睡袋四季防踢被", 
			price: 89, goodsId: 64},
			{picUrl: "https://yanxuan-item.nosdn.127.net/f7ae67a90399316efa123fe54bd1e4d7.jpg?type=webp&imageView&thumbnail=430x430&quality=95",
			desc: "孕妇哺乳内衣怀孕期专用夏季薄款文胸聚拢", 
			price: 69.9, goodsId: 65}
		]},
	],
	
}


// 负责数据处理
const mutations = {
	
	// 修改分类数据
	setCategoryListMutations(state, list) {
		state.categoryList = list
	}
}

// 负责业务处理
const actions = {
	// 请求后端数据，获取分类信息
	async getCategoryListActions(context) {
		const result = await request('role/search', {id: 1, id_handle: 1}, 'POST')
		console.log(result)
		// 同步mutation
		context.commit('setCategoryListMutations',JSON.parse(result.data))
	}
}

const getters = {
	
}

export default {
	
	// 开启命名空间，保证所有导出都时分模块的
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
}