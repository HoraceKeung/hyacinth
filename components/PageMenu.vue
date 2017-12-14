<template>
	<div class="container fixed-top">
		<div class="logo-overlay bg-white60">
			<img src="~/assets/img/logo.png">
		</div>
		<div class="float-right">
			<ul :class="'menu-trans pl-0 pb-3 '+(isMenuWhite?'pt-5':'pt-3 bg-white60')">
				<li :class="'menu-trans d-inline mx-3 pointer'+(isMenuWhite?' text-white':'')" v-for="l in links" @click="scrollTo(l.eleId)">{{lang[l.name]}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import util from '~/assets/js/util'
export default {
	computed: {
		isMenuWhite () {
			const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			return height * 0.9 > this.$store.state.scrollTop
		}
	},
	data () {
		return {
			links: [
				{name: 0, eleId: 'hero'},
				{name: 13, eleId: 'profile'},
				{name: 11, eleId: 'partners'},
				{name: 12, eleId: 'charities'},
				{name: 1, eleId: 'contact'}
			]
		}
	},
	methods: {...util}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin.scss';
.logo-overlay {
	padding: 3rem 1rem 1rem;
	position: absolute;
}
.logo-overlay img {
	width: 100px;
}
.menu-trans {
	transition: all 1s ease-out;
}
@include media-breakpoint-down(md) {
	.logo-overlay {
		padding: 1.5rem 0.5rem 0.5rem;
	}
	.logo-overlay img {
		width: 70px;
	}
}
</style>
