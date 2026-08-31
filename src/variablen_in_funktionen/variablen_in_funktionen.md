# Variablen in Funktionen




## Zuweisungsstatements in Funktionen

Alle Funktionen, die wir bisher gesehen haben, enthalten nur ein
`return`-*Statement*, mit dem angegeben wird, was die Funktion
zurückgeben soll.

Dies muss nicht so sein. Wir können in Funktionen beliebige andere
*Statements* verwenden. Dafür schreiben wir diese ebenfalls eingerückt
unter den *Funktionskopf*. Alle *Statements*, die zu einer Funktion
gehören, nennt man *Funktionskörper*. Diese *Statements* werden beim
Funktionsaufruf der Reihe nach ausgeführt. Zum Beispiel wurden in der
folgenden Variante der Funktion `yard_to_inch` *Zuweisungsstatements*
verwendet.

``` python, py-execute
def yard_to_inch(length_in_yard: int) -> int:
    length_in_feet = 3* length_in_yard
    length_in_inch = 12 * length_in_feet
    return length_in_inch
```

Um sich die Auswertung dieser Funktion vorzustellen, ist es sinnvoll,
die *Parameter* als *lokale Variablen* zu sehen, die schon vor dem
Ausführen der *Statements* in der Funktion definiert sind. Beim
folgenden Funktionsaufruf

``` python, py-execute
yard_to_inch(2)
```

gibt es **bevor** die erste Zeile im *Funktionskörper* ausgeführt wurde,
die folgenden *Variablen*:

<div class="center">

| Name             | Wert |
|:-----------------|-----:|
| `length_in_yard` |    2 |

</div>

Nachdem die beiden ersten Statements im *Funktionskörper* ausgeführt
wurden, gibt es die folgenden *Variablen*:

<div class="center">

| Name             | Wert |
|:-----------------|-----:|
| `length_in_yard` |    2 |
| `length_in_feet` |    6 |
| `length_in_inch` |   72 |

</div>

In der letzten Zeile muss dann lediglich der *Wert* der *Variable*
`length_in_inch` zurückgegeben werden.

## Geltungsbereiche

Wenn eine *Variable* in einer Funktion *initialisiert* wird, kann sie
von außen nicht verwendet werden. Man spricht in diesem Fall von einer
*lokalen Variablen* im Unterschied zu einer *globalen Variablen*.

``` python, py-execute
yard_to_inch(2)
length_in_feet
```

Es ist aber möglich, eine *Variable*, die außerhalb einer Funktion
definiert wurde, in dieser Funktion zu verwenden.

``` python, py-execute
yard_to_feet_ratio = 3

def yard_to_feet(length_in_yard: int) -> int:
    return yard_to_feet_ratio * length_in_yard
```

``` python, py-execute
yard_to_feet(3)
```

Generell gilt, dass *Variablen*, die innerhalb eines Blocks (z. B. hier
dem Funktionskörper) definiert wurden, nur in diesem und nicht außerhalb
verwendet werden können. Wir werden solche Blöcke noch bei der
*bedingten Ausführung* und bei *Schleifen* kennenlernen.

## Shadowing

Wir können in einer Funktion[^2] eine *lokale Variable* mit einem Namen,
der schon für eine *globale Variable* genutzt wird, initialisieren. In
der Funktion kann die *globale Variable* dann nicht mehr verwendet
werden, da die *lokale Variable* diese verdeckt (verschattet).

``` python, py-execute
x = 3

def shadow(a: int) -> int:
    x = 4
    return x * a
```

``` python, py-execute
shadow(3)
```

Die *globale Variable* wird dadurch nicht geändert.

``` python, py-execute
x
```

Weil *Parameter* auch *lokale Variablen* sind, kann *Shadowing* auch
beobachtet werden, wenn der Name eines *Parameters* und der Name einer
*globalen Variable* übereinstimmen.

``` python, py-execute
x = 3

def f(x: int) -> int:
    return 2 * x
```

``` python, py-execute
f(5)
```

Bei diesem Aufruf überdeckt die *lokale Variable* `x` mit dem *Wert*
*5* die *globale Variable* `x` mit dem *Wert* *3*.



[^2]: oder einem anderen Block

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./variablen_in_funktionen_aufgaben.md)