<template>
	<div class="container d-flex py-3">
		<div class="my-auto"><p class="mb-0">© Hyacinth Capital {{$store.state.currentYear}}</p></div>
		<button type="button" class=" ml-auto btn btn-square btn-hc" @click="scrollTo('hero', 0)"><i class="fa fa-long-arrow-up" aria-hidden="true"></i></button>
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
