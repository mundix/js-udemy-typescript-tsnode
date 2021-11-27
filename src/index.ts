import { Pokemon } from './decorators/pokemon-class';


// Trabajando con Decoradores 
// El decorador mas facil es el de las clases 
const charmander = new Pokemon('Charmander');

// Demstrando que funciona el bloqueo cone l decorador 
(Pokemon.prototype as any).customName = 'pikachu';
console.log(charmander);