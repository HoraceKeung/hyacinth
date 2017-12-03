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
	components: {PageMenu, PageFooter}
}
</script>
