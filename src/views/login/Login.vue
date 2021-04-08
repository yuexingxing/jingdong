<template>
	<div class="wrapper">
		<img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
		<div class="wrapper__input">
			<input class="wrapper__input__content" v-model="data.phone" placeholder="请输入手机号" type="number" />
		</div>
		<div class="wrapper__input">
			<input class="wrapper__input__content" v-model="data.ver_code" placeholder="请输入密码" type="password" />
		</div>
		<div class="wrapper__login-button" @click="hanldeLoginClick">登录</div>
		<div class="wrapper__login-link" @click="handleToRegisterClick">立即注册</div>
	</div>
</template>

<script>
	import {
		reactive
	} from 'vue'
	import { post } from '../../util/request.js'
	import {
		useRouter
	} from 'vue-router'
	export default {
		name: 'Login',
		setup() {
			const data = reactive({
				phone: '',
				ver_code: ''
			})
			const router = useRouter();
			const hanldeLoginClick = async () => {
				try {
					const result = await post('ssxq/w/auth/appPhoneLogin', {
						phone: data.phone,
						ver_code: data.ver_code
					})
					if (result?.data?.ret === 'OK') {
						localStorage.setItem("isLogin", true);
						localStorage.setItem("token", result.data.content.token)
						alert('登录成功-' + result.data.msg)
						router.push({
							name: "Home"
						})
					} else {
						alert('登录失败-' + result.data.msg)
					}
				} catch (e) {
					//TODO handle the exception
					alert('登录失败')
				}
			}
			const handleToRegisterClick = () => {
				router.push({
					name: "Register"
				});
			}
			return {
				data,
				hanldeLoginClick,
				handleToRegisterClick
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		position: absolute;
		margin-top: 50%;
		left: 0;
		right: 0;

		&__img {
			width: .66rem;
			height: .66rem;
			display: block;
			margin: 0 auto .4rem auto;
		}

		&__input {
			height: .48rem;
			background: #f9f9f9;
			margin: 0 .4rem .16rem .4rem;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 6px;

			&__content {
				background: none;
				width: 90%;
				height: 100%;
				border: none;
				outline: none;
				margin-left: .16rem;
				margin-right: .16rem;
				font-size: .16rem;
			}
		}

		&__login-button {
			line-height: .48rem;
			font-size: .16rem;
			background: #0091ff;
			box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
			border-radius: .04rem;
			color: white;
			text-align: center;
			margin: .32rem .4rem 0 .4rem;
		}

		&__login-link {
			text-align: center;
			font-size: .16rem;
			color: #777777;
			margin-top: .16rem;
		}
	}
</style>
