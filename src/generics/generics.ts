
export const printObject = (argument: any) => {
    console.log(argument);
}

// export function genericFunction( argument: any) {
// Para tipo de datos generico se le pone <> y dentro una T , peude tener letras que significa que es generico 
// Tambien eude tener <TYPE> , puede ser cualqueir palabra que nos ea reservada o cualquier letra 
// El <T> es recibier un tipod e dato del argumeto
// El argumento tambien tenra un tipoid e dato T , y el retorono es de tipo generico T 
export function genericFunction<T>( argument: T): T {
    return argument;
}

// export const genericFunctionArrow = <T> (argument: T) => {
//         return argument;
// }
export const genericFunctionArrow = <T> (argument: T) => argument;