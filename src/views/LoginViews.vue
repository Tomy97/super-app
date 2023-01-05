<script setup lang="ts">
  import { reactive } from "vue";
  import EmailInput from "../components/input/EmailInput.vue";
  import PasswordInput from "../components/input/PasswordInput.vue";
  import TheCardLogin from "../components/TheCardLogin.vue";
  import { IAuth } from "../interfaces/auth.interfaces";
  import { useAuthStore } from "../store/authStore";

  const { user, login } = useAuthStore();
</script>

<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-12 col-md-4">
            <TheCardLogin>
              <template #body>
                <h4 class="text-center">Login</h4>
                <div class="card-body">
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
                  <div class="row justify-content-end">
                    <div class="col-3">
                      <button
                        class="btn btn-primary"
                        type="button"
                        @click="login(user)"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </TheCardLogin>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
