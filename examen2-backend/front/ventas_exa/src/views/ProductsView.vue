<template>
  <div class="products-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.Image" :alt="product.name" class="product-image" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Precio: {{ product.price }} MXN</p>
      <p v-if="product.discount">Descuento: {{ product.discount }}%</p>
      <p>Stock: {{ product.stock }}</p>
      <button @click="buyProduct(product)">Comprar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number | null;
  stock: number;
  Image: string;
}

export default defineComponent({
  name: 'ProductsList',
  setup() {
    const products = ref<Product[]>([]);

    const userId = 1;

    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:8000/api/products');
        products.value = response.data;
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    const buyProduct = async (product: Product) => {
      if (product.stock <= 0) {
        alert('Este producto no está disponible.');
        return;
      }

      const purchaseData = {
        userId,
        productId: product.id,
        quantity: 1,
        totalPrice: product.price,
      };

      try {
        const response = await axios.post('http://localhost:8000/api/purchases', purchaseData);
        alert(`Compra realizada con éxito: ${response.data.message}`);
      } catch (error) {
        console.error('Error al realizar la compra:', error);
        alert('Hubo un error al procesar la compra.');
      }
    };

    onMounted(fetchProducts);

    return {
      products,
      buyProduct,
    };
  },
});
</script>

<style>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

</style>
