"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var calculadora_1 = require("../src/calculadora");
var chai_1 = require("chai");
var calculadora;
var resta;
cucumber_1.Given('Dada una calculadora que resta', function () {
    calculadora = new calculadora_1.Calculadora();
});
cucumber_1.When('Cuando se ingresan {int} y {int} se resta', function (num1, num2) {
    resta = calculadora.restar(num1, num2);
});
cucumber_1.Then('El resultado de la resta debe ser {int}', function (resultado) {
    chai_1.expect(resta).to.be.equal(resultado);
});
