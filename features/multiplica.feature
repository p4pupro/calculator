Feature: Multiplicar

    Multiplicar dos enteros

Scenario Outline: Se ingresan dos números enteros y se devuelve el resultado de la multiplicación
    Given Dada una calculadora que multiplica
    When Cuando se ingresan <num1> y <num2> se multiplica
    Then El resultado de la multiplicación debe ser <resultado>

    Examples:
        | num1 | num2 | resultado |
        |   3  |   7  |      21   |
        |  -4  |  -6  |     -24   |
        |   7  |   7  |      49   |