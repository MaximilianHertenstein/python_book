# Aufgaben: Bedingte Ausführung

## Quiz

### Quiz 1

{{#quiz ../quizzes/bedingte_ausfuehrung_01.toml}}

### Quiz 2

{{#quiz ../quizzes/bedingte_ausfuehrung_02.toml}}

### Quiz 3

{{#quiz ../quizzes/bedingte_ausfuehrung_03.toml}}

### Quiz 4

{{#quiz ../quizzes/bedingte_ausfuehrung_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
def test_result(points: int) -> str:
    if points > 50:
        return 'Passed'
    return 'Failed'

test_result(45)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass die Funktion `'Passed'` zurückgibt.

``` python, py-execute
def test_result(points: int) -> str:
    if points > 50:
        return 'Passed'
    return 'Failed'

test_result(45)
```

### 3. Fehler finden und reparieren

Bei `test_result(49)` wird `None` statt `'Failed'` zurückgegeben. Ergänze die fehlende Zeile.

``` python, py-execute
def test_result(points: int) -> str:
    if points >= 50:
        return 'Passed'

test_result(49)
```

### 4. Ergänze die Lücke

Ergänze die Bedingung, sodass ab `76` Punkten `'Very good'` zurückgegeben wird.

``` python, py-execute
def test_result(points: int) -> str:
    if points ____ 75:
        return 'Very good'
    if points > 50:
        return 'Passed'
    return 'Failed'

test_result(80)
```

### 5. Prüfe deine Idee

Sage voraus, was bei den drei Aufrufen jeweils zurückgegeben wird, bevor du sie ausführst.

``` python, py-execute
def test_result(points: int) -> str:
    if points > 75:
        return 'Very good'
    if points > 50:
        return 'Passed'
    return 'Failed'

test_result(80)
```

``` python, py-execute
test_result(54)
```

``` python, py-execute
test_result(2)
```
