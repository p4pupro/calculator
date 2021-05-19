Feature: Dividir

    Divide dos enteros

Scenario Outline: Se ingresan dos números enteros y se devuelve el resultado de la División
    Given Dada una calculadora que divide
    When Cuando se ingresan <num1> y <num2> se dividen
    Then El resultado de la división debe ser <resultado>

    Examples:
        | num1 | num2 | resultado |
        |  10  |   2  |      5    |
        |   8  |   2  |      4    |
        | 1000 | 1000 |      1    |