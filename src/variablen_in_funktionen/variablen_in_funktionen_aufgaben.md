# Aufgaben: Variablen in Funktionen

## Quiz

### Quiz 1

{{#quiz ../quizzes/variablen_in_funktionen_01.toml}}

### Quiz 2

{{#quiz ../quizzes/variablen_in_funktionen_02.toml}}

### Quiz 3

{{#quiz ../quizzes/variablen_in_funktionen_03.toml}}

### Quiz 4

{{#quiz ../quizzes/variablen_in_funktionen_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
def scale(x: int) -> int:
    factor = 3
    return factor * x

scale(4)
```

### 2. Prüfe deine Idee

Führe den Code aus und erkläre, warum die letzte Zeile einen Fehler erzeugt.

``` python, py-execute
def scale(x: int) -> int:
    factor = 3
    return factor * x

scale(4)
factor
```

### 3. Verändere die Eingabe

Ändere nur den Wert von `factor` im Funktionskörper, sodass `scale(4)` den Wert `20` ergibt.

``` python, py-execute
def scale(x: int) -> int:
    factor = 3
    return factor * x

scale(4)
```

### 4. Fehler finden und reparieren

Sage zuerst voraus, welchen Wert `x` in der letzten Zeile hat. Führe den Code danach aus, um deine Vermutung zu prüfen.

``` python, py-execute
x = 3

def shadow(a: int) -> int:
    x = 4
    return x * a

shadow(2)
x
```

### 5. Ergänze die Lücke

Ergänze die Lücke im Funktionskörper, sodass die lokale Variable `half` die Hälfte von `x` speichert und zurückgegeben wird.

``` python, py-execute
def half_of(x: int) -> int:
    half = ____
    return half

half_of(10)
```
