<template>
	<div class="wrap">
		<img class="wrap__icon" src="../assets/image_empty.png" />
		<span class="wrap__tile">暂无数据</span>
	</div>
</template>

<script>
	export default {
		name: "EmptyData"
	}
</script>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		height: 2rem;
		justify-content: center;
		align-items: center;
		
		&__icon{
			width: 1rem;
			height: 1rem;
		}

		&__title {
			font-size: .22rem;
			margin-top: .12rem;
		}
	}
</style>
