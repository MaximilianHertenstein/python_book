# Aufgaben: Ganzzahlige Division

## Quiz

### Quiz 1

{{#quiz ../quizzes/ganzzahlige_division_01.toml}}

### Quiz 2

{{#quiz ../quizzes/ganzzahlige_division_02.toml}}

### Quiz 3

{{#quiz ../quizzes/ganzzahlige_division_03.toml}}

### Quiz 4

{{#quiz ../quizzes/ganzzahlige_division_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
17 // 4
```

### 2. Verändere die Eingabe

Ändere nur den Dividenden, sodass der Rest genau `0` ist.

``` python, py-execute
17 % 4
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Gleichung für `dividend` und `divisor` immer aufgeht.

``` python, py-execute
dividend = 23
divisor = 6
quotient = dividend // divisor
rest = dividend % divisor
dividend == ____
```

### 4. Fehler finden und reparieren

Das Ergebnis der letzten Zeile stimmt nicht mit `dividend` überein. Ändere den Operator in Zeile 3, sodass die Gleichung wieder aufgeht.

``` python, py-execute
dividend = 20
divisor = 3
quotient = dividend / divisor
rest = dividend % divisor
quotient * divisor + rest
```

### 5. Prüfe deine Idee

Sage voraus, was `quotient` und `rest` jeweils sind, bevor du ausführst.

``` python, py-execute
dividend = 29
divisor = 7
quotient = dividend // divisor
rest = dividend % divisor
print(quotient)
print(rest)
```
