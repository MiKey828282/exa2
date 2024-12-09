<template>
  <div class="history-view">
    <h1>Historial de Compras</h1>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="purchase in purchases" :key="purchase.id" class="purchase-item">
        <p><strong>ID de Compra:</strong> {{ purchase.id }}</p>
        <p><strong>Producto ID:</strong> {{ purchase.productId }}</p>
        <p><strong>Cantidad:</strong> {{ purchase.quantity }}</p>
        <p><strong>Precio Total:</strong> ${{ purchase.totalPrice }}</p>
        <p><strong>Fecha de Compra:</strong> {{ formatDate(purchase.purchaseDate) }}</p>
        <hr>
      </li>

    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface Purchase {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  purchaseDate: string;
}

export default defineComponent({
  name: "HistoryView",
  data() {
    return {
      purchases: [] as Purchase[],
      loading: false,
      error: null as string | null,
    };
  },
  methods: {
    async fetchPurchaseHistory(userId: number): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get<Purchase[]>(`http://localhost:8000/api/history/${userId}`);
        this.purchases = response.data;
      } catch (err) {
        this.error = "Error al cargar el historial de compras.";
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    formatDate(date: string): string {
      const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
  mounted() {
    const userId = 1; // Aquí deberías obtener el ID del usuario actual dinámicamente
    this.fetchPurchaseHistory(userId);
  },
});
</script>

<style scoped>
.history-view {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: black;
  background-color: #ccc;
}
</style>
