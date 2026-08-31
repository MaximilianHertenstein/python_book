

# if-else

## Grundlegendes / Motivation

Im letzten Kapitel haben wir Funktionen geschrieben, die in verschiedenen Fällen, unterschiedliche Werte zurückgegeben haben.

``` python, py-execute
def test_result(points: int) -> str:
    if points > 50:
        return P'assed'
    return 'Failed'
```

``` python, py-execute
test_result(30)
```
``` python, py-execute
test_result(53)
```

Wir wollen die Funktion nochmal mit `print` statt `return` schreiben.


``` python, py-execute
def test_result_print(points: int) -> str:
    if points > 50:
        print('Passed')
    print('Failed')
```

``` python, py-execute
test_result_print(30)
```
``` python, py-execute
test_result_print(53)
```

Im zweiten Beispiel ist die Bedingung `points > 50` erfüllt. Deshalb wird
`print('Passed')` ausgeführt. im Gegensatz zu `return` wird bei `print` die Funktion **nicht** automatisch verlassen. Deshalb wird danach auch noch `print('Failed')` ausgeführt.

Eigentlich soll `print('Failed')` nur ausgeführt werden, wenn `points > 50` zu `False` ausgewertet wird.

Dies kann mit *if-else-Statements* erreicht werden.

## if-else-Statements


Bei diesen *Statements* schreibt nach den Statements die unter dem `if` eingerückt sind, auf der Höhe von `if` das Schlüsselwort `else` und einen Doppelpunkt. Danach
folgen eingerückte *Statements*. Diese werden nur dann ausgeführt, wenn
der Ausdruck hinter `if` zu `False` ausgewertet wird.

``` python, py-execute
def test_result_print(points: int) -> str:
    if points > 50:
        print('Passed')
    else:
        print('Failed')
```

``` python, py-execute
test_result_print(30)
```
``` python, py-execute
test_result_print(53)
```



## Mehrere Alternativen

Oft will man zwischen mehr als zwei Möglichkeiten unterscheiden. Dann
können verschachtelte *if* / *if-else-Statements* verwendet werden.
Hierfür schreibt man nach `if` und/oder `else` ein eigenes eingerücktes
*if-else-Statement*.

``` python, py-execute
def test_result_print_better(points: int) -> str:
    if points > 75:
        print('Great')
    else:
        if points > 50:
            print('Passed')
        else:
            print('Failed')
```


``` python, py-execute
test_result_print(80)
```
``` python, py-execute
test_result_print(53)
```
``` python, py-execute
test_result_print(2)
```

- Wenn `points` größer als `75` ist, wird `print('Great')` ausgeführt. Der Code hinter `else` wird übersprungen.
- Ansonsten wird der folgende Code ausgeführt:

```python
if points > 50:
    print('Passed')
else:
    print('Failed')
```

Dies entspricht genau dem Code, den wir oben gesehen haben.



## Vermeidung von Verschachtelung

Oft können verschachtelte *if-Statements* durch eine geschickte
Verwendung von *logischen Operatoren* vermieden werden.

``` python, py-execute
def is_teenager_nested(age: int) -> bool:
    if age >= 13:
        if age < 20:
            return True
        else:
            return False
    else:
        return False
```

Die Bedingungen können hier direkt kombiniert werden.

``` python, py-execute
def is_teenager(age: int) -> bool:
    if age >= 13 and age < 20:
        return True
    else:
        return False
```

Diese Funktion kann sogar noch weiter vereinfacht werden.

``` python, py-execute
def is_teenager_shorter(age: int) -> bool:
    return age >= 13 and age < 20
```
