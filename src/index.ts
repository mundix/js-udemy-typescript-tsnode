import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';

printObject( 123);
printObject( new Date());
printObject( {a:1, b:2 , c:3});
printObject([1,2,3,4,5,6]);
printObject('Hola Mundo');

const name: string = 'Edmundo';

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction(name).toUpperCase());
// console.log(genericFunction('Hola Mundo').toFixed(2));
console.log(genericFunction(new Date()).getDate());

console.log(genericFunctionArrow(name).toLowerCase());