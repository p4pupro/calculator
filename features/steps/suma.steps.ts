import { Given, When, Then } from '@cucumber/cucumber';
import { Calculadora } from '../src/calculadora';
import { expect } from 'chai';

let calculadora: Calculadora;
let sum: number;


Given('Dada una calculadora', () => {
    calculadora = new Calculadora();
});


When('Cuando se ingresan {int} y {int}',  (num1: number, num2: number) => {
    sum = calculadora.sum(num1, num2);    
});


Then('El resultado debe ser {int}',  (resultado: number)  => {
    expect(sum).to.be.equal(resultado);
});