

# While-Schleifen

## Wiederholung if-Statements

Mit `if`-Statements kann entschieden werden, ob bestimmte Codezeilen
ausgeführt werden sollen. Wenn die Bedingung hinter `if` zu `True`
ausgewertet wird, wird der eingerückte Code ausgeführt.

<script type="py-editor">
x = 1
if x < 5:
    print(str(x) + ' ist kleiner als 5')
</script>

Wenn die Bedingung hinter `if` zu `False` ausgewertet wird, wird der
eingerückte Code nicht ausgeführt.

<script type="py-editor">
x = 8
if x < 5:
    print(str(x) + ' ist kleiner als 5')
</script>

## While-Schleifen

`while`-Schleifen sind aufgebaut wie `if`-Statements. Hinter dem
Schlüsselwort `while` steht eine Bedingung. In den nächsten Zeilen
folgen eingerückte Statements.

<script type="py-editor">
while x < 5:
    print(str(x) + ' ist kleiner als 5')
</script>

Zunächst läuft die Ausführung der `while`-Schleife genau wie bei einem
`if`-Statement. Die Bedingung hinter `while` wird ausgewertet. Wenn die
Bedingung zu `False` ausgewertet wird, wird der eingerückte Code nicht
ausgeführt.

<script type="py-editor">
x = 8
while x < 5:
    print(str(x) + ' ist kleiner als 5')
</script>

Wenn die Bedingung zu `True` ausgewertet wird, wird der eingerückte Code
ausgeführt. Danach folgt ein Sprung zurück zu der Zeile, in der `while`
steht. Es wird erneut geprüft, ob die Bedingung immer noch zu `True`
ausgewertet wird. Falls dies der Fall ist, wird der eingerückte Code
erneut ausgeführt und danach wieder zurückgesprungen.

Das heißt: Die Ausführung des folgenden Codes bricht nie ab.

<script type="py-editor">
x = 1
while x < 5:
    print(str(x) + ' ist kleiner als 5')
</script>




Wenn wir eine eingerückte Zeile ergänzen, in der `x` vergrößert wird,
ist die Bedingung nach einigen Durchläufen nicht mehr erfüllt und die
Ausführung bricht ab.

<script type="py-editor">
x = 1
while x < 5:
    print(str(x) + ' ist kleiner als 5')
    x = x + 1
</script>

Die Zeile mit dem `while` und der Bedingung nennt man Kopfzeile der
Schleife. Die eingerückten Statements darunter nennt man
Schleifenkörper.

Wenn eine Zeile unter dem Schleifenkörper nicht eingerückt ist, gehört
sie **nicht** zum Schleifenkörper und wird **nicht** wiederholt.

<script type="py-editor">
x = 1
while x < 5:
    print(x)
    x = x + 1
print('Goodbye')
</script>


## While-Schleifen in Funktionen

Wie alle Statements können auch `while`-Schleifen in Funktionen verwendet werden.

<script type="py-editor">

def count_to_four_and_say_goodbye():
    x = 1
    while x < 5:
        print(x)
        x = x + 1
    print('Goodbye')
    
count_to_four_and_say_goodbye()
</script>

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./while_schleifen_aufgaben.md)