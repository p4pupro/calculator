"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (num1, num2) {
        return (num1) + (num2);
    };
    Calculadora.prototype.restar = function (num1, num2) {
        return (num1) - (num2);
    };
    Calculadora.prototype.multiplicar = function (num1, num2) {
        return (num1) * (num2);
    };
    Calculadora.prototype.dividir = function (num1, num2) {
        return (num1) / (num2);
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
