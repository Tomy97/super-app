<script setup lang="ts">
  import { useAuthStore } from "../../store/authStore";
  const isAuth = localStorage.getItem("auth");
  const userData = localStorage.getItem("user");
  const { logOut } = useAuthStore();
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-black">
    <div class="container-fluid px-0 px-lg-4">
      <div v-if="isAuth">
        <router-link class="navbar-brand text-white" :to="{ name: 'Home' }">
          SuperHero App
        </router-link>
      </div>
      <div v-else>
        <span class="navbar-brand text-white"> SuperHero App </span>
      </div>
      <template v-if="isAuth">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list text-white"></i>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav align-items-center">
            <router-link
              :to="{ name: 'MyTeam' }"
              class="nav-link text-white px-0 px-lg-4"
            >
              Mis Heroes
            </router-link>
            <span class="text-white">
              {{ userData?.replace(/['"]+/g, "") }}
              <i
                class="bi bi-box-arrow-in-right icon-style"
                @click="logOut()"
              ></i>
            </span>
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
  .bg-black {
    background-color: #252525;
  }

  .icon-style {
    font-size: 1.4rem;
    cursor: pointer;
    color: red;
    padding-right: 0.4rem;
    padding-left: 0.4rem;
  }
</style>
