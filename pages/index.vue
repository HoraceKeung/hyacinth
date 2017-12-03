<template>
	<section>
		<video autoplay muted loop :src="require('~/assets/rain.mp4')"></video>
		<hero />
		<about />
		<contact />
	</section>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
export default {
	components: {Hero, About, Contact}
}
</script>

<style scoped>
video {
	position: fixed;
	top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
}
</style>
