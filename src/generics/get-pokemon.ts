import axios from 'axios';
import { Pokemon } from '../interfaces';

// Devuelve tipod e dato Promice por que es un async , de tipo number 
// export const getPokemon = async( pokemonId: number): Promise<number> => {
export const getPokemon = async( pokemonId: number): Promise<string> => {
    const url:string = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const resp = await axios.get(url);
    console.log(resp.data);

    // return 1;
    return 'Hola mundo';
}