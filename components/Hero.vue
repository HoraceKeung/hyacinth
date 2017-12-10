<template>
	<div class="d-flex vh-100" id="hero">
		<div class="m-auto text-center">
			<div class="container"><div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6"><img class="w-100 mb-5" src="~/assets/img/logo_full.png"></div>
			</div></div>
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

<style scoped>
</style>
