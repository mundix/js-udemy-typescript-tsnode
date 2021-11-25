import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Hero, Villain } from './interfaces'; //Aqui se pueden poenr todo los interface enun solo archivo
// import { Hero } from './interfaces/hero';
// import { Villain } from './interfaces/villain';

// printObject( 123);
// printObject( new Date());
// printObject( {a:1, b:2 , c:3});
// printObject([1,2,3,4,5,6]);
// printObject('Hola Mundo');

// const name: string = 'Edmundo';

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction(name).toUpperCase());
// console.log(genericFunction(new Date()).getDate());
// console.log(genericFunctionArrow(name).toLowerCase());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);