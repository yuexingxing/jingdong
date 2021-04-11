<template>
	<div class="container-top">
		<div class="item" v-for="(item, index) in modelData.list" :key="index">

			<img class="item__live__bg" :src="item.frontcover" />
			<div class="item__live">
				<label class="item__live__dot">.</label>
				<label class="item__live__title">直播中</label>
			</div>
			<label class="space"></label>
			<div>
				<label class="item__content">{{item.live_title}}</label>
			</div>
			<div class="item_bottom">
				<el-avatar class="item__bottom__avatar" :src="item.pushers.avatar"></el-avatar>
				<label class="item__bottom__name">{{item.pushers.anchor_name}}</label>
				<img class="item__bottom__bell" src="../../assets/img_bell.png" />
				<label class="item__bottom__count">{{item.thumb}}人</label>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		reactive
	} from 'vue'
	import {
		get
	} from '../../util/request_get.js'
	const ModelDataEffect = () => {

		const modelData = reactive({
			tags: "",
			index: 1,
			list: []
		})

		const getModelData = async () => {
			if (modelData.index === 1) {
				modelData.tags = "健康咨询"
			} else if (modelData.index === 2) {
				modelData.tags = "魅力无限"
			} else if (modelData.index === 2) {
				modelData.tags = "投资理财"
			} else if (modelData.index === 2) {
				modelData.tags = "高端珠宝"
			}else{
				modelData.tags = "健康咨询"
			}
			const result = await get("api/live/mlive/video/list");
			console.log(result)
			if (result.ret === 'OK') {
				modelData.list = result.content.rows;
			}
		}

		return {
			modelData,
			getModelData
		}
	}

	export default {
		name: "ModelFragment",
		props: [
			'index',
			'tags'
		],
		watch: {
			index(newData, oldData) {
				console.log("watch-" + newData + "-"+ oldData)
			}
		},
		setup() {
			const {
				modelData,
				getModelData
			} = ModelDataEffect();

			// console.log(props)
			// modelData.index = index;
			// modelData.tags = tags;
			getModelData();
			return {
				modelData,
				getModelData
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container-top {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.space {
		flex: 1;
	}

	.item {
		width: 50%;
		height: 2.21rem;
		margin-top: .12rem;
		display: flex;
		flex-direction: column;

		&__live {
			width: .4rem;
			height: .15rem;
			border: .03rem solid red;
			background: red;
			margin-left: .12rem;
			margin-top: .12rem;

			&__dot {
				width: .05rem;
				height: .05rem;
				color: white;
			}

			&__bg {
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: -1;
			}

			&__title {
				font-size: .1rem;
				color: white;
			}
		}

		&__content {
			font-size: .13rem;
			color: white;
			margin-bottom: .08rem;
		}

		&__bottom {
			display: flex;
			flex-direction: row;
			margin-top: .07rem;
			justify-content: center;
			align-items: center;
			background-color: black;

			&__avatar {
				width: .19rem;
				height: .19rem;
			}

			&__name {
				font-size: .13rem;
				color: white;
				flex: 1;
			}

			&__count {
				font-size: .13rem;
				color: white;
				margin-left: .02rem;
			}

			&__bell {
				width: .08rem;
				height: .1rem;
				margin-left: .05rem;
			}
		}

	}
</style>
