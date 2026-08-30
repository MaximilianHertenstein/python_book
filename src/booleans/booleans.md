``` python, py-execute
def full_age(age: int) -> bool:
    return age > 17
```

# Booleans

In diesem Kapitel beschäftigen wir uns mit Wahrheitswerten (*Booleans*).
Diese sind im Gegensatz zu *Integern* und *Strings* zumindest in der
Hinsicht leichter zu verstehen, dass es nur zwei *Booleans* gibt:

- Wahr (`True`)

- Falsch (`False`)

## Vergleiche

Wir erhalten ein *Boolean*, wenn wir zwei *Werte* miteinander
vergleichen.

``` python, py-execute
2 < 3
2 * 3 == 3 * 2
'hello' == 'hello!'
2 != 2
```

Die wichtigsten *Vergleichsoperatoren* sind in Tabelle
<a href="#table:vgl_op" data-reference-type="ref"
data-reference="table:vgl_op">[table:vgl_op]</a> aufgeführt.

<span id="table:vgl_op" data-label="table:vgl_op"></span>

## Vergleiche von Werten mit unterschiedlichen Typen

Zwei *Werte* die verschiedene *Typen* haben, können nicht gleich sein.

``` python, py-execute
1 == '1'
```

## Variablen

Wie alle *Werte* können wir *Booleans* in *Variablen* speichern.

``` python, py-execute
seven_is_five_plus_three = 7 == 5 + 3
seven_is_five_plus_three
```

## Funktionen

Natürlich können *Booleans* auch *Argumente* oder *Rückgabewerte* von
Funktionen sein.

``` python, py-execute
def full_age(age: int) -> bool:
    return age > 17
```

``` python, py-execute
full_age(17)
full_age(18)
```

## Boolesche Ausdrücke und Bedingungen

Ausdrücke, die zu einem *Boolean* ausgewertet werden, nennt man
*boolesche Ausdrücke* oder Bedingungen. Wie Rechenausdrücke können diese
mit *Operatoren* verknüpft werden.

## Verneinungen

Bedingungen können mithilfe des Schlüsselworts `not` verneint werden.
Die Verneinung einer Bedingung ist genau dann erfüllt, wenn die
Bedingung selbst nicht erfüllt ist.

``` python, py-execute
not True
not False
not 1 == 2
```

## Verknüpfungen von Bedingungen

Mithilfe der *Operatoren* `and` und `or` können zwei *boolesche
Ausdrücke* miteinander verknüpft werden. Wenn zwei *boolesche Ausdrücke*
mit `and` verknüpft werden, dann wird der verknüpfte *boolesche
Ausdruck* genau dann zu `True` ausgewertet, wenn beide Teilausdrücke zu
`True` ausgewertet werden.

``` python, py-execute
True and 15 > 10
1 < 2 and 2 > 0
3 <= 3 and (2 < 0 and 4 >= 5)
```

Wenn zwei *boolesche Ausdrücke* mit `or` verknüpft werden, dann ist der
verknüpfte *boolesche Ausdruck* genau dann wahr, wenn mindestens einer
der beiden *Teilausdrücke* zu `True` ausgewertet wird.

``` python, py-execute
5 != 5 or (not 4 < 3)
4 <= 3 or (1 < 2 and 2 > 0)
```

Wenn in einem *booleschen Ausdruck* mehrere *Operatoren* vorkommen, ist
es oft sinnvoll, Klammern zu setzten. Dadurch ist klar, welche
*Teilausdrücke* zuerst ausgewertet werden.
