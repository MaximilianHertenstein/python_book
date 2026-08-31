# Aufgaben: Funktionen 2

## Quiz

### Quiz 1

{{#quiz ../quizzes/funktionen_2_01.toml}}

### Quiz 2

{{#quiz ../quizzes/funktionen_2_02.toml}}

### Quiz 3

{{#quiz ../quizzes/funktionen_2_03.toml}}

### Quiz 4

{{#quiz ../quizzes/funktionen_2_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
def yard_to_feet(length_in_yard: int) -> int:
    return 3 * length_in_yard

def feet_to_inch(length_in_feet: int) -> int:
    return 12 * length_in_feet

feet_to_inch(yard_to_feet(2))
```

### 2. Verändere die Eingabe

Ändere nur das Argument von `yard_to_feet`, sodass der verkettete Aufruf den Wert `72` ergibt.

``` python, py-execute
def yard_to_feet(length_in_yard: int) -> int:
    return 3 * length_in_yard

def feet_to_inch(length_in_feet: int) -> int:
    return 12 * length_in_feet

feet_to_inch(yard_to_feet(1))
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `yard_to_inch` zuerst in Fuß und danach in Zoll umrechnet.

``` python, py-execute
def yard_to_feet(length_in_yard: int) -> int:
    return 3 * length_in_yard

def feet_to_inch(length_in_feet: int) -> int:
    return 12 * length_in_feet

def yard_to_inch(length_in_yard: int) -> int:
    return ____

yard_to_inch(2)
```

### 4. Fehler finden und reparieren

Die Klammern der verketteten Funktionsaufrufe passen nicht zusammen. Repariere den Ausdruck.

``` python, py-execute
def yard_to_feet(length_in_yard: int) -> int:
    return 3 * length_in_yard

def feet_to_inch(length_in_feet: int) -> int:
    return 12 * length_in_feet

feet_to_inch(yard_to_feet(2)
```

### 5. Prüfe deine Idee

Erkläre, warum `yard_to_feet(2 + 2)` denselben Wert wie `yard_to_feet(4)` ergibt.

``` python, py-execute
def yard_to_feet(length_in_yard: int) -> int:
    return 3 * length_in_yard

yard_to_feet(2 + 2)
```
