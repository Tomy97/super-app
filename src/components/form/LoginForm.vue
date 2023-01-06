<script setup lang="ts">
  import { useAuthStore } from "../../store/authStore";
  import EmailInput from "../input/EmailInput.vue";
  import PasswordInput from "../input/PasswordInput.vue";

  const { user, login } = useAuthStore();
  const handleSubmit = (values: any) => {
    console.log(values);
  };
</script>
<template>
  <form @submit="handleSubmit">
    <EmailInput
      label="Email"
      v-model="user.email"
      placeholder="Ingrese su email"
      :required="true"
    />
    <PasswordInput
      label="Password"
      v-model="user.password"
      placeholder="Ingrese su contraseña"
      :required="true"
    />
    <div class="row">
      <div class="col-12 text-end">
        <button class="btn btn-primary" type="button" @click="login(user)">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>
