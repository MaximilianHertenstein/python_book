# For-Schleifen

## Schleifen

Mit Hilfe von `if`-*Statements* kann festgelegt werden, dass bestimmte
*Statements* nur dann ausgeführt werden, wenn eine Bedingung erfüllt
ist. In den folgenden Kapiteln beschäftigen wir uns mit *Schleifen*. Mit
diesen können *Statements* wiederholt ausgeführt werden.

## Grundlagen

Die erste *Schleife*, die wir kennenlernen, ist die `for`-*Schleife*.
Diese wird genutzt, wenn die Anzahl der Wiederholungen im Voraus bekannt
ist.

Bei einer `for`-*Schleife* schreibt man im sogenannten *Schleifenkopf*
zwischen die Schlüsselwörter `for` und `in` einen *Variablennamen*.
Diese *Variable* wird *Zählervariable* genannt. Anschließend folgt das
Schlüsselwort `range` und in Klammern die gewünschte Anzahl an
Wiederholungen. Der *Schleifenkopf* wird mit einem Doppelpunkt
abgeschlossen.

Anschließend folgen eingerückt die *Statements*, die wiederholt werden
sollen. In diesen *Statements* kann die *Zählervariable* genutzt werden.

Bei der ersten Ausführung der eingerückten *Statements* hat die
*Zählervariable* den Wert `0`. Bei jeder der folgenden Wiederholungen
wird der *Wert* der *Zählervariable* um eins erhöht, bis genügend
Wiederholungen durchgeführt sind.

``` python, py-execute
for i in range(3):
    print(i)
```

Die *Zählervariable* startet also bei $`\mathtt{0}`$ und ist im letzten
Schritt um $`1`$ kleiner als die Anzahl der Wiederholungen.

## Anpassung des Startwerts

Es ist auch möglich den Startwert anzupassen. Hierfür schreibt man zwei
*Ausdrücke* in die Klammern hinter `range`.

``` python, py-execute
for i in range(2, 6):
    print(i)
```

Das erste *Argument* ist der *Startwert*. Das zweite *Argument* ist um
eins höher als der höchste *Wert*, den die *Zählervariable* erreichen
soll.

## Das Akkumulator-Pattern

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
sum_value = 0
for i in range(1, 4):
    sum_value = sum_value + i
    print('i = ' + str(i))
    print('sum = ' + str(sum_value))
    print('————-')
sum_value
```
