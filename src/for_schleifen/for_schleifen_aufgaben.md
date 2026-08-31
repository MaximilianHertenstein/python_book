# Aufgaben: For-Schleifen

## Quiz

### Quiz 1

{{#quiz ../quizzes/for_schleifen_01.toml}}

### Quiz 2

{{#quiz ../quizzes/for_schleifen_02.toml}}

### Quiz 3

{{#quiz ../quizzes/for_schleifen_03.toml}}

### Quiz 4

{{#quiz ../quizzes/for_schleifen_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
for i in range(2, 6):
    print(i)
```

### 2. Verändere die Eingabe

Ändere nur die Werte in `range`, sodass die Zahlen von 5 bis 9 ausgegeben werden.

``` python, py-execute
for i in range(2, 6):
    print(i)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `sum_value` am Ende die Summe der Zahlen von 1 bis 5 enthält.

``` python, py-execute
sum_value = 0
for i in range(1, ____):
    sum_value = sum_value + i
sum_value
```

### 4. Fehler finden und reparieren

Ergänze die fehlende Initialisierung von `total`.

``` python, py-execute
for i in range(1, 4):
    total = total + i
total
```

### 5. Prüfe deine Idee

Vergleiche die while- und die for-Version und erkläre, warum beide dasselbe berechnen.

``` python, py-execute
i = 3
while i <= 7:
    print(i)
    i = i + 1
```

``` python, py-execute
for i in range(3, 8):
    print(i)
```
