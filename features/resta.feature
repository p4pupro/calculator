Feature: Restar

    Resta de dos enteros

Scenario Outline: Se ingresan dos números enteros y se devuelve el resultado de la resta
    Given Dada una calculadora que resta
    When Cuando se ingresan <num1> y <num2> se resta
    Then El resultado de la resta debe ser <resultado>

    Examples:
        | num1 | num2 | resultado |
        |   3  |   7  |      -4   |
        |  -4  |  -6  |     -10   |
        | 999  |   1  |     998   |