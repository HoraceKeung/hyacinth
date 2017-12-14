<template>
	<div class="container fixed-top">
		<div class="logo-overlay">
			<img width="100" src="~/assets/img/logo.png">
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

<style scoped>
.logo-overlay {
	padding: 3rem 1rem 1rem;
	background-color: rgba(255, 255, 255, 0.5);
	position: absolute;
}
</style>
