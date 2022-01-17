<template>
  <div class="container mt-10">
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">{{ product.title }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button
                  @click="addToCart(product)"
                  type="button" class="btn btn-sm btn-outline-secondary">Adicionar</button>
              </div>
              <small
                v-if="!!showQty(product.id)"
                class="text-muted"
              >
                {{ showQty(product.id) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <pre>
      {{ $store.state.cart }}
    </pre>
    <br><br><br><br>
    {{ $store.state.user.first_name }} {{ $store.state.user.last_name }}<br>

    <label for="">Primeiro nome</label> <br>
    <input
      v-model="firstName"
      type="text"
      class="form-control"
    >

    <label for="">Sobrenome</label> <br>
    <input
      v-model="lastName"
      type="text"
      class="form-control"
    >
    <button
      @click.prevent.stop="saveName"
      class="btn btn-primary"
    >
      Save
    </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      products: [
        { id: 1, title: 'Produto 1' },
        { id: 2, title: 'Produto 2' },
        { id: 3, title: 'Produto 3' },
      ],
    }
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.user.first_name
      },
      set(value) {
        this.$store.commit('saveFirstName', value)
      },
    },
    lastName: {
      get() {
        return this.$store.state.user.last_name
      },
      set(value) {
        this.$store.commit('saveLastName', value)
      },
    },
  },
  methods: {
    saveName() {
      // Action
      // this.$store.dispatch('saveFirstName', this.myName);

      // Mutation
      this.$store.commit('saveFirstName', this.myName)
    },

    addToCart(product) {
      this.$store.commit('addProduct', product)
    },

    showQty(id) {
      return this.$store.state.cart.find(o => o.id === id)?.qty || 0
    }
  },
}
</script>
