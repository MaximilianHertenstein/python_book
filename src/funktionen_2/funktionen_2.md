# Funktionen 2

## Wiederholung


Wir haben bereits gesehen wie wir Funktionen definieren können.

``` python, py-execute
def yard_to_feet(lengt_in_yard: int):
    return 3 * lengt_in_yard

def feet_to_inch(lengt_in_feet: int):
    return 12 * lengt_in_feet
```


## Funktionsaufrufe und Ausdrücke


Funktionsaufrufe können in *Ausdrücken* verwendet werden.

``` python, py-execute
12 * yard_to_feet(7)
```

Das *Argument* einer Funktion kann jeder beliebige Audruck sein.

``` python, py-execute
yard_to_feet(2 * 2)
```

Vor dem Funktionsaufruf wird das *Argument* `2 * 2` ausgewertet. Das
Ergebnis `4` wird dann an die Funktion übergeben.

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


