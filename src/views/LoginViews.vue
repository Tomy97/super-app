<script setup lang="ts">
  import LoginForm from "../components/form/LoginForm.vue";
  import TheCardLogin from "../components/TheCardLogin.vue";
</script>

<template>
  <div class="container">
    <div class="row my-4 my-md-5">
      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-5">
            <TheCardLogin>
              <template #body>
                <h4 class="text-center">Login</h4>
                <div class="card-body">
                  <LoginForm />
                </div>
              </template>
            </TheCardLogin>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
