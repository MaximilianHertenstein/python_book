# Variablen neue Werte zuweisen

## Grundlagen

Es ist jederzeit möglich, den *Wert* einer *Variablen* mit einer
*Zuweisung* durch einen neuen *Wert* zu ersetzen.

``` python, py-execute
a = 2
```
``` python, py-execute
a
```

![variable_a_2](variable_a_2.svg)
``` python, py-execute
a = 5
```
``` python, py-execute
a
```

![variable_a_updated_5](variable_a_updated_5.svg)

Auf der rechten Seite einer *Zuweisung* kann jeder *Ausdruck* stehen.
Insbesondere ist es nach dem *Initialisieren* möglich, in dem *Ausdruck*
die *Variable* selbst zu verwenden.

``` python, py-execute
a = 2 * a
```
``` python, py-execute
a
```

## Variablen mit demselben Wert

Wir können auch *Variablen* erstellen, die auf den *Wert* einer anderen
*Variable* zeigen.

``` python, py-execute
x = 3
```
``` python, py-execute
y = x
```

![x_y_3](x_y_3.svg)
``` python, py-execute
y
```

Wenn wir jetzt den *Wert* einer der *Variablen* durch einen anderen
*Wert* ersetzen, bleibt der *Wert* der anderen *Variable* gleich.

``` python, py-execute
x = 5
```

![x_5_y_3](x_5_y_3.svg)
``` python, py-execute
x
```
``` python, py-execute
y
```

Das liegt daran, dass wir den *Wert* einer *Variable* bei einer
*Zuweisung* durch einen neuen *Wert* ersetzen, aber nicht den alten
*Wert* verändern.

## Unveränderlichkeit

Die *Werte* aller *Datentypen*, die wir bisher kennengelernt haben, sind
unveränderlich. Das heißt, dass wir zum Beispiel ein *Integer* nicht
ändern können. Wir haben aber oben gesehen, dass wir den *Wert* einer
*Variable* einfach durch ein neues *Integer* ersetzen können. Wir werden
bald *Werte* kennenlernen, die sich verändern lassen.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./werte_von_variablen_aendern_aufgaben.md)
