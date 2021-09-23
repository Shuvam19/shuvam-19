import { createStore } from 'vuex'

const store = createStore({
    state: {
        authenticated: false,
    },
    mutations: {
        setAuthentication(state, status) {
            console.log("Came here for change" + status);
            state.authenticated = status;
        }
    },
    getters: {
        isAuthenticated: state => state.authenticated
    }
})

export default store