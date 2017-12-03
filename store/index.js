export const state = () => ({
	lang: null,
	currentLangName: null,
	langNames: null,
	currentYear: new Date().getFullYear()
})

export const mutations = {
	setLang (state, arr) {
		state.lang = arr
	},
	setCurrentLangName (state, name) {
		state.currentLangName = name
	},
	setLangNames (state, names) {
		state.langNames = names
	}
}
