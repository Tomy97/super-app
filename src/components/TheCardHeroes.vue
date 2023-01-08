<script setup lang="ts">
  import { IHero } from "../interfaces/hero.interfaces";
  import { useMyHeroesStore } from "../store/myHeroesStore";

  const { addMyTeam, myTeam } = useMyHeroesStore();

  defineProps<{
    hero: IHero;
  }>();

  console.log(myTeam);
</script>

<template>
  <div class="card">
    <img :src="hero.image?.url" class="card-img-top" :alt="hero.name" />
    <div class="card-body">
      <h5 class="card-title">{{ hero.name }}</h5>
      <div class="row">
        <div class="col-12">
          <span> Inteligencia: {{ hero.powerstats?.intelligence }} </span>
        </div>
        <div class="col-12">
          <span> Fortaleza: {{ hero.powerstats?.strength }} </span>
        </div>
        <div class="col-12">
          <span> Valocidad: {{ hero.powerstats?.speed }} </span>
        </div>
        <div class="col-12">
          <span> Durabilidad: {{ hero.powerstats?.durability }} </span>
        </div>
        <div class="col-12">
          <span> Poder: {{ hero.powerstats?.power }} </span>
        </div>
        <div class="col-12">
          <span> Combate: {{ hero.powerstats?.combat }} </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <span
            :class="
              hero.biography?.alignment === 'good'
                ? 'text-success'
                : 'text-danger'
            "
          >
            Alineación:
            {{ hero.biography?.alignment === "good" ? "Bueno" : "Malo" }}
          </span>
        </div>
      </div>
      <slot name="button"></slot>
    </div>
  </div>
</template>
