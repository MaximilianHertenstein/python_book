# For-Schleifen

## Motivation

Mit einer `while`-Schleife können wir die Zahlen von \(1\) bis \(5\) folgendermaßen durchlaufen.

``` python, py-execute
i = 1
while i <= 5:
    print(i)
    i = i + 1
```

Wenn wir die Zahlen von \(1\) bis \(5\) durchlaufen wollen, müssen wir den Code entsprechend anpassen.

``` python, py-execute
i = 3
while i <= 7:
    print(i)
    i = i + 1
```

Es fällt auf, dass sich im Code außer dem konkreten Anfangs- und Endwert alles wiederholt.
Um diese Wiederholung zu vermeiden, kann man, wenn man in Einerschritten zählt, eine `for`-Schleife nutzen.

## Grundlagen

Das letzte Beispiel sieht mit einer `for`-Schleife folgendermaßen aus.

``` python, py-execute
for i in range(3, 8):
    print(i)
```

- Hinter `for` ist der Name der Variablen angegeben, die hochgezählt wird (hier: `i`).
- In den Klammern hinter `range` steht:
    - der Startwert der Variablen (hier: `3`)
    - eins mehr als der Wert, den die Variable im letzten Durchlauf hat (hier: `8`, also wird bis `7` gezählt)
- Eingerückt darunter stehen die Anweisungen, die bei jedem Schleifendurchlauf wiederholt werden sollen.
- Im Gegensatz zu `while`-Schleifen muss die Variable nicht selbst erhöht werden.

## Noch einmal Akkumulator-Pattern

Oft will man über alle *Schleifendurchläufe* hinweg ein Ergebnis
aufsammeln. Hierfür legt man vor dem Durchlaufen der *Schleife* eine
zusätzliche *Variable* an. Diese Variable nennt man auch *Akkumulator*.
Diese *Variable* kann man nun bei jeder Wiederholung anpassen.

``` python, py-execute
sum_value = 0
for i in range(1, 4):
    sum_value = sum_value + i
sum_value
```

Um genau zu sehen, was bei jedem Schritt passiert, kann man die Funktion
`print` nutzen.

``` python, py-execute
total = 0
print("Zeile 2: " + " total = " + str(total))
for i in range(1, 4):
    print("Zeile 4: i = " + str(i) + " total = " + str(total))
    total = total + i
    print("Zeile 6: i = " + str(i) + " total = " + str(total))
print(total)
```
