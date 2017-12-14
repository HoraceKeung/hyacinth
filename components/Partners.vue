<template>
	<div class="container text-center py-5" id="partners">
		<h2 class="text-uppercase letter-spacing-1 mb-5">{{lang[11]}}</h2>
		<div class="row">
			<div v-for="p in partners" class="col-sm-6 col-md-3 mb-3">
				<img class="w-100" :src="p">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		partners () {
			return require.context('~/static/img/partners', false, /\.(jpg|png)$/).keys().map(img => { return '/img/partners' + img.substr(1) })
		}
	}
}
</script>

<style scoped>
</style>
