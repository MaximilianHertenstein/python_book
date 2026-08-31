# Werte und Ausdrücke

## Python als Taschenrechner

Der Python-Interpreter ist ein Programm, mit dem Berechnungen
durchgeführt und Python-Programme ausgeführt werden können.

Wir können den Python-Interpreter als Taschenrechner verwenden, indem
wir Rechenausdrücke 
eingeben. Der Python-Interpreter berechnet dann das Ergebnis und zeigt
es dem Benutzer an.

``` python, py-execute
4 + 3
```
``` python, py-execute
1 * 2 * 3 * 4
```

Wie jeder Taschenrechner kennt der Python-Interpreter die
“Punkt-vor-Strich-Regel”.

``` python, py-execute
1 + 2 * 5
```

Durch das Setzen von Klammern können wir selbst eine Reihenfolge für die
Auswertung eines *Ausdrucks* festlegen.

``` python, py-execute
(1 + 2) * 5
```

## Operatoren, Werte, Ausdrücke

- Die Rechenzeichen wie `+`, `-` und `*` nennt man *Operatoren*. Mithilfe
von *Operatoren* werden Berechnungen (*Operationen*) wie die Addition,
Subtraktion und Multiplikation durchgeführt. Später werden wir noch
weitere *Operatoren* kennenlernen. 
- Links und rechts von einem *Operator*
stehen die *Operanden*, die in der Rechnung verwendet werden. Im ersten
Beispiel oben steht der *Operator* `+` zwischen dem linken *Operanden*
`4` und dem rechten *Operanden* `3`.
- Zahlen wie `4` und `3` sind *Werte* (*Values*). *Werte* sind die
kleinsten Einheiten, mit denen ein Computerprogramm arbeitet. Das
Ergebnis einer Rechnung ist immer ein *Wert*. Später werden wir neben Zahlen noch
weitere Arten von *Werten* kennenlernen. 
- Ein *Ausdruck* (*expression*) ist eine Kombination aus *Werten*,
*Operatoren* und Klammern, die zu einem *Wert* ausgewertet werden
kann[^1]. Im letzten Beispiel wurde der *Ausdruck* `(1 + 2) * 5` zu dem
Wert `15` ausgewertet.

## Syntaxfehler

Wenn ein fehlerhafter *Ausdruck* eingegeben wird, kann der Interpreter
diesen nicht auswerten und gibt eine Fehlermeldung aus.

``` python, py-execute
1 + * 1
```

Bei diesem Fehler handelt es sich um einen `SyntaxError`. Die *Syntax*
einer Programmiersprache gibt an, welche Zeichen im Code erlaubt sind
und wie diese miteinander kombiniert werden dürfen. Ein `SyntaxError`
tritt auf, wenn eine dieser Regeln verletzt wurde. Python zeigt mit einem `^` genau
an, welches Zeichen zuerst nicht interpretiert werden konnte. In diesem
Fall ist es das `*` nach dem `+`. An dieser Stelle würde Python zum
Beispiel eine Zahl, aber sicher kein zweites Rechenzeichen erwarten.



[^1]: Ausdrücke können auch Funktionsaufrufe und Variablen enthalten.
    Diese werden aber erst später behandelt.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./werte_und_ausdruecke_aufgaben.md)
