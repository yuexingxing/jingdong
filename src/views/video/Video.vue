<template>
	<div class="wrap">视频</div>
	<Docker :currentIndex="0"></Docker>
</template>

<script>
	import Docker from '../../components/Docker.vue'
	export default {
		name: 'Video',
		components: {
			Docker
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