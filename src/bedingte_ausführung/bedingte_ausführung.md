``` python, py-execute
def are_equal(a: int, b: int) -> str:
    if a == b:
        return 'Die beiden Zahlen sind gleich'
    else:
        return 'Die beiden Zahlen sind nicht gleich'


def are_equal_without_else(a: int, b: int) -> str:
    if a == b:
        return 'Die beiden Zahlen sind gleich'
    return 'Die beiden Zahlen sind nicht gleich'


def positive_zero_or_negative_nested(a: int) -> str:
    if a > 0:
        return str(a) + ' ist positiv!'
    else:
        if a == 0:
            return str(a) + ' ist genau 0!'
        else:
            return str(a) + ' ist negativ!'


def positive_zero_or_negative(a: int) -> str:
    if a > 0:
        return str(a) + ' ist positiv!'
    elif a == 0:
        return str(a) + ' ist genau 0!'
    else:
        return str(a) + ' ist negativ!'


def is_teenager_nested(age: int) -> bool:
    if age >= 13:
        if age < 20:
            return True
        else:
            return False
    else:
        return False


def is_teenager(age: int) -> bool:
    if age <= 13 and age < 20:
        return True
    else:
        return False


def is_teenager_shorter(age: int) -> bool:
    return age <= 13 and age < 20


def juggle_motivation(count: int) -> str:
    if count >= 15:
        print('Great, add another ball')


def juggle_motivation_better(count: int) -> None:
    if count >= 15:
        print('Great, add another ball!')
    else:
        print('Try again until you complete 15 repetitions!')


def juggle_motivation_much_better(count: int) -> str:
    if count >= 15:
        print('Great, add another ball!')
    else:
        if count >= 3:
            print('Try again until you complete 15 repetitions!')
        else:
            print('Please concentrate!')


def juggle_motivation_wrong(count: int) -> None:
    if count >= 15:
        print('Great, add another ball!')
    if count >= 3:
        print('Try again until you complete 15 repetitions!')
    else:
        print('Please concentrate!')


def juggle_motivation_helper(count: int) -> str:
    if count >= 15:
        return 'Great, add another ball!'
    if count >= 3:
        return 'Try again until you complete 15 repetitions!'
    return 'Please concentrate!'


def juggle_motivation_corrected(count: int) -> str:
    if count >= 15:
        message = 'Great, add another ball!'
    elif count >= 3 and count < 15:
        message = 'Try again until you complete 15 repetitions!'
    else:
        message = 'Please concentrate!'
    return message
```

# Bedingte Ausführung

## Grundlegendes / Motivation

Bis jetzt haben wir nur Funktionen geschrieben, die
*Zuweisungs-Statements*, Aufrufe der `print`-Funktion und/oder ein
`return`-*Statement* enthielten. Beim Aufruf einer Funktion werden wie
bei der Ausführung eines Skripts nacheinander alle enthaltenen
*Statements* ausgeführt. Oft will man aber nur einen Teil der
*Statements* ausführen. Hierfür benötigt man sogenannte
`if`-*Statements*. Diese gehören wie Funktionsdefinitionen zu den
zusammengesetzten *Statements*, da mit ihnen mehrere *Statements* zu
einem einzigen *Statement* verknüpft werden werden.

## if-else-Statements

Bei diesen *Statements* schreibt man eine Bedingung / *booleschen
Ausdruck* zwischen das Schlüsselwort `if` und einen Doppelpunkt. Danach
folgen eingerückte *Statements*. Diese werden nur dann ausgeführt, wenn
der Ausdruck zu `True` ausgewertet wird.

``` python, py-execute
def juggle_motivation(count: int) -> None:
    if count >= 15:
        print('Great, add another ball!')
```

``` python, py-execute
juggle_motivation(15)
juggle_motivation(14)
```

## if-else-Statements

Ein `if`-*Statement* kann durch eine `else`- Klausel erweitert werden.
Die *Statements*, die hinter `else` eingerückt sind, werden genau dann
ausgeführt, wenn die Bedingung nicht erfüllt ist.

``` python, py-execute
def juggle_motivation_better(count: int) -> None:
    if count >= 15:
        print('Great, add another ball!')
    else:
        print('Try again until you complete 15 repetitions!')
```

Wenn die Bedingung erfüllt ist, wird der unter dem `if` eingerückte Code
ausgeführt. Ansonsten werden wie üblich die nächsten *Statements*
abgearbeitet.

``` python, py-execute
juggle_motivation_better(15)
juggle_motivation_better(14)
```

## Mehrere Alternativen

Oft will man zwischen mehr als zwei Möglichkeiten unterscheiden. Dann
können verschachtelte *if* / *if-else-Statements* verwendet werden.
Hierfür schreibt man nach `if` und/oder `else` ein eigenes eingerücktes
*if-else-Statement*.

``` python, py-execute
def juggle_motivation_much_better(count: int) -> None:
    if count >= 15:
        print('Great, add another ball!')
    else:
        if count >= 3:
            print('Try again until you complete 15 repetitions!')
        else:
            print('Please concentrate!')
```

``` python, py-execute
juggle_motivation_much_better(15)
juggle_motivation_much_better(14)
juggle_motivation_much_better(2)
```

## Vergessen von elif

Wenn wir die `if`/`else`-Statements nicht verschachteln sondern mehrere
`if`-Statements schreiben, hängen nicht alle *Statements* im
*Funktionskörper* zusammen.

``` python, py-execute
def juggle_motivation_wrong(count: int) -> None:
    if count >= 15:
        print('Great, add another ball!')
    if count >= 3:
        print('Try again until you complete 15 repetitions!')
    else:
        print('Please concentrate!')
```

In den Zeilen 2 - 3 steht ein `if`-*Statement* und in den Zeilen 4 - 7
ein `if`-`else`-*Statement*. Beim einem Funktionsaufruf werden beide
*Statements* ausgeführt. Beim folgenden Funktionsaufruf wird in im
ersten *Statement* `Great, add another ball!` und im zweiten *Statement*
`Try again until you complete 15 repetitions` ausgegeben.

``` python, py-execute
juggle_motivation_wrong(15)
```

Bei diesem Beispiel ist die zweite Ausgabe nicht korrekt, da ja schon
$`15`$ Wiederholungen erreicht wurden.

Dies lässt sich auch ohne Verschachtlung korrigieren, indem die zweite
Bedingung so angepasst wird, dass zwischen $`3`$ und $`15`$
Wiederholungen erreicht werden müssen.

``` python, py-execute
def juggle_motivation(count: int) -> None:
    if count >= 15:
        print('Great, add another ball!')
    if count >= 3 and count < 15:
        print('Try again until you complete 15 repetitions!')
    else:
        print('Please concentrate!')
```

## Early-Return-Pattern

Es gibt noch eine weitere Möglichkeit um die Funktion
`juggle_motivation_much_better` zu implementieren.

Beim Ausführen eines `return`-*Statements* wird die Funktion, die dieses
beinhaltet, verlassen. Deshalb wird der *Funktionskörper* der folgenden
Funktion in Zeile 3 verlassen, wenn das *Argument* größer als $`15`$
ist. In diesem Fall kann Zeile 5 gar nicht ausgeführt werden.

``` python, py-execute
def juggle_motivation_helper(count: int) -> str:
    if count >= 15:
        return 'Great, add another ball!'
    if count >= 3:
        return 'Try again until you complete 15 repetitions!'
    return 'Please concentrate!'
```

Die implementierte Funktion gibt einen *String* zurück, sie gibt aber
nichts aus. Wir können diese Funktion aber nutzen um sehr einfach die
Funktion `juggle_motivation_much_better` zu implementieren.

``` python, py-execute
def juggle_motivation_much_better(count: int) -> None:
    print(juggle_motivation_helper(count))
```

Diese Implementierung hat auch den Vorteil, dass wir die Funktion
`juggle_motivation_helper` gut testen können.

``` python, py-execute
assert juggle_motivation_helper(15) == 'Great, add another ball!'
```

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
