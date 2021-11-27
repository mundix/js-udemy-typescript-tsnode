
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

// Crear DEcorador que me bloquee la clase y no se pueda expandir 
const bloquearPrototipo = function(constructor: Function) {
    // Se puede bloquear con esto
    // Va a prevenir que alguien haga una expansion o metodos de una clase  
    Object.seal( constructor);
    Object.seal( constructor.prototype);
}

//Ya con esto debe funcionar hay que ponerlo en el tsconfig o jsconfig 
// Esto solo funciona al momento de compilar el codigo , cuando le pone el decorador @printToConsole
// @printToConsole 
// Puedo pmandarle argumento 
//Se puede poenr tantos decoradores como desee, 
@bloquearPrototipo 
@printToConsoleConditional( true)
export class Pokemon {

    public  publicApi: string = 'https://pokeapi.co';

     constructor(
         public name:string
     ) {}
}