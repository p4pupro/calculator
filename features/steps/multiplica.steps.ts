import { Given, When, Then } from '@cucumber/cucumber';
import { Calculadora } from '../src/calculadora';
import { expect } from 'chai';

let calculadora: Calculadora;
let multiplica: number;


Given('Dada una calculadora que multiplica', () => {
    calculadora = new Calculadora();
});


When('Cuando se ingresan {int} y {int} se multiplica',  (num1: number, num2: number) => {
    multiplica = calculadora.multiplicar(num1, num2);    
});


Then('El resultado de la multiplicación debe ser {int}',  (resultado: number)  => {
    expect(multiplica).to.be.equal(resultado);
});