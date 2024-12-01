<template>
	<view class="login">
		<button type="default" @click="getUserInfo">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			getUserInfo() {
				uni.getUserProfile({
					desc: '请把你的用户信息交给我',
					success: (res) => {
						console.log(res)
						
						// 保存到公共存储
						uni.setStorage({
							key: "userinfo",
							data: JSON.stringify(res.userInfo)
						})
						uni.reLaunch({
							url: '/pages/personal/personal'
						})
					},
					fail: (err) => {
						console.log('获取用户信息失败，原因：', err)
					}
				})
			}
		}
	}
</script>

<style lang="stylus">

</style>
