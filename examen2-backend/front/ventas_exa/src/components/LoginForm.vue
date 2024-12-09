<template>
  <div class="login-form">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; 
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginComp',
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();

    const handleLogin = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        const users = response.data;

        const user = users.find(
          (user: { email: string }) => user.email === email.value
        );

        if (!user) {
          error.value = 'Usuario no encontrado';
          return;
        }

        if (user.admin) {
          router.push('/admin');
        } else {
          router.push('/products');
        }
      } catch (err) {
        error.value = 'Error al iniciar sesión. Intenta nuevamente';
        console.error(err);
      }
    };

    return {
      email,
      password,
      error,
      handleLogin,
    };
  },
});
</script>

<style >
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

}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}

.error {
  color: red;
  margin-top: 10px;
}

</style>
