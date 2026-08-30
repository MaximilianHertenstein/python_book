# Floats

## Grundlagen

In Python kann man mit dem *Operator* `/` eine gewöhnliche Division
durchführen.

``` python, py-execute
5 / 2
```

Das Ergebnis ist eine Kommazahl. Der *Typ* der Kommazahlen wird mit
`float` abgekürzt.

*Floats* unterstützen alle *Rechenoperation*, die wir mit ganzen Zahlen
verwendet haben.

``` python, py-execute
1.0 + 2.4
1.5 * 1.5
10.0//3.0
```

Die Rechnung mit *Floats* führt leider oft zu Ergebnissen, die nicht
ganz exakt sind.

``` python, py-execute
10.7 - 12.3
```

*Floats* können wir wie alle *Werte*, in *Variablen* speichern, als
*Argumente* und *Rückgabewerte* von Funktionen nutzen und in *Listen*
speichern. Da dies nicht wirklich überraschend ist, wird es hier nicht
nochmal vorgeführt.

## Rechnungen mit Floats und Integern

Diese *Operationen* kann man auch mit einem *Integer* und einem *Float*
verwenden. Dabei wird zunächst das *Integer* zu einem *Float*
konvertiert und dann die entsprechende Rechnung durchgeführt.

``` python, py-execute
1.3 + 2
```

## Konvertierung

Die *Konvertierung* kann auch manuell angewendet werden.

``` python, py-execute
float(10)
```

Auch eine *Konvertierung* in die andere Richtung ist möglich.

``` python, py-execute
int(10.7)
```

Bei einer *Konvertierung* von *Floats* zu *Integern* wird immer
abgerundet.
