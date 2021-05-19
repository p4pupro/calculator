Feature: Suma

    Suma de dos enteros

Scenario Outline: Se ingresan dos números enteros
    Given Dada una calculadora
    When Cuando se ingresan <num1> y <num2>
    Then El resultado debe ser <resultado>

    Examples:
        | num1 | num2 | resultado |
        |   3  |   7  |      10   |
        |  -4  |  -6  |     -10   |
        | 999  |   1  |    1000   |