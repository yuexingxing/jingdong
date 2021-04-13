<template>
	<div class="container">
		<div class="banner">
			<div class="block">
				<el-carousel height="2rem">
					<el-carousel-item v-for="(item, index) in data.bannerList" :key="index">
						<el-image class="banner_img" :src="item.artitag_url"></el-image>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="bigcafe-container">
			<el-card class="box-card" :body-style="{padding: '2px' }">

				<div class="bigcafe">
					<div class="bigcafe__top-container">
						<div>
							<label class="bigcafe__title">高定官在线</label>
						</div>
						<div class="bigcafe__space"></div>

						<div @click="handleChangeBigCafeClick">
							<label class="bigcafe__change">换一换</label>
							<img class="bigcafe__img" src="../../assets/icon_refresh.png" />
						</div>
					</div>
					<div class="bigcafe__item-container">
						<div v-for="(item, index) in bigCafeData.bigCafeList" :key="index" class="bigcafe__item"
							@click="handleBigCafeItemClick(item)">
							<el-avatar class="bigcafe__avatar" :src="item.avatar" />
							<label class="bigcafe__nickname">{{item.nickname}}</label>
						</div>
					</div>
				</div>
			</el-card>
		</div>

		<div class="model">
			<el-tabs v-model="data.activeName" @tab-click="handleModelClick">
				<el-tab-pane label="健康咨询" name="first">
					<ModelFragment :index="1" :tags="健康咨询" />
				</el-tab-pane>
				<el-tab-pane label="魅力无限" name="second">
					<ModelFragment :index="2" :tags="魅力无限" />
				</el-tab-pane>
				<el-tab-pane label="投资理财" name="third">
					<ModelFragment :index="3" :tags="投资理财" />
				</el-tab-pane>
				<el-tab-pane label="高端珠宝" name="fourth">
					<ModelFragment :index="4" :tags="高端珠宝" />
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import {
		reactive
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		get
	} from '../../util/request_get.js'
	import ModelFragment from './ModelFragment.vue'
	const BigCafeEffect = () => {

		const bigCafeData = reactive({
			page: 1,
			pageSize: 6,
			count: 0,
			bigCafeList: []
		})

		const getBigCafeData = async () => {
			const result = await get("api/live/mlive/recommend/user?page=" + bigCafeData.page + "&pageSize=" +
				bigCafeData.pageSize)
			console.log(result)
			if (result.ret === 'OK') {
				bigCafeData.count = result.content.count;
				bigCafeData.bigCafeList = result.content.rows;
				if (bigCafeData.bigCafeList.length === 6) {
					bigCafeData.page++;
				} else {
					bigCafeData.page = 1;
				}
			} else {
				alert("请求失败");
			}
		}

		return {
			getBigCafeData,
			bigCafeData
		}
	}
	export default {
		name: 'HomePage',
		components: {
			ModelFragment
		},
		setup() {
			const data = reactive({
				activeName: 'second',
				bannerList: []
			})
			const router = useRouter()
			const handleBannerClick = () => {
				alert("banner")
			}
			const handleBigCafeItemClick = (item) => {

				router.push({
					name: "AnchorFragment",
					params: {
						anchorId: item.mem_id
					}
				})
			}
			const handleChangeBigCafeClick = () => {
				getBigCafeData();
			}
			const {
				getBigCafeData,
				bigCafeData
			} = BigCafeEffect();
			axios
				.get('https://api.sancellvarymay.com/api/live/mlive/ad?page=1&pageSize=6')
				.then(response => {
					console.log(response.data)
					if (response.data.ret === 'OK') {
						data.bannerList = response.data.content;
					} else {
						alert("请求失败");
					}
				})
				.catch()
			getBigCafeData()
			return {
				data,
				handleBigCafeItemClick,
				handleChangeBigCafeClick,
				handleBannerClick,
				bigCafeData
			}
		},
		mounted() {
			console.log("mounted")
		},
		methods: {
			handleModelClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
	}

	.horizontal {
		display: flex;
		flex-direction: row;
	}

	.column {
		display: flex;
		flex-direction: column;
	}

	.banner {
		width: 100%;
		height: 2.0rem;
		margin-top: .12rem;

		&__img {
			width: 95%;
			height: 100%;
		}
	}

	.bigcafe-container {
		margin-top: .08rem;
		margin-left: .12rem;
		margin-right: .12rem;
	}

	.bigcafe {
		width: 95%;
		display: flex;
		flex-direction: column;
		margin-top: .06rem;
		margin-left: .12rem;
		margin-right: .12rem;

		&__top-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: .28rem;
		}

		&__title {
			font-size: .16rem;
			color: #E20000;
			font-weight: 700;
		}

		&__change {
			font-size: .12rem;
			color: #999999;
		}

		&__img {
			width: .11rem;
			height: .12rem;
			margin-left: .03rem;
		}

		&__space {
			flex: 1;
			height: 1px;
		}

		&__item-container {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			flex-wrap: wrap;
		}

		&__item {
			display: flex;
			flex-direction: column;
			flex: 1;
			margin-top: .1rem;
			justify-content: center;
			align-items: center;
			margin-bottom: .1rem;
		}

		&__avatar {
			width: .37rem;
			height: .37rem;
			justify-content: center;
		}

		&__nickname {
			margin-top: .04rem;
			display: block;
			overflow: hidden;
			width: .50rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}

	.model {
		width: 100%;
		display: flex;
		margin-top: .12rem;
		justify-content: center;
		align-items: center;
	}
</style>
