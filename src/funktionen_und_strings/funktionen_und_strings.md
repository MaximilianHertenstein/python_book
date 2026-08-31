

# Strings und Funktionen

## Motivation

Wir wollen eine Funktion `greet_bavarian` schreiben, der ein Name einer
Benutzerin als *String* übergeben wird und die diese Benutzerin mit
`'Servus'` begrüßt.

``` python, py-execute
greet_bavarian('Ada')
```

![funktionsaufruf_strings_grafik_ada](funktionsaufruf_strings_grafik_ada/funktionsaufruf_strings_grafik_ada.svg)
``` python, py-execute
greet_bavarian('Grace')
```

![funktionsaufruf_strings_grafik_grace](funktionsaufruf_strings_grafik_grace/funktionsaufruf_strings_grafik_grace.svg)

Beim Lesen der beiden Funktionsaufrufe wird deutlich, dass der Funktion
immer genau ein *String* als *Argument* übergeben wird. Sie muss also
einen *Parameter* mit dem Typ *String* (`str`) haben. Wir sehen auch,
dass sie immer ein *String* zurückgibt. Mit diesen Informationen können
wir bereits den *Funktionskopf* und den Anfang des *Funktionskörpers*
schreiben.

``` python, py-execute
def greet_bavarian(name: str) -> str:
    return # Ausdruck fehlt noch :( 
```

Wir kennzeichnen mit `: str` hinter einem *Parameter*, dass für diesen
ein *String* übergeben werden soll. Mit `-> str` nach der Klammer mit
den *Parametern* wird ausgedrückt, dass der *Rückgabewert* der Funktion
ein *String* ist.

Im zweiten Schritt überlegen wir uns, wie aus dem *Argument* mithilfe
von *String-Operationen* der *Rückgabewert* berechnet wird. Dies ist für
das erste Beispiel oben folgendermaßen möglich:

``` python, py-execute
'Servus ' + 'Ada'
```

Im zweiten Fall kann man folgendermaßen rechnen:

``` python, py-execute
'Servus ' + 'Grace'
```

Beide Rechnungen beginnen mit dem *String* `'Servus '`. Dieses
kann also genau so in dem *Ausdruck* hinter `return` verwendet werden.
Bei beiden Rechnungen taucht anschließend der *Operator* `+` auf. Auch
dieser muss also in dem *Ausdruck* hinter `return` verwendet werden.

Ab jetzt unterscheiden sich die beiden Rechnungen. Um das Ergebnis von
`greet_bavarian('Ada')` zu berechnen, müssen wir mit `'Ada'` addieren.
Bei der Berechnung des *Rückgabewerts* von `greet_bavarian('Grace')`
müssen wir stattdessen mit `'Grace'` addieren. Es handelt sich **nicht**
beide Male um denselben *Wert*. Die Gemeinsamkeit ist aber, dass es sich
beide Male um das übergebene *Argument* handelt. Wir verwenden also an
dieser Stelle den *Parameter* `name`. Die vollständige Funktion sieht
dann folgendermaßen aus:

``` python, py-execute
def greet_bavarian(name: str) -> str:
    return 'Servus ' + name
```

## Grundlagen

Um `'Servus'` stehen Hochkommata aber nicht um `name` und
`greet_bavarian`. Der Grund dafür ist, dass `'Servus '` ein
*String* ist. Dieses soll genau so im Ergebnis auftauchen. Egal
mit welchen *Argumenten* die Funktion aufgerufen wird, wollen wir, dass
das Ergebnis mit `'Servus'` beginnt.

`name` ist jedoch kein *String*, sondern der Name eines *Parameters*. Im
Ergebnis soll `name` **nicht** auftauchen. Stattdessen soll `name` durch
den *Wert* des *Arguments* ersetzt werden. Beim ersten Funktionsaufruf
ist das `'Ada'` und beim zweiten `'Grace'`.

Besonders deutlich wird das, wenn wir uns die *Variablenbelegung* beim
Funktionsaufruf `greet_bavarian('Ada')` anschauen.

<div class="center">

| Name   |    Wert |
|:-------|--------:|
| `name` | `'Ada'` |

</div>

Der *Parameter* `name` hat hier den Wert `'Ada'`. Bei der Auswertung des
*Funktionskörpers* wird dieser *Parameter* durch seinen *Wert* ersetzt.
Wird die Funktion mit anderen *Argumenten* aufgerufen, werden die
*Parameter* auch andere *Werte* ersetzt. Im Gegensatz dazu bleibt der
*String* `'Servus '` immer gleich.

## Fehler beim Verwechseln von String und Parameternamen

Den Unterschied kann man sich auch klarmachen, wenn man `name` im
*Funktionskörper* auch als *String* schreibt.

``` python, py-execute
def greet_bavarian_wrong(name: str) -> str:
    return 'Servus ' + 'name'
```

``` python, py-execute
greet_bavarian_wrong('Ada')
greet_bavarian_wrong('Grace')
```

`'name'` ist ein *String*. Dieses taucht also unabhängig vom
übergebenen Argument genau so im Ergebnis auf.

Auch der Funktionsname `greet_bavarian` ist ein Name, der benötigt wird,
wenn die Funktion aufgerufen wird. Die Funktion ist aber **nicht** der
*String* `'greet_bavarian'`. Deshalb muss ihr Name auch nicht zwischen
Hochkommas geschrieben werden.
