import { Pokemon } from './decorators/pokemon-class';


// Trabajando con Decoradores 
// El decorador mas facil es el de las clases 
const charmander = new Pokemon('Charmander');

// Demstrando que funciona el bloqueo cone l decorador 
// Error: index.ts:8 Uncaught TypeError: Cannot add property customName, object is not extensible
// (Pokemon.prototype as any).customName = 'pikachu';
console.log(charmander);

charmander.savePokemonToDB(10);