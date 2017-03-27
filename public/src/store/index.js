import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * state 单一状态树
 */
const state = {
    count: 0,
    online: false
}
/**
 * 我们通过提交 mutation 的方式，而非直接改变 store.state.count
*/
const mutations = {
    INCREMENT(state) {
        state.count ++
    },
    DECREMENT(state) {
        state.count --
    },
    LOGIN(state, user) {
        state.online = true
        sessionStorage.setItem('user', JSON.stringify(user))
    },
    LOGOUT(state) {
        state.online = false
        sessionStorage.removeItem('user')
    }
}

const actions = {
    increment: ({commit}) => commit('INCREMENT'),
    decrement: ({commit}) => commit('DECREMENT'),
    incrementIfOdd({commit, state}){
        if((state.count + 1) % 2 === 0){
            commit('INCREMENT')
        }
    },
    // 延时操作
    incrementAsync( {commit} ){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                commit('INCREMENT')
                resolve()
            }, 1000)
        })
    },

    login({commit, state}, user){
        if(!state.online){
            commit('LOGIN', user)
        }
    },
    logout({commit, state}){ 
        if(state.online){
            commit('LOGOUT')
        }
    }
    // ...
    // actionB ({ dispatch, commit }) {
    // return dispatch('actionA').then(() => {
    //   commit('someOtherMutation')
    // })
    // }
}

// getters are functions
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

const store = new Vuex.Store({
    state, // 状态对象 -- commit触发状态变更
    mutations,
    getters,
    actions
})

export default store
