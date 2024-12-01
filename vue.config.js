/*
	vue2跨域代理写在这里，代理的内容到vue官网脚手架部分文档查找
*/

module.exports =  {
	devServer: {
		proxy: {
			// 代理匹配规则，根据实际情况，可以有多条
			// 以/api开头的url匹配该条重写规则
			'/api': {
				target: 'http://192.168.88.20:8430',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
	
	
}