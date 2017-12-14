<template>
	<div class="container py-5" id="profile">
		<h2 class="text-uppercase letter-spacing-1 mb-5 text-center">{{lang[13]}}</h2>
		<div v-for="(p,index) in profile" :class="index===profile.length-1?'':'mb-5'">
			<h3 class="mb-3">{{lang[p.country]}}</h3>
			<div class="row">
				<div v-for="c in p.cards" class="col-sm-6 col-md-3 mb-3">
					<div class="card h-100">
						<img class="card-img-top" :src="c.logo">
						<div class="card-body">
							<h4 class="card-title">{{c.title}}</h4>
							<p class="card-text">{{c.desc}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			profile: [
				{
					country: 14, // United Kingdom
					cards: [
						{
							logo: '/img/profile/2.png',
							title: 'Ulife',
							desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						},
						{
							logo: '/img/profile/610x409.png',
							title: 'JMAX MEDIA',
							desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						},
						{
							logo: '/img/profile/1.png',
							title: 'Ringmer Garden',
							desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						},
						{
							logo: '/img/profile/3.png',
							title: 'Mansion Thames',
							desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						}
					]
				},
				{
					country: 15, // China
					cards: [
						{
							logo: '/img/profile/610x409.png',
							title: 'Title',
							desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						},
						{
							logo: '/img/profile/610x409.png',
							title: 'Title',
							desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						},
						{
							logo: '/img/profile/610x409.png',
							title: 'Title',
							desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						}
					]
				}
			]
		}
	}
}
</script>

<style scoped>
</style>
