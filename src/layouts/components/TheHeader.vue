<script setup lang="ts"></script>
<template>
  <nav class="navbar navbar-expand-lg bg-black">
    <div class="container-fluid">
      <router-link class="navbar-brand text-white" :to="{ name: 'Home' }"
        >SuperHero App</router-link
      >
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
        <div class="navbar-nav">
          <router-link :to="{ name: 'MyTeam' }" class="nav-link text-white">
            Mis Heroes
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
  .bg-black {
    background-color: #252525;
  }
</style>
