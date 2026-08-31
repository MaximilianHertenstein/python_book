# Aufgaben: if-else

## Quiz

### Quiz 1

{{#quiz ../quizzes/bedingte_ausfuehrung_2_01.toml}}

### Quiz 2

{{#quiz ../quizzes/bedingte_ausfuehrung_2_02.toml}}

### Quiz 3

{{#quiz ../quizzes/bedingte_ausfuehrung_2_03.toml}}

### Quiz 4

{{#quiz ../quizzes/bedingte_ausfuehrung_2_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
def test_result_print(points: int) -> None:
    if points > 50:
        print('Passed')
    else:
        print('Failed')

test_result_print(30)
```

### 2. Fehler finden und reparieren

Ohne `else` wird bei einer bestandenen Prüfung zusätzlich `'Failed'` ausgegeben. Ergänze das fehlende `else`.

``` python, py-execute
def test_result_print(points: int) -> None:
    if points > 50:
        print('Passed')
    print('Failed')

test_result_print(80)
```

### 3. Verändere die Eingabe

Ändere nur das Argument, sodass `'Failed'` ausgegeben wird.

``` python, py-execute
def test_result_print(points: int) -> None:
    if points > 50:
        print('Passed')
    else:
        print('Failed')

test_result_print(80)
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die verschachtelte Version zu einer einzigen Bedingung vereinfacht wird.

``` python, py-execute
def is_teenager_nested(age: int) -> bool:
    if age >= 13:
        if age < 20:
            return True
        else:
            return False
    else:
        return False

def is_teenager(age: int) -> bool:
    return ____

is_teenager(15)
```

### 5. Prüfe deine Idee

Vergleiche die Ergebnisse und erkläre, warum beide Funktionen dasselbe berechnen.

``` python, py-execute
def is_teenager_nested(age: int) -> bool:
    if age >= 13:
        if age < 20:
            return True
        else:
            return False
    else:
        return False

is_teenager_nested(15)
```

``` python, py-execute
def is_teenager_shorter(age: int) -> bool:
    return age >= 13 and age < 20

is_teenager_shorter(15)
```
