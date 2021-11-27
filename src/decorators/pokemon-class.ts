
// Los decoradores no son mas que simples funciones 

function printToConsole( constructor: Function) {
    console.log(constructor);
}

// Para que esto sea un factory consutrcto, debe retornar una funcion 
const printToConsoleConditional = (print: boolean = false) : Function => {
    // Voy hacer un return que devuevle una funciona
    // return () => console.log('hola mundo');
    if(print) {
        return printToConsole;
    }else {
        // Envio una funcion vacia 
        return () => {}
    }
}

//Ya con esto debe funcionar hay que ponerlo en el tsconfig o jsconfig 
// Esto solo funciona al momento de compilar el codigo , cuando le pone el decorador @printToConsole
// @printToConsole 
// Puedo pmandarle argumento 
@printToConsoleConditional( false)
export class Pokemon {

    public  publicApi: string = 'https://pokeapi.co';

     constructor(
         public name:string
     ) {}
}