Feature: Suma

    Suma de dos enteros

Scenario Outline: Se ingresan dos números enteros y se devuelve el resultado de la suma
    Given Dada una calculadora que suma
    When Cuando se ingresan <num1> y <num2> se suma
    Then El resultado de la suma debe ser <resultado>

    Examples:
        | num1 | num2 | resultado |
        |   3  |   7  |      10   |
        |  -4  |  -6  |     -10   |
        | 999  |   1  |    1000   |