"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var calculadora_1 = require("../src/calculadora");
var chai_1 = require("chai");
var calculadora;
var raizCuadrada;
cucumber_1.Given('Dada una calculadora que calcula la raíz cuadrada', function () {
    calculadora = new calculadora_1.Calculadora();
});
cucumber_1.When('Cuando se ingresa {int} se calcula la raíz cuadrada', function (num1) {
    raizCuadrada = calculadora.sqrt(num1);
});
cucumber_1.Then('El resultado de la raíz cuadrada debe ser {float}', function (resultado) {
    chai_1.expect(raizCuadrada).to.be.equal(resultado);
});
