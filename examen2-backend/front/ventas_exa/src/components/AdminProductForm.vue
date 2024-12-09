<template>
  <div>
    <h3>Agregar Producto</h3>
    <form @submit.prevent="submit">
      <input v-model="name" placeholder="Nombre" required />
      <input v-model="price" type="number" placeholder="Precio" required />
      <textarea v-model="description" placeholder="Descripción"></textarea>
      <input v-model="stock" type="number" placeholder="Stock" required />
      <input v-model="discount" type="number" placeholder="Descuento" required />
      <input type="file" @change="onFileChange" accept="image/*" required />
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: '',
      price: '',
      description: '',
    };
  },
  methods: {
    submit() {
      console.log({ name: this.name, price: this.price, description: this.description });
      this.$emit('refresh');
    },
  },
};
</script>
