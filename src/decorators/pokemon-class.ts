
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

// Voy a crear un factory decorator  que retorna otra function
function CheckValidPokemonId() {
    // target: cierto tipos de argumentos , depende de lo que coloquemos
    // propertyKey: la llave del decorador, el nombre de lmetodo 
    // descriptor:  
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log({target, propertyKey, descriptor});
        
        // Este codig sobrescribe el cuerpo de la function  y con esto es que haremos la condicion
        // descriptor.value = () => console.log('Hola mundo');

        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if(id < 1 || id > 800) {
                return console.error('El id debe estar dentro del rango 1 y 800');
            }else{
                // para ejecutar el metodo nuevament debo definir originalMethod antes del descriptor 
                return originalMethod(id);
            }
        }
    }
}

//Ya con esto debe funcionar hay que ponerlo en el tsconfig o jsconfig 
// Esto solo funciona al momento de compilar el codigo , cuando le pone el decorador @printToConsole
// @printToConsole 
// Puedo pmandarle argumento 
//Se puede poenr tantos decoradores como desee, 
@bloquearPrototipo 
@printToConsoleConditional( false)
export class Pokemon {

    public  publicApi: string = 'https://pokeapi.co';

     constructor(
         public name:string
     ) {}

    //   se le pone al metodos el decoretor, por que es un factory decorator
     @CheckValidPokemonId()
     public savePokemonToDB(id: number) {
         console.log(`Pokemon guardado a la base de datos ${id}`);
     }
}