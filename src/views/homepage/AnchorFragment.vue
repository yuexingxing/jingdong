<template>
	<div class="top-container">
		<img class="bg" src="../../assets/image_creationcenter.png" />
		<div class="live-container">
			<el-avatar class="avatar" :src="userData.userInfo.avatar" />
			<div class="space"></div>
			<label class="live_title" @click="handleLiveClick">我要直播</label>
		</div>
		<div class="nickname-container">
			<label class="nickname-container__nickname">{{userData.userInfo.nickname}}</label>
			<label class="nickname-container__label">三少高定</label>
		</div>
		<div class="fans">
			<label class="fans__title">粉丝</label>
			<label class="fans__count">{{userData.anchorInfo.attention_count}}</label>
		</div>
	</div>
	<div class="tab">
		<el-tabs class="tab__item" v-model="data.activeName" @tab-click="handleModelClick" stretch="true">
			<el-tab-pane label="直播记录" name="first">
				<ModelFragment :index="1" :tags="直播记录" />
			</el-tab-pane>
			<el-tab-pane label="关注" name="second">
				<ModelFragment :index="2" :tags="关注" />
			</el-tab-pane>
			<el-tab-pane label="短视频" name="third">
				<ModelFragment :index="3" :tags="短视频" />
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import {
		reactive,
		Vue
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		get
	} from '../../util/request_get.js'
	import {
		getCurrentInstance
	} from 'vue'

	const UserInfoEffect = () => {

		const userData = reactive({
			userInfo: {
				nickname: "三少"
			},
			anchorInfo: {
				attention_count: 0
			}
		})

		const getUserInfo = async (memId) => {
			const result = await get("api/user/user/info?mem_id=" + memId)
			console.log(result)
			if (result.ret === 'OK') {
				userData.userInfo = result.content
			}
		}

		const getAnchorInfo = async (memId) => {
			const result = await get("api/live/mlive/anchorDetail?mem_id=" + memId)
			console.log(result)
			if (result.ret === 'OK') {
				userData.anchorInfo = result.content
			}
		}


		return {
			userData,
			getUserInfo,
			getAnchorInfo
		}
	}

	export default {
		name: "AnchorFragment",
		setup(props, context) {
			console.log("setup")
			const {
				ctx
			} = getCurrentInstance();
			const {
				userData,
				getUserInfo,
				getAnchorInfo
			} = UserInfoEffect()

			const data = reactive({
				appName: "",
				activeName: 'second'
			})

			data.appName = ctx.$appName
			const handleLiveClick = () => {
				ctx.$bridge.callHandler('toLiveHomePageFunction', "data from js", (res) => {
					alert('获取app响应数据:' + res)
				})
			}

			return {
				data,
				userData,
				getUserInfo,
				getAnchorInfo,
				handleLiveClick
			}
		},
		mounted() {
			console.log("mounted")
			console.log(this.$route.params)
			// this.getAnchorInfo(this.$route.params.anchorId)
			// this.getUserInfo(this.$route.params.anchorId)

			// // 注册事件
			this.appCall()
			this.setTitle()
			// this.callAPP(this)
		},
		methods: {
			setTitle() {
				this.$bridge.callHandler('setH5TitleFunction', "创作中心", (res) => {

				})
			},
			// js调用app ==================================
			callAPP() {
				this.$bridge.callHandler('toLiveHomePageFunction', "data from js", (res) => {
					console.log('获取app响应数据:' + res)
				})
			},
			// app调js =====================================
			// app调用js的方法 appCallJS, 需要注册
			appCall() {
				this.$bridge.registerHandler('initToken', (datas, responseCallback) => {
					console.log('获取app响应数据:' + datas)
					localStorage.setItem("token", datas)
				})
			}
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

	.live-container {
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

	.space {
		flex: 1;
	}

	.live_title {
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

	.nickname-container {
		position: absolute;
		display: flex;
		flex-direction: row;
		margin-top: 2.28rem;
		margin-left: .15rem;
		align-items: center;

		&__nickname {
			font-size: .17rem;
			color: white;
			text-align: center;
			line-height: auto;
			font-weight: 800;
		}

		&__label {

			height: .16rem;
			color: #B6A57B;
			margin-left: .05rem;
			border-radius: .2rem;
			background: #333333;
			font-size: .1rem;
			padding-left: .08rem;
			padding-right: .08rem;
			text-align: center;
			line-height: .16rem;
		}
	}

	.fans {
		display: flex;
		flex-direction: row;
		position: absolute;
		margin-top: 2.58rem;
		margin-left: .15rem;
		align-items: center;

		&__title {
			font-size: .12rem;
			color: white;
		}

		&__count {
			font-size: .15rem;
			color: white;
			margin-left: .03rem;
		}
	}

	.tab {
		width: 100%;

		&__item {
			width: 100%;
		}
	}
</style>
