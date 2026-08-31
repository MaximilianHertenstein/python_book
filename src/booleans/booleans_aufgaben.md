# Aufgaben: Booleans

## Quiz

### Quiz 1

{{#quiz ../quizzes/booleans_01.toml}}

### Quiz 2

{{#quiz ../quizzes/booleans_02.toml}}

### Quiz 3

{{#quiz ../quizzes/booleans_03.toml}}

### Quiz 4

{{#quiz ../quizzes/booleans_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
5 > 3 and 2 == 2
```

### 2. Verändere die Eingabe

Ändere nur eine Zahl, sodass der Ausdruck zu `False` ausgewertet wird.

``` python, py-execute
5 > 3 and 2 == 2
```

### 3. Ergänze die Lücke

Ergänze die Lücke mit einem Vergleichsoperator, sodass der Ausdruck zu `True` ausgewertet wird.

``` python, py-execute
age = 16
age ____ 18
```

### 4. Fehler finden und reparieren

Ergänze das fehlende Zeichen im Funktionskopf.

``` python, py-execute
def is_adult(age: int) -> bool
    return age >= 18

is_adult(20)
```

### 5. Prüfe deine Idee

Vergleiche die beiden Ausdrücke und erkläre, warum die Klammern das Ergebnis verändern.

``` python, py-execute
True or False and False
```

``` python, py-execute
(True or False) and False
```
