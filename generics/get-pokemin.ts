import axios from 'axios';

export const getPokemon = async( pokemonId: number) => {
    const url:string = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const resp = await axios.get(url);
    console.log(resp);

    return 1;
}