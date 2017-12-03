<template>
	<div class="container fixed-top">
		<div class="logo-overlay">
			<img src="http://via.placeholder.com/100x100">
		</div>
		<div class="float-right pt-5">
			<ul>
				<li class="d-inline text-white ml-3 pointer" v-for="l in links" @click="scrollTo(l.eleId)">{{lang[l.name]}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import util from '~/assets/js/util'
export default {
	data () {
		return {
			links: [
				{name: 0, eleId: 'hero'},
				{name: 1, eleId: 'contact'}
			]
		}
	},
	methods: {...util}
}
</script>

<style scoped>
.logo-overlay {
	padding: 3rem 1rem 1rem;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
}
</style>
