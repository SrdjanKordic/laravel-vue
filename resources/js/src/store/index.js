import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuOpen: false
    },
    mutations: {
        toggleMenu(state, open) {
            if (open === undefined) {
                open = !state.menuOpen
            }

            state.menuOpen = open
        }
    }
})
