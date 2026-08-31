

# Bedingte Ausführung

## Grundlegendes / Motivation

Bis jetzt haben wir nur Funktionen geschrieben, die
*Zuweisungs-Statements*, Aufrufe der `print`-Funktion und/oder ein
`return`-*Statement* enthielten. Beim Aufruf einer Funktion werden wie
bei der Ausführung eines Skripts nacheinander alle enthaltenen
*Statements* ausgeführt. 

Oft will man aber nur bestimmte
*Statements* ausführen. Hierfür benötigt man sogenannte
`if`-*Statements*. Diese gehören wie Funktionsdefinitionen zu den
zusammengesetzten *Statements*, da mit ihnen mehrere *Statements* zu
einem einzigen *Statement* verknüpft werden werden.

## if-Statements

Bei diesen *Statements* schreibt man eine Bedingung / *booleschen
Ausdruck* zwischen das Schlüsselwort `if` und einen Doppelpunkt. Danach
folgen eingerückte *Statements*. Diese werden nur dann ausgeführt, wenn
der Ausdruck zu `True` ausgewertet wird.

``` python, py-execute
def test_result(points: int) -> str:
    if points >= 50:
        return 'Passed'
```

``` python, py-execute
test_result(50)
```
``` python, py-execute
test_result(49)
```

Im zweiten Fall wird das return nicht erreicht. Deshalb wird auch nichts zurückgegeben.
Dies kann man ändern, indem man unter dem `if` ein zweites `return` einbaut.


``` python, py-execute
def test_result(points: int) -> str:
    if points > 50:
        return 'Passed'
    return 'Failed'
```

- Falls `points >= 50` zu `True` ausgewertet wird, wird `return 'Passed'` ausgeführt. Beim Ausführen von `return` wird die Funktion, immer verlassen. Deswegen wird `'Passed'` zurückgegeben und nichts weiter ausgeführt.
- Falls `points >= 50` zu `True` ausgewertet wird, wird `return 'Passed'` übersprungen. Es geht direkt weiter mit `return 'Failed'`




## Mehrere Alternativen

Oft will man zwischen mehr als zwei Möglichkeiten unterscheiden. Dann
können mehrere  *if-Statements* verwenden.


``` python, py-execute
def test_result(points: int) -> str:
    if points > 75:
        return 'Very good'
    if points > 50:
        return 'Passed'
    return 'Failed'
```

``` python, py-execute
test_result(80)
```
``` python, py-execute
test_result(54)
```
``` python, py-execute
test_result(2)
```


- Falls `points` größer als `75`, wird `return 'Very good'` ausgeführt. Beim Ausführen von `return` wird die Funktion, immer verlassen. Deswegen wird `'Very good'` zurückgegeben und nichts weiter ausgeführt.



- Falls zwischen `points` kleiner als `75` ist, wird der Code
```python
if points > 50:
    return 'Passed'
return 'Failed'
```

ausgeführt. Das funktioniert wie oben erklärt.

