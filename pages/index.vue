<template>
	<section>
		<div class="btCont"><div id="bt"></div></div>
		<gradient />
		<hero />
		<about />
		<profile />
		<partners />
		<charities />
		<contact />
	</section>
</template>

<script>
import BackTube from 'back-tube'
import Gradient from '~/components/Gradient.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Profile from '~/components/Profile.vue'
import Partners from '~/components/Partners.vue'
import Charities from '~/components/Charities.vue'
import Contact from '~/components/Contact.vue'
export default {
	components: {Gradient, Hero, About, Profile, Partners, Charities, Contact},
	data () {
		return {
			bt: null
		}
	},
	mounted () {
		this.$nextTick(() => {
			const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
			if (width > 767) {
				this.bt = new BackTube(document.querySelector('#bt'), {
					videoId: '7EKr83cipSg'
				})
			}
		})
	}
}
</script>

<style scoped>
.btCont {
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
#bt {
	height: 100vh;
}
</style>
