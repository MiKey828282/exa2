<template>
  <div class="register-form">
    <h1>Registro</h1>
    <form @submit.prevent="register">
      <label for="email">correo electrónico:</label>
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <label for="password">contraseña:</label>
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      console.log({ email: this.email, password: this.password });
    },
  },
};
</script>

<style>
/* Estilos para el formulario de registro */
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: black;
  background-color: #ccc;
}
.register-form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}
.register-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.register-form button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
