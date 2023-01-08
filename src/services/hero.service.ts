import axios from "axios";
import { IResponse } from "../interfaces/hero.interfaces";

export const getHeroesNamesServices = async (name: string) => {
  const { data } = await axios.get<IResponse>(
    `https://superheroapi.com/api.php/10225623741490454/search/${name}`
  );
  const { results } = data;
  return results;
};
