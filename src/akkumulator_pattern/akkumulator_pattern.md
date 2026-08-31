# Akkumulator-Pattern

## Wiederholung

Wir haben bereits gesehen, wie man mit einer `while`-Schleife mehrere
Zahlen ausgeben kann.

``` python, py-execute
x = 1
while x <= 5:
    print(x)
    x = x + 1
```

Die Variable `x` durchläuft dabei die Zahlen von \\(1\\) bis \\(5\\). In
jedem Schleifendurchlauf wird nur der aktuelle Wert von `x` verwendet.

## Berechnung von Summen

Wenn wir die Summe der Zahlen von \\(1\\) bis \\(5\\) berechnen wollen,
benötigen wir eine zweite Variable. In dieser Variable soll immer die
Summe der bisher durchlaufenen Zahlen gespeichert sein. Vor der Ausführung der
Schleife muss die Summe also \\(0\\) sein.

``` python, py-execute
total = 0
```

In jedem Schleifendurchlauf muss die Summe um den aktuellen Wert von `x`
erhöht werden.

``` python, py-execute
x = 1
while x <= 5:
    total = total + x
    x = x + 1
```

Dadurch ist nach dem letzten Schleifendurchlauf die Summe aller Zahlen,
die `x` durchlaufen hat, in `total` gespeichert.

``` python, py-execute
print(total)
```

Durch ein zusätzliches `print`-Statement sieht man genau, wie sich die
Summe verändert.

``` python, py-execute
total = 0
x = 1
while x <= 5:
    total = total + x
    print("x = " + str(x) + " total = " + str(total))
    x = x + 1
```
