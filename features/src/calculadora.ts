export class Calculadora {
    sumar(num1: number, num2: number): number {
        return (num1) + (num2);
    }

    restar(num1: number, num2: number): number {
        return (num1) - (num2);
    }

    multiplicar(num1: number, num2: number): number {
        return (num1) * (num2);
    }

    dividir(num1: number, num2: number): number {
        return (num1) / (num2);
    }

    raizCuadrada(num1: number): number {   
      return Math.sqrt(num1);
    }

}