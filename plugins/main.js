// Load vue modules
import Vue from 'vue'
Vue.mixin({
	computed: {
		lang () { return this.$store.state.lang }
	}
})

// Load lang
export default ({store}) => {
	const context = require.context('../static/languages', false, /\.json$/)
	const langs = context.keys().map(k => {
		return k.split('/')[1].split('.')[0]
	})
	store.commit('setLangNames', langs)
	const arr = require('../static/languages/english.json')
	store.commit('setLang', arr)
	store.commit('setCurrentLangName', 'english')
}
