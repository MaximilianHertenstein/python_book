# Aufgaben: Funktionen mit mehreren Parametern

## Quiz

### Quiz 1

{{#quiz ../quizzes/funktionen_mit_mehreren_parametern_01.toml}}

### Quiz 2

{{#quiz ../quizzes/funktionen_mit_mehreren_parametern_02.toml}}

### Quiz 3

{{#quiz ../quizzes/funktionen_mit_mehreren_parametern_03.toml}}

### Quiz 4

{{#quiz ../quizzes/funktionen_mit_mehreren_parametern_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
def rectangle_area(width: int, height: int) -> int:
    return width * height

rectangle_area(3, 4)
```

### 2. Verändere die Eingabe

Ändere nur eines der beiden Argumente, sodass der Aufruf den Wert `20` ergibt.

``` python, py-execute
def rectangle_area(width: int, height: int) -> int:
    return width * height

rectangle_area(3, 4)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Funktion die Summe von drei Zahlen berechnet.

``` python, py-execute
def sum_of_three(a: int, b: int, c: int) -> int:
    return ____

sum_of_three(1, 2, 3)
```

### 4. Fehler finden und reparieren

Zwischen den Parametern fehlt ein Komma. Ergänze es.

``` python, py-execute
def sum_of_squares(p_a: int p_b: int) -> int:
    return p_a * p_a + p_b * p_b

sum_of_squares(2, 3)
```

### 5. Passe die Funktion an

Passe die Funktion so an, dass sie keinen Parameter hat und immer den Wert `1` zurückgibt.

``` python, py-execute
def constant_zero() -> int:
    return 0

constant_zero()
```
