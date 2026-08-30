<!-- ``` python, py-execute
def yard_to_feet(length_in_yard: int) -> int:
    return 3 * length_in_yard


def constant_zero() -> int:
    return 0


def sum_of_squares(p_a: int, p_b: int) -> int:
    return p_a * p_a + p_b * p_b


def feet_to_inch(length_in_feet: int) -> int:
    return 12 * length_in_feet


def yard_to_inch(length_in_yard: int) -> int:
    return feet_to_inch(yard_to_feet(length_in_yard))


def test_yard_to_inch() -> None:
    assert yard_to_inch(1) == 36
    assert yard_to_inch(2) == 72
    assert yard_to_inch(3) == 108


def shadow(a: int) -> int:
    x = 4
    return x * a


x = 3
x = 3


def f(x: int) -> int:
    return 2 * x
``` -->

# Funktionen

## Motivation

Die folgende Matheaufgabe können wir einfach in der Shell lösen.

<div class="matheaufgabe">

**Mathematikaufgabe 1**. *Für die englischen Längeneinheiten Fuß und
Yard gilt:*

- *Ein Yard sind *3* Fuß.*

*Wie viel sind *\,7* Yard in Fuß und wie viel sind *\,19* Yard in
Fuß?*

</div>

<div class="loesung_der_matheaufgabe">

**Lösung 1**.

``` python, py-execute
3 * 7
```
``` python, py-execute
3 * 19
```

</div>

Die Lösung funktioniert zwar. Es gibt jedoch ein paar Probleme mit dem
Code.

- Wenn wir den Code später ohne die Aufgabe lesen, wissen wir
  höchstwahrscheinlich nicht, was wir berechnen wollten.

- Die Multiplikation mit *3*, um eine Länge in Yard in eine Länge in
  Fuß umzurechnen, taucht zweimal auf.

- Wenn wir nach der Rechnung feststellen würden, dass ein Yard
  tatsächlich *4* Fuß sind, müssten wir den Code an beiden Stellen
  ändern.

Beide Probleme kann man mit Hilfe von Funktionen vermeiden.

## Grundlegendes zu Funktionen

Eine Funktion kann man sich als eine Maschine vorstellen, die je nach
*Input* (*Argument*) einen entsprechenden *Output* (*Funktionswert*)
produziert. Wenn der Name der Funktion *g* ist, bezeichnet man für
einen *Input* *x* den dazugehörigen *Output* als *g(x)*. Die
Funktionsgleichung gibt an, wie sich der *Output* aus dem *Input*
berechnen lässt.

<div align="center">
  <img src="funktionsmaschine.png" style="width: 60%; max-width: 400px; display: block; margin: 0 auto;" alt="Funktionsmaschine Input Output" />
  <p style="font-size: 0.8em; color: gray; margin-top: 5px;">
    Quelle: <a href="https://madipedia.de/wiki/Funktionsmaschine">Madipedia</a>, Lizenz: <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.de">CC BY-NC-SA 3.0</a>
  </p>
</div>

<!-- <img src="functionmachine-colour.svg" style="width: 32%; background-color: white;" alt="functionmachine" /> -->

Die Funktionsmaschine der Funktion *g* mit der Funktionsgleichung
$$g(x) = 3 \cdot x$$
nimmt eine beliebige Zahl als *Input* und gibt das Produkt dieser Zahl
mit *3* zurück. Wenn z.B. der *Input* die Zahl *4* ist, kann man den
*Output* berechnen, indem man *4* in den Funktionsterm an der Stelle
von *x* einsetzt. Das Ergebnis ist dann
$$g(4) = 3 \cdot 4 = 12$$


<img src="funktionsaufruf_g_4/funktionsaufruf_g_4.svg" style="width: 50%; background-color: white;" alt="functionmachine" />

<!-- ![funktionsaufruf_g_4](funktionsaufruf_g_4/funktionsaufruf_g_4.svg) -->

## Funktionen definieren und aufrufen

Die Funktion *g* steht für die Umrechnung von Yard in Fuß. Wir wollen
diese also in Python mit einem besser lesbaren Namen implementieren.
Dies ist folgendermaßen möglich:

<img src="skizze_syntax_funktionen/skizze_syntax_funktionen.svg" style="width: 80%; background-color: white; display: block; margin: 0 auto;" alt="functionmachine" />


Anschließend kann sie folgendermaßen im Code aufgerufen werden:

``` python, py-execute
yard_to_feet(7)
yard_to_feet(19)
```

1.  Eine Funktionsdefinition beginnt immer mit dem Schlüsselwort `def`.

2.  Dahinter steht der Name[^1] der Funktion (hier: `yard_to_feet`).

3.  Das `length_in_yard` in der runden Klammer ist ein Platzhalter
    (*Parameter*) für einen konkreten Wert (Argument), der beim Aufruf
    übergeben werden muss. Mit `: int` wird angegeben, das beim
    Funktionsaufruf für diesen *Parameter* ein *Integer* übergeben
    werden muss. Z.B. werden in den Funktionsaufrufen oben die *Integer*
    `7` und `19` übergeben.

4.  Mit `-> int` wird angegeben, dass der Rückgabewert der Funktion
    immer ein *Integer* ist. Die erste Zeile wird *Funktionskopf*
    genannt und muss mit einem *Doppelpunkt*(`:`) abgeschlossen werden.

5.  In der zweiten Zeile wird festgelegt, was die Funktion zurückgeben
    soll. Hierfür schreibt man das Schlüsselwort `return` mit vier
    Leerzeichen eingerückt.

6.  Dahinter folgt ein *Ausdruck*. Dieser kann den *Parameter* der
    Funktion enthalten. Beim Funktionsaufruf wird dieser Parameter durch
    den übergebenen *Wert* des *Arguments* ersetzt. Beim Aufruf von
    `yard_to_feet(7)` wird also in dem *Ausdruck* `3 * length_in_yard`
    der *Parameter* `length_in_yard` durch den *Wert* `7` ersetzt. Der
    *Ausdruck* `3 * 7` wird dann zu `21` ausgewertet und zurückgegeben.
    Anders ausgedrückt: Der *Ausdruck* `yard_to_feet(7)` wird zu `21`
    ausgewertet.

Schlüsselwörter wie `def` und `return` zeigen dem Python-Interpreter,
was zu tun ist. Sie dürfen deshalb **nicht** als Name von Funktionen und
Variablen verwendet werden.

## Syntaxfehler

In großen Skripten kann es schnell schwierig werden, Syntaxfehler zu
finden.

``` python, py-execute
def double(x: int) -> int:
    return 2 * x


def square(x: int) -> int:
    return x * x
```

Deshalb zeigt Python beim Ausführen in der
<span style="color: blue">blauen Zeile</span> genau an, in welcher Datei
und in welcher Zeile der Fehler aufgetreten ist.

```
Traceback (most recent call last):
File "/home/max/Dokumente/double_and_square.py", line 4
def square(x: int)  -> int
                          ^
SyntaxError: expected ':'
```

Darunter wird in <span style="color: red">rot</span> angezeigt, an
welcher Stelle welches Zeichen erwartet wurde.

## Kommentare

Hinter dem Zeichen `#` darf kein korrekter Python-Code stehen.

``` python, py-execute
# Umrechnung von Fuß in Zoll
def feet_to_inch(length_in_feet: int) -> int:
    return 12 * length_in_feet
```

Dies kann genutzt werden, um den Code zu erklären und zu strukturieren.

## Funktionsaufrufe und Ausdrücke

Funktionsaufrufe können in *Ausdrücken* mit *Operatoren* und *Literalen*
kombiniert werden.

``` python, py-execute
12 * yard_to_feet(7)
```

Als *Argument* einer Funktion muss nicht unbedingt ein *Literal*
angegeben werden.

``` python, py-execute
yard_to_feet(2 * 2)
```

Vor dem Funktionsaufruf wird das *Argument* `2 * 2` ausgewertet. Das
Ergebnis `4` wird an die Funktion übergeben.

## Funktionen kombinieren

In einem *Ausdruck* können wir auch mehrere Funktionsaufrufe
kombinieren. Z. B. können wir mit dem folgenden Aufruf *7* Yard in
Zoll umrechnen.

``` python, py-execute
feet_to_inch(yard_to_feet(7))
```

Die Auswertung kann folgendermaßen skizziert werden:

![verkettung_funktionen](verkettung_funktionen/verkettung_funktionen.svg)

Zunächst wird `yard_to_feet(7)` zu `21` ausgewertet. Dieses Ergebnis ist
anschließend das *Argument* von `feet_to_inch`.

## Funktionen in anderen Funktionen verwenden

Diese Kombination von Funktionsaufrufen ist auch innerhalb von
Funktionen nützlich. Wir können z. B. die Funktionen `yard_to_feet` und
`feet_to_inch` zu einer einzigen Funktion `yard_to_inch` kombinieren.

``` python, py-execute
def yard_to_inch(length_in_yard: int) -> int:
    return feet_to_inch(yard_to_feet(length_in_yard))
```

``` python, py-execute
yard_to_inch(7)
```

## Zuweisungsstatements in Funktionen

Alle Funktionen, die wir bisher gesehen haben, enthalten nur ein
`return`-*Statement*, mit dem angegeben wird, was die Funktion
zurückgeben soll.

Dies muss nicht so sein. Wir können in Funktionen beliebige andere
*Statements* verwenden. Dafür schreiben wir diese ebenfalls eingerückt
unter den *Funktionskopf*. Alle *Statements*, die zu einer Funktion
gehören, nennt man *Funktionskörper*. Diese *Statements* werden beim
Funktionsaufruf der Reihe nach ausgeführt. Z. B. wurden in der folgenden
Variante der Funktion `yard_to_inch` *Zuweisungsstatements* verwendet.

``` python, py-execute
def yard_to_inch(length_in_yard: int) -> int:
    length_in_feet = yard_to_feet(length_in_yard)
    length_in_inch = feet_to_inch(length_in_feet)
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

## Funktionen prüfen

Bisher haben wir, um zu sehen, ob eine Funktion korrekt arbeitet, diese
in der Shell aufgerufen.

Dies kann man aber auch mit `assert`-*Statements* erreichen. Dafür
schreiben wir hinter das Schlüsselwort `assert` einen Funktionsaufruf,
den *Gleichheitsoperator* `==` und den Wert, den wir erwarten. Wenn der
Funktionsaufruf zu dem angegeben *Wert* ausgewertet wird, passiert
nichts.

``` python, py-execute
assert yard_to_inch(2) == 72
```

Wenn dies nicht der Fall ist, wird ein `AssertionError` angezeigt.

``` python, py-execute
assert yard_to_inch(2) == 10
```

Es ist sinnvoll, solche Überprüfungen selbst in eine Funktion
auszulagern.

``` python, py-execute
def test_yard_to_inch():
    assert yard_to_inch(1) == 36
    assert yard_to_inch(2) == 72
    assert yard_to_inch(3) == 108
```

``` python, py-execute
test_yard_to_inch()
```

Da hier kein `AssertionError` angezeigt wurde, hat die Funktion den Test
bestanden.

## Funktionen mit mehreren Parametern

Funktionen können auch mehrere oder gar keine *Parameter* haben. Die
*Parameter* stehen in den runden Klammern hinter dem Funktionsnamen.
Zwischen zwei *Parameter* schreibt man ein Komma.

``` python, py-execute
def constant_zero() -> int:
    return 0
    
def sum_of_squares(p_a: int, p_b: int) -> int:
    return p_a * p_a + p_b * p_b
```

Beim Aufruf der Funktion muss dann die entsprechende Anzahl an
*Argumenten* in Klammern übergeben werden. Auch die *Argumente* werden
durch Kommas voneinander getrennt.

``` python, py-execute
constant_zero()
sum_of_squares(2, 3)
```

[^1]: Für die Namen von Funktionen gelten die selben Regeln wie für die
    Namen von Variablen

[^2]: oder einem anderen Block
