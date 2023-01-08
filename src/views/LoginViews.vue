<script setup lang="ts">
  import LoginForm from "../components/form/LoginForm.vue";
  import TheCardLogin from "../components/TheCardLogin.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 px-0">
        <img
          src="../assets/img/MarvelvsDC.jpg"
          class="w-100"
          alt="marvel-dc"
        />
      </div>
      <div class="col-6">
        <div class="row my-5 justify-content-center">
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
