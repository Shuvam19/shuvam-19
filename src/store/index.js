import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [createPersistedState()],
    state: {
        authenticated: false,
        listOfAllProjects: [],
    },
    mutations: {
        setAuthentication(state, status) {
            state.authenticated = status;
        },
        setAllProjects(state, allprojects) {
            state.listOfAllProjects = allprojects
        }
    },
    getters: {
        isAuthenticated: state => state.authenticated
    }
})

export default store;