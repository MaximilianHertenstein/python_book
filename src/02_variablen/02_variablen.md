# Variablen

## Motivation

Die folgende Mathematikaufgabe können wir einfach in der Shell lösen.


**Mathematikaufgabe 1**. *Für die englischen Längeneinheiten Fuß, Yard
und Zoll (Inch) gelten:*

- *Ein Yard sind 3 Fuß.*

- *Ein Fuß sind 12 Zoll.*

*Wie viel sind 7 Yard in Fuß und in Zoll?*



**Lösung 1**

``` python, py-execute
3 * 7
```
``` python, py-execute
3 * 7 * 12
```


Hierbei fällt auf, dass der *Ausdruck* `3 * 7` doppelt vorkommt und
deshalb auch doppelt ausgewertet wird. Um dies zu vermeiden und
gleichzeitig die Lesbarkeit zu verbessern, können wir *Variablen*
nutzen.

## Variablen erstellen

Man kann sich eine *Variable* als Box mit einem Namen und einem Inhalt
vorstellen.

<div align="center">
<img src="variable_box/variable_box.svg" alt="variable_box" style="width: 50%;">
</div>

Eine Variable wird mit einem *Zuweisungs-Statement* *initialisiert*
(erstellt).

``` python, py-execute
three_yards_in_feet = 3 * 7
```

Auf der linken Seite des *Zuweisungsoperators* (`=`) steht der Name der
*Variablen*. Auf der rechten Seite steht ein *Ausdruck*. Bei der
Ausführung dieses *Statements* wird zunächst der *Ausdruck* auf der
rechten Seite ausgewertet. Der *Wert* des *Ausdrucks* wird dann unter
dem angegeben Namen gespeichert.

Allgemein ist ein *Statement* eine Anweisung an den Python-Interpreter.
Bei *Zuweisung-Statements* weisen wir diesen an, eine *Variable*
anzulegen[^1].

## Variablen in Ausdrücken verwenden

Wir können jetzt den *Variablennamen* in *Ausdrücken* verwenden. Bei der
Auswertung wird der *Variablenname* durch den *Wert* der *Variable*
ersetzt

``` python, py-execute
three_yards_in_feet
```
``` python, py-execute
12 * three_yards_in_feet
```

Wir können eine *Variable* auch bei der *Initialisierung* einer neuen
*Variablen* verwenden.

``` python, py-execute
```
``` python, py-execute
three_yards_in_inch = 12 * three_yards_in_feet
three_yards_in_inch
```

## Undefinierte Variablen

Wenn wir in einem *Ausdruck* eine *Variable* nutzen, die noch nicht
definiert wurde, werden wir darauf hingewiesen.

``` python, py-execute
x
```

Gerade bei längeren *Variablennamen* schleichen sich schnell
Schreibfehler ein.

``` python, py-execute
three_yard_in_inch
```

## Erlaubte Variablennamen

*Variablennamen* müssen mit einem Buchstaben beginnen.

``` python, py-execute
2_yard_in_feet = 6
```

Außerdem dürfen in *Variablennamen* nur Buchstaben, Zahlen und
Unterstriche verwendet werden.

``` python, py-execute
three+three = 6
```

[^1]: oder ihren Wert zu ändern. Diese Möglichkeit lernen wir jedoch
    erst später kennen
