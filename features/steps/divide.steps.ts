import { Given, When, Then } from '@cucumber/cucumber';
import { Calculadora } from '../src/calculadora';
import { expect } from 'chai';

let calculadora: Calculadora;
let divide: number;


Given('Dada una calculadora que divide', () => {
    calculadora = new Calculadora();
});


When('Cuando se ingresan {int} y {int} se dividen',  (num1: number, num2: number) => {
    divide = calculadora.dividir(num1, num2);    
});


Then('El resultado de la división debe ser {int}',  (resultado: number)  => {
    expect(divide).to.be.equal(resultado);
});