<template>
	<div class="container text-center py-5" id="charities">
		<h2 class="text-uppercase letter-spacing-1 mb-5">{{lang[12]}}</h2>
		<div class="row">
			<div v-for="c in charities" class="col-sm-6 col-md-3 mb-3">
				<img class="w-100" :src="c">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		charities () {
			return require.context('~/static/img/charities', false, /\.(jpg|png)$/).keys().map(img => { return '/img/charities' + img.substr(1) })
		}
	}
}
</script>

<style scoped>
</style>
