``` python, py-execute
def count_to_4_and_say_goodbye() -> None:
    x = 1
    while x < 5:
        print(x)
        x = x + 1
    print("goodbye")
```

# While-Schleifen

## Wiederholung if-Statements

Mit `if`-Statements kann entschieden werden, ob bestimmte Codezeilen
ausgeführt werden sollen. Wenn die Bedingung hinter `if` zu `True`
ausgewertet wird, wird der eingerückte Code ausgeführt.

``` python, py-execute
x = 1
if x < 5:
    print(str(x) + " ist kleiner als 5")
```

Wenn die Bedingung hinter `if` zu `False` ausgewertet wird, wird der
eingerückte Code nicht ausgeführt.

``` python, py-execute
x = 8
if x < 5:
    print(str(x) + " ist kleiner als 5")
```

## While-Schleifen

`while`-Schleifen sind aufgebaut wie `if`-Statements. Hinter dem
Schlüsselwort `while` steht eine Bedingung. In den nächsten Zeilen
folgen eingerückte Statements.

``` python, py-execute
x = 8
while x < 5:
    print(str(x) + " ist kleiner als 5")
```

Zunächst läuft die Ausführung der `while`-Schleife genau wie bei einem
`if`-Statement. Die Bedingung hinter `while` wird ausgewertet. Wenn die
Bedingung zu `False` ausgewertet wird, wird der eingerückte Code nicht
ausgeführt.

``` python, py-execute
x = 8
while x < 5:
    print(str(x) + " ist kleiner als 5")
```

Wenn die Bedingung zu `True` ausgewertet wird, wird der eingerückte Code
ausgeführt. Danach folgt ein Sprung zurück zu der Zeile, in der `while`
steht. Es wird erneut geprüft, ob die Bedingung immer noch zu `True`
ausgewertet wird. Falls dies der Fall ist, wird der eingerückte Code
erneut ausgeführt und danach wieder zurückgesprungen.

Das heißt: Die Ausführung des folgenden Codes bricht nie ab.

``` python, py-execute
x = 1
while x < 5:
    print(str(x) + " ist kleiner als 5")
```

Dabei ist die folgende Ausgabe zu sehen.

``` shell
1 ist kleiner als 5
1 ist kleiner als 5
1 ist kleiner als 5
1 ist kleiner als 5
...
```

Wenn wir eine eingerückte Zeile ergänzen, in der `x` vergrößert wird,
ist die Bedingung nach einigen Durchläufen nicht mehr erfüllt und die
Ausführung bricht ab.

``` python, py-execute
x = 1
while x < 5:
    print(str(x) + " ist kleiner als 5")
    x = x + 1
```

Die Zeile mit dem `while` und der Bedingung nennt man Kopfzeile der
Schleife. Die eingerückten Statements darunter nennt man
Schleifenkörper.

Wenn eine Zeile unter dem Schleifenkörper nicht eingerückt ist, gehört
sie **nicht** zum Schleifenkörper und wird **nicht** wiederholt.

``` python, py-execute
def count_to_4_and_say_goodbye() -> None:
    x = 1
    while x < 5:
        print(x)
        x = x + 1
    print("goodbye")
```

``` python, py-execute
count_to_4_and_say_goodbye()
```
