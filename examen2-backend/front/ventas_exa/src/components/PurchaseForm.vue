<template>
  <div>
    <h2>Datos de Pago</h2>
    <form @submit.prevent="submitPurchase">
      <div>
        <label for="card-number">Número de tarjeta:</label>
        <input id="card-number" v-model="cardNumber" type="text" placeholder="1234 5678 9012 3456" required />
      </div>
      <div>
        <label for="expiration">Fecha de expiración:</label>
        <input id="expiration" v-model="expiration" type="text" placeholder="MM/AA" required />
      </div>
      <div>
        <label for="cvv">CVV:</label>
        <input id="cvv" v-model="cvv" type="text" placeholder="123" required />
      </div>
      <div>
        <label for="card-holder">Titular de la tarjeta:</label>
        <input id="card-holder" v-model="cardHolder" type="text" placeholder="Nombre del titular" required />
      </div>
      <button type="submit">Confirmar Compra</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      cardNumber: '',
      expiration: '',
      cvv: '',
      cardHolder: '',
    };
  },
  methods: {
    submitPurchase() {
      // Simulación de compra o llamada a la API
      console.log('Procesando compra con los datos:', {
        cardNumber: this.cardNumber,
        expiration: this.expiration,
        cvv: this.cvv,
        cardHolder: this.cardHolder,
      });
      alert('Compra confirmada. ¡Gracias por tu compra!');
      this.$router.push('/history'); // Redirigir al historial de compras
    },
  },
};
</script>
