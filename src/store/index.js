import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    },
    cart: [],
  },
  mutations: {
    // Cart
    addProduct(state, payload) {
      const existingProduct = state.cart.find(o => o.id === payload.id)

      if (existingProduct) {
        existingProduct.qty += 1
      } else {
        payload.qty = 1
        state.cart.push(payload);
      }
    },

    // User
    saveFirstName(state, name) {
      state.user.first_name = name
    },
    saveLastName(state, name) {
      state.user.last_name = name
    }
  },
  actions: {
    saveFirstName(context, payload) {
      context.commit('saveFirstName', payload)
    }
  },
  modules: {
  }
})
