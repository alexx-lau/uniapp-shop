<template>
	<view class="personal">
		<view class="header">
			<template v-if="userInfo.nickName">
				<image class="avatar" :src="userInfo.avatarUrl" mode="" />
				<text class="username">{{userInfo.nickName}}</text>
				<button class="logout-button" @click="logout">退出登录</button>
			</template>
			
			<template v-else>
				<image class="avatar" src="../../static/images/unlogin.png" mode="" />
				<text class="username" @click="login">未登录用户</text>
			</template>
		</view>
		
	</view>
</template> 

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		mounted () {
			this.getUserInfo()
		},
		computed: {
			
		},
		methods: {
			login() {
				uni.reLaunch({
					url: "/pages/login/login"
				})
			},
			logout() {				
				uni.removeStorage({
					key: 'userinfo',
					success: (res) => {
						this.userInfo = {}
					},
					fail: (err) => {
						console.log('删除本地缓存失败...', err)
					}
				}),
				uni.removeStorage({
					key: 'wx-token',
					fail: (err) => {
						console.log('删除本地缓存失败...', err)
					}
					
					
				})
			},
			getUserInfo(){
				uni.getStorage({
					key: 'userinfo',
					success: (res) => {
						this.userInfo = JSON.parse(res.data)
						console.log(this.userInfo)
						
						// 获取openid
						uni.login({
							provider: 'weixin',
							onlyAuthorize: true,
							success: async (res) => {
								if (res.code) {
									
									// 获取包含openId的token
									const url = 'common/get-wx-token'
									const data = {params: {nickname: this.userInfo.nickName, code: res.code}}
									const method = 'POST'
									const result = await request(url, data, method)
									
									
									// 缓存获取的token
									if (result.data) {
										uni.setStorage({
											key: "wx-token",
											data: result.data
										})
									}
								}
								
							},
							fail: (err) => {
								console.log('get code fail, info ', err)
							}
						})
					},
					fail: (err) => {
						console.log('获取存储内容失败 ....', err)
						uni.reLaunch({
							url: "/pages/login/login"
						})
						return 
					}
				})
			}
		}
	}
</script>

<style lang="stylus">
	.personal
		.header
			height 250upx
			line-height 200upx
			display flex
			flex-wrap: nowrap
			background-color #eed7b5
			position relative
			
			
			text-align center
			.avatar
				width 200upx
				height 200upx
				vertical-align middle
				margin 20upx
				border-radius 10upx
			.username
				font-size 36upx
				text-align left
			.logout-button
				width 200upx
				height 50upx
				line-height 50upx
				display block
				font-size 26upx
				position absolute
				right 5upx
				vertical-align middle
				// text-align center
				
</style>
