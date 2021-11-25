import axios from 'axios';
import { Pokemon } from '../interfaces';

// Devuelve tipod e dato Promice por que es un async , de tipo number 
// export const getPokemon = async( pokemonId: number): Promise<number> => {
// export const getPokemon = async( pokemonId: number): Promise<string> => {
export const getPokemon = async( pokemonId: number): Promise<Pokemon> => {
    const url:string = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    // const resp = await axios.get<Pokemon>(url);
    const {data} = await axios.get<Pokemon>(url);
    // console.log(resp.data.abilities[0].ability.name);

    // return 1;
    return data;
}