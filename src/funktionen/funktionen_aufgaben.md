# Aufgaben: Funktionen

## Quiz

### Quiz 1

{{#quiz ../quizzes/funktionen_01.toml}}

### Quiz 2

{{#quiz ../quizzes/funktionen_02.toml}}

### Quiz 3

{{#quiz ../quizzes/funktionen_03.toml}}

### Quiz 4

{{#quiz ../quizzes/funktionen_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
def double(x: int) -> int:
    return x + x

double(6)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass der Funktionsaufruf den Wert `30` ergibt.

``` python, py-execute
def triple(x: int) -> int:
    return 3 * x

triple(5)
```

### 3. Passe die Funktion an

Ändere die Funktion so, dass sie das Quadrat von `x` statt des Doppelten berechnet.

``` python, py-execute
def double(x: int) -> int:
    return x + x

double(4)
```

### 4. Fehler finden und reparieren

Der Funktionskopf hat einen SyntaxError, weil der Doppelpunkt fehlt. Ergänze das fehlende Zeichen.

``` python, py-execute
def square(x: int) -> int
    return x * x

square(3)
```

### 5. Ergänze die Lücke

Ergänze die Lücke im Funktionskörper, sodass `feet_to_yard` einen Wert in Fuß korrekt in Yard umrechnet (ein Yard sind drei Fuß).

``` python, py-execute
def feet_to_yard(length_in_feet: int) -> int:
    return ____

feet_to_yard(9)
```
