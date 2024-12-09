<template>
  <div class="login-form">
    <h1>Login</h1>
    <LoginForm />
    <router-link to="/register">¿No tienes cuenta? Regístrate aquí</router-link>
  </div>
</template>

<script lang="ts">
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { LoginForm },
};
</script>

<style>
.login-form {
  
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: black;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
</style>
