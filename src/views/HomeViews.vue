<script lang="ts" setup>
  import { ref } from "vue";
  import TheCardHeroes from "../components/TheCardHeroes.vue";
  import { IHero } from "../interfaces/hero.interfaces";
  import { getHeroesNamesServices } from "../services/hero.service";
  import { useMyHeroesStore } from "../store/myHeroesStore";

  const names = ref<string>("");
  const heroesSearch = ref<IHero[]>([]);

  const { addMyTeam, myTeam } = useMyHeroesStore();

  const searchNames = async (names: string) => {
    if (names.length > 3)
      heroesSearch.value = await getHeroesNamesServices(names);
  };
</script>
<template>
  <section class="container-fluid px-0 position-relative posistion-lg-absolute">
    <section class="background-img"></section>
    <h5 class="text-position position-absolute">Seleccionar Heroes</h5>
  </section>
  <section class="container my-4">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-6">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <i class="bi bi-search"></i>
          </span>
          <input
            type="text"
            class="form-control"
            v-model="names"
            @keyup="searchNames(names)"
            placeholder="Ingresar el nombre del heroe"
          />
        </div>
        {{ names }}
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-4" v-for="hero of heroesSearch" :key="hero.id">
        <TheCardHeroes :hero="hero">
          <template #button>
            <button
              type="button"
              class="btn btn-primary"
              @click="addMyTeam(hero)"
              :disabled="myTeam.length >= 6 ? true : false"
            >
              {{ myTeam.length >= 6 ? "Equipo lleno" : "Seleccionar" }}
            </button>
          </template>
        </TheCardHeroes>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .background-img {
    background-image: url("../assets/img/banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 80vh;
  }

  .text-position {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 3rem;
  }
</style>
