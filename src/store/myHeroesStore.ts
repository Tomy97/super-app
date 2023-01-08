import { defineStore } from "pinia";
import { ref } from "vue";
import { IHero, IResponse } from "./../interfaces/hero.interfaces";

export const useMyHeroesStore = defineStore("myteam", () => {
  const myTeam = ref<IHero[]>([]);

  const addMyTeam = (data: IHero) => {
    localStorage.setItem("myTeam", JSON.stringify(data));
    let setData: any = localStorage.getItem("myTeam");
    myTeam.value.push(setData);
  };

  const removeMyTeam = (id?: string) => {};

  return {
    myTeam,
    addMyTeam,
    removeMyTeam
  };
});
