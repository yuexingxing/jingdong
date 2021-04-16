<template>
	<div class="docker">
		<div v-for="(item, index) in dockerList"
			:class="{'docker__item': true, 'docker__item--active': index === currentIndex}" :key="item.icon">
			<router-link :to='item.to'>
				<img class="docker__item__icon" :src="getIcon(item.icon)" />
				<div class="docker__title">{{item.text}}</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Docker',
		props: ['currentIndex'],
		computed: {
			getIcon() {
				return function(icon) {
					return require('../assets/' + icon)
				}
			},
			getIndex() {
				return function(index) {
					return "pos-" + index
				}
			}
		},
		setup() {
			const dockerList = [{
					icon: 'tab_my_normal_short_video.png',
					text: '视频',
					to: {
						name: 'Video'
					}
				},
				{
					icon: 'tab_shop_normal.png',
					text: '商城',
					to: {
						name: 'HomePage'
					}
				},
				{
					icon: 'tab_my_normal.png',
					text: '我的',
					to: {
						name: 'Person'
					}
				}
			];
			return {
				dockerList
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/viriables.scss';

	.docker {
		display: flex;
		box-sizing: border-box;
		position: absolute;
		padding: 0 .18rem;
		left: 0;
		bottom: 0;
		width: 100%;
		height: .60rem;
		border-top: .01rem solid $content-bgColor;

		&__item {
			flex: 1;
			text-align: center;

			a {
				color: $content-fontcolor;
				text-decoration: none;
			}

			&__icon {
				padding-top: .08rem;
				width: .22rem;
				height: .22rem;
			}

			.iconfont {
				margin: .07rem 0 .02rem 0;
				font-size: .18rem;
			}

			&--active {
				a {
					color: #1FA4FC;
				}
			}
		}

		&__title {
			font-size: .2rem;
			transform: scale(.5, .5);
			transform-origin: center top;
		}
	}
</style>
