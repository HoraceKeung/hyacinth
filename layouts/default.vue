<template>
	<div>
		<page-menu />
		<nuxt/>
		<page-footer />
	</div>
</template>

<script>
import PageMenu from '~/components/PageMenu.vue'
import PageFooter from '~/components/PageFooter.vue'
export default {
	components: {PageMenu, PageFooter},
	methods: {
		handleScroll: function () {
			var supportPageOffset = window.pageXOffset !== undefined
			var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
			var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
			this.$store.commit('setScrollTop', y)
		}
	},
	mounted: function () {
		this.$nextTick(() => {
			window.addEventListener('scroll', this.handleScroll)
			this.handleScroll()
		})
	},
	destroyed: function () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>
