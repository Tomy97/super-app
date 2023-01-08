<script setup lang="ts">
  import TheCardHeroes from "../components/TheCardHeroes.vue";
  import { useMyHeroesStore } from "../store/myHeroesStore";

  const { myTeam, removeMyTeam } = useMyHeroesStore();
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h5>Mi Equipo</h5>
      </div>
      <div class="col-12 col-md-4" v-for="team of myTeam" :key="team.id">
        <TheCardHeroes :hero="team">
          <template #button>
            <button
              type="button"
              class="btn btn-danger"
              @click="removeMyTeam(team.id)"
            >
              Eliminar
            </button>
          </template>
        </TheCardHeroes>
      </div>
    </div>
  </div>
</template>
