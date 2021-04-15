<template>
	<div class="wrap">
		<img class="wrap__icon" src="../assets/image_empty.png" />
		<span class="wrap__title">{{message}}暂无数据</span>
	</div>
</template>

<script>
	import {
		reactive
	} from 'vue'

	export default {
		name: "EmptyData",
		props: ['message']
	}
</script>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		height: 2rem;
		justify-content: center;
		align-items: center;

		&__icon {
			width: 1rem;
			height: 1rem;
		}

		&__title {
			font-size: .13rem;
			margin-top: .08rem;
			color: #999;
		}
	}
</style>
