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

    // Encuentra el valor absoluto
    valorAbsoluto(num1: number): number {
        return num1 > 0 ? num1 : -num1;
    }

    // Método de iteración de Newton para resolver el algoritmo aritmético de raíz cuadrada
    sqrt(num1: number): number {
        if(num1 == 1)
            return 1;

        let x0: number = 1;       
        let x1: number = 0;
        let x2: number = x0;
        let y: number = num1;
        // Si el error es mayor que 10 ^ -5, continúe iterando
        while (this.valorAbsoluto(x2 - y) >= 1e-5) {
            // Fórmula de núcleo iterativo
            x1 = (x0 + num1/x0)/2;
            x2 = x0;
            y = x1;
            x0 = x1;
        }
        return x1;   
    }
 
}