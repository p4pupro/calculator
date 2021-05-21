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
    Calculadora.prototype.raizCuadrada = function (num1) {
        return Math.sqrt(num1);
    };
    // Encuentra el valor absoluto
    Calculadora.prototype.valorAbsoluto = function (num1) {
        return num1 > 0 ? num1 : -num1;
    };
    // Método de iteración de Newton para resolver el algoritmo aritmético de raíz cuadrada
    Calculadora.prototype.sqrt = function (num1) {
        if (num1 == 1)
            return 1;
        var x0 = 1;
        var x1 = 0;
        var x2 = x0;
        var y = num1;
        // Si el error es mayor que 10 ^ -6, continúe iterando
        while (this.valorAbsoluto(x2 - y) >= 1e-5) {
            // Fórmula de núcleo iterativo
            x1 = (x0 + num1 / x0) / 2;
            x2 = x0;
            y = x1;
            x0 = x1;
        }
        return x1;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
