
// Los decoradores no son mas que simples funciones 

function printToConsole( constructor: Function) {
    console.log(constructor);
}
//Ya con esto debe funcionar hay que ponerlo en el tsconfig o jsconfig 
// Esto solo funciona al momento de compilar el codigo , cuando le pone el decorador @printToConsole
@printToConsole 
export class Pokemon {

    public  publicApi: string = 'https://pokeapi.co';

     constructor(
         public name:string
     ) {}
}