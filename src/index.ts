import { getPokemon } from './generics/get-pokemon';


getPokemon(4)
    .then( resp => console.log(resp.toUpperCase()))
    .catch(err => console.log(err))
    .finally( () => console.log('Fin de getPokemon'))

