import { Given, When, Then } from '@cucumber/cucumber';
import { Calculadora } from '../src/calculadora';
import { expect } from 'chai';

let calculadora: Calculadora;
let raizCuadrada: number;


Given('Dada una calculadora que calcula la raíz cuadrada', () => {
    calculadora = new Calculadora();
});


When('Cuando se ingresa {int} se calcula la raíz cuadrada',  (num1: number) => {
    raizCuadrada = calculadora.sqrt(num1);    
});


Then('El resultado de la raíz cuadrada debe ser {float}',  (resultado: number)  => {
    expect(raizCuadrada).to.be.equal(resultado);
});