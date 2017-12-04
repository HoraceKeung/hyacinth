<template>
	<div id="gradient"></div>
</template>

<script>
export default {
	computed: {
		scrollTop () { return this.$store.state.scrollTop }
	},
	watch: {
		scrollTop (y) {
			const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			var p = 100 - Math.round((y / height) * 100) * 2
			var o = p > 0 ? 0.7 : 0.7 + 0.3 * Math.abs(p) / 100
			o = o > 1 ? 1 : o
			var ele = document.getElementById('gradient')
			ele.style.background = 'linear-gradient(rgba(14,46,71,0.7)' + (p > 0 ? ' ' + p + '%' : '0%') + ', rgba(241,243,244,' + o + ')' + (' ' + (100 + p) + '%') + ')'
		}
	}
}
</script>

<style scoped>
#gradient {
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	z-index: -99;
	background: rgba(255, 255, 255, 0.5);
	background: linear-gradient(rgba(14,46,71,0.7) 100%, #f1f3f4);
}
</style>
