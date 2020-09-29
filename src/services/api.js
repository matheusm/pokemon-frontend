import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=6&offset=7",
});

export const pokeDetail = (pokeName) => {
  return axios.create({
    baseURL: `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
  });
};
