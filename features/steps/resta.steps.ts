import { Given, When, Then } from '@cucumber/cucumber';
import { Calculadora } from '../src/calculadora';
import { expect } from 'chai';

let calculadora: Calculadora;
let resta: number;


Given('Dada una calculadora que resta', () => {
    calculadora = new Calculadora();
});


When('Cuando se ingresan {int} y {int} se resta',  (num1: number, num2: number) => {
    resta = calculadora.resta(num1, num2);    
});


Then('El resultado de la resta debe ser {int}',  (resultado: number)  => {
    expect(resta).to.be.equal(resultado);
});