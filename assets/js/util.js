var currentScrollTo = null

const util = {
	scrollTo (id, offset = 150, oldTop) {
		const scroll = function () {
			const rect = document.getElementById(id).getBoundingClientRect()
			if (((rect.top - offset) > 1 || (rect.top - offset) < -1) && oldTop !== rect.top) {
				window.scrollBy(0, ((rect.top - offset) > 0 ? 1 : -1) * (Math.abs(rect.top - offset) / 10 < 1 ? 1 : Math.abs(rect.top - offset) / 10))
				window.requestAnimationFrame(util.scrollTo.bind(util, id, offset, rect.top))
			} else {
				currentScrollTo = null
			}
		}
		if (!currentScrollTo) {
			currentScrollTo = id
			scroll()
		} else if (currentScrollTo === id) {
			scroll()
		}
	},
	setLang ({$store}, l) {
		const arr = require('../../static/languages/' + l + '.json')
		$store.commit('setLang', arr)
		$store.commit('setCurrentLangName', l)
	}
}

export default util
