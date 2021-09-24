import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
    plugins: [createPersistedState()],
    state: {
        authenticated: false,
    },
    mutations: {
        setAuthentication(state, status) {
            state.authenticated = status;
        }
    },
    getters: {
        isAuthenticated: state => state.authenticated
    }
})