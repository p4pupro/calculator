Feature: Raiz

    Raíz cuadrada de un entero

Scenario Outline: Se ingresa un número entero y se devuelve la raíz cuadrada
    Given Dada una calculadora que calcula la raíz cuadrada
    When Cuando se ingresa <num1> se calcula la raíz cuadrada
    Then El resultado de la raíz cuadrada debe ser <resultado>

    Examples:
        | num1 |        resultado       |
        |   5  |     2.23606797749979   |
        |  25  |     5                  |
        | 480  |     21.908902300206645 |