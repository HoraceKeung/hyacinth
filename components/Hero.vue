<template>
	<div class="d-flex vh-100" id="hero">
		<div class="m-auto text-center">
			<h1>Hyacinth<br>Capital</h1>
			<h5 class="text-white letter-spacing-1 mb-3">{{lang[2]}}</h5>
			<button type="button" @click="scrollTo('about')" class="btn btn-square btn-white"><i class="fa fa-long-arrow-down" aria-hidden="true"></i></button>
		</div>
	</div>
</template>

<script>
import util from '~/assets/js/util'
export default {
	methods: {...util}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin.scss';
h1 {
	font-size: 6rem;
	margin-bottom: 6rem;
	color: #476074;
	text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px
}
@include media-breakpoint-down(sm) {
	h1 {
		font-size: 4.5rem;
	}
}
</style>
