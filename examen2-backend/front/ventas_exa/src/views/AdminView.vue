<template>
  <div>
    <h1>Administración</h1>
    <AdminProductForm @refresh="fetchProducts" />
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
        <button @click="editProduct(product)">Editar</button>
        <button @click="deleteProduct(product.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import AdminProductForm from '../components/AdminProductForm.vue';

export default {
  data() {
    return {
      products: [],
    };
  },
  components: { AdminProductForm },
  methods: {
    fetchProducts() {
      console.log('Fetch products from API');
    },
    editProduct(product) {
      console.log('Editing:', product);
    },
    deleteProduct(productId) {
      console.log('Deleting product with ID:', productId);
    },
  },
};
</script>
