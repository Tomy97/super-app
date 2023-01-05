import axios from "axios";

export const getHeroesNamesServices = async (name: string) => {
  const { data } = await axios.get(
    `https://superheroapi.com/api.php/10225623741490454/search/${name}`
  );

  const { results } = data;
  return results;
};
