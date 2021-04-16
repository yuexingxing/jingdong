<template>
	<div class="wrap">
		<div class="container">我的</div>
	</div>
	<Docker :currentIndex="2"></Docker>
</template>

<script>
	import Docker from '../../components/Docker.vue'
	export default {
		name: 'Person',
		components: {
			Docker
		},
		mounted() {
			this.setTitle()
		},
		methods: {
			setTitle() {
				this.$bridge.callHandler('setH5TitleFunction', "我的", (res) => {

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		// overflow-y: auto;
		position: absolute;
		left: 0;
		top: 0;
		bottom: .5rem;
		right: 0;
		padding: 0 .18rem .1rem .18rem;
	}
	.container{
		// overflow-y: auto;
		width: 100%;
		height: 12rem;
		background: red;
		z-index: -1;
	}
</style>
