<template>
	<div class="wrap">
		<HomePage></HomePage>
	</div>
	<Docker :currentIndex="1"></Docker>
</template>

<script>
	import Docker from '../../components/Docker.vue'
	import HomePage from '../homepage/HomePage.vue'
	export default {
		name: 'Main',
		components: {
			Docker,
			HomePage
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		overflow-y: auto;
		position: absolute;
		left: 0;
		top: 0;
		bottom: .5rem;
		right: 0;
		padding: 0 .18rem .1rem .18rem;
	}
</style>
