# Aufgaben: Listen verändern

## Quiz

### Quiz 1

{{#quiz ../quizzes/listen_aendern_01.toml}}

### Quiz 2

{{#quiz ../quizzes/listen_aendern_02.toml}}

### Quiz 3

{{#quiz ../quizzes/listen_aendern_03.toml}}

### Quiz 4

{{#quiz ../quizzes/listen_aendern_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
xs = [1, 2, 3]
xs.append(4)
xs
```

### 2. Verändere die Eingabe

Ändere nur den Index, sodass das mittlere Element ersetzt wird.

``` python, py-execute
xs = [1, 2, 3]
xs[0] = 99
xs
```

### 3. Fehler finden und reparieren

`add_one` hat keinen brauchbaren Rückgabewert. Repariere die letzten beiden Zeilen, sodass `xs` direkt verwendet wird.

``` python, py-execute
def add_one(xs: list[int]) -> None:
    xs.append(1)

xs = [1, 2, 3]
result = add_one(xs)
result.append(4)
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Funktion das erste Element der Liste auf `0` setzt.

``` python, py-execute
def set_first_zero(xs: list[int]) -> None:
    ____

xs = [5, 6, 7]
set_first_zero(xs)
xs
```

### 5. Prüfe deine Idee

Sage voraus, welchen Wert `xs` am Ende hat, und erkläre warum.

``` python, py-execute
xs = [1, 2, 3]
ys = xs
ys[0] = 100
xs
```
