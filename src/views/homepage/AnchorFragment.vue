<template>
	<div class="top-container">
		<img class="bg" src="../../assets/image_creationcenter.png" />
		<div class="live-container">
			<el-avatar class="avatar" :src="userData.userInfo.avatar" />
			
			<div class="space"></div>
			<label class="live_title">我要直播</label>
		</div>
	</div>
</template>

<script>
	import {
		reactive
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		get
	} from '../../util/request_get.js'

	const UserInfoEffect = () => {

		const userData = reactive({
			userInfo: {}
		})

		const getUserInfo = async (memId) => {
			const result = await get("api/user/user/info?mem_id=" + memId)
			console.log(result)
			if (result.ret === 'OK') {
				userData.userInfo = result.content
			}
		}

		return {
			userData,
			getUserInfo
		}
	}

	export default {
		name: "AnchorFragment",
		setup() {
			console.log("setup")
			const {
				userData,
				getUserInfo
			} = UserInfoEffect()

			return {
				userData,
				getUserInfo
			}
		},
		mounted() {
			console.log("mounted")
			console.log(this.$route.params)
			this.getUserInfo(this.$route.params.anchorId)
		}
	}
</script>

<style lang="scss" scoped>
	.top-container {
		display: flex;
		flex-direction: column;
	}

	.avatar {
		width: .70rem;
		height: .70rem;
	}
	
	.live-container{
		width: 100%;
		position: absolute;
		display: flex;
		margin-top: 1.08rem;
		margin-left: .15rem;
		align-items: center;
	}

	.bg {
		width: 100%;
		height: 4rem;
		z-index: -1;
	}
	
	.space{
		flex: 1;
	}
	.live_title{
		width: 1.73rem;
		height: .36rem;
		font-size: .16rem;
		color: white;
		background: red;
		border-radius: .3rem;
		border: 1px solid red;
		text-align: center;
		line-height: .36rem;
		margin-right: .5rem;
	}
</style>
