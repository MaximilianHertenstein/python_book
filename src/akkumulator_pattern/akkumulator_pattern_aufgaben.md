# Aufgaben: Akkumulator-Pattern

## Quiz

### Quiz 1

{{#quiz ../quizzes/akkumulator_pattern_01.toml}}

### Quiz 2

{{#quiz ../quizzes/akkumulator_pattern_02.toml}}

### Quiz 3

{{#quiz ../quizzes/akkumulator_pattern_03.toml}}

### Quiz 4

{{#quiz ../quizzes/akkumulator_pattern_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
total = 0
x = 1
while x <= 4:
    total = total + x
    x = x + 1
total
```

### 2. Fehler finden und reparieren

Ergänze die fehlende Initialisierung von `total`.

``` python, py-execute
x = 1
while x <= 4:
    total = total + x
    x = x + 1
total
```

### 3. Verändere die Eingabe

Ändere nur die Obergrenze der Schleife, sodass `total` am Ende `15` ist (Summe von 1 bis 5).

``` python, py-execute
total = 0
x = 1
while x <= 4:
    total = total + x
    x = x + 1
total
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass `product` am Ende das Produkt der Zahlen von 1 bis 4 enthält.

``` python, py-execute
product = 1
x = 1
while x <= 4:
    product = ____
    x = x + 1
product
```

### 5. Prüfe deine Idee

Notiere für jeden Schleifendurchlauf den Wert von `total`, bevor du den Code ausführst.

``` python, py-execute
total = 0
x = 1
while x <= 3:
    total = total + x
    print("x = " + str(x) + " total = " + str(total))
    x = x + 1
```
