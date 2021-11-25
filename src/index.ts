import { getPokemon } from './generics/get-pokemon';


getPokemon(4)
    // .then( resp => console.log(resp))
    .then( pokemon => console.log(pokemon.sprites.front_default))
    .catch(err => console.log(err))
    .finally( () => console.log('Fin de getPokemon'))

