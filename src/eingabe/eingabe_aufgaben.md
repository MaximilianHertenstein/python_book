# Aufgaben: Eingabe

## Quiz

### Quiz 1

{{#quiz ../quizzes/eingabe_01.toml}}

### Quiz 2

{{#quiz ../quizzes/eingabe_02.toml}}

### Quiz 3

{{#quiz ../quizzes/eingabe_03.toml}}

### Quiz 4

{{#quiz ../quizzes/eingabe_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Führe den Code aus, gib einen Namen ein und überprüfe das Ergebnis.

``` python, py-execute
name = input('Wie heißt du? ')
'Hallo ' + name
```

### 2. Fehler finden und reparieren

Der Code erzeugt einen NameError, weil die Eingabe nie eingelesen wurde. Ergänze die fehlende Zeile mit `input()`.

``` python, py-execute
def greet_io() -> None:
    print('Wie heißt du?')
    print('Servus ' + name)

greet_io()
```

### 3. Verändere die Eingabe

Ändere den Text, der vor der Eingabeaufforderung angezeigt wird.

``` python, py-execute
def greet_io() -> None:
    print('Wie heißt du?')
    name = input()
    print('Servus ' + name)

greet_io()
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Eingabe des Benutzers in `age` gespeichert wird.

``` python, py-execute
age = ____
print('Du bist ' + age + ' Jahre alt.')
```

### 5. Passe die Funktion an

Passe die Funktion so an, dass sie statt auf Bairisch auf Englisch grüßt (`'Hello'` statt `'Servus'`).

``` python, py-execute
def greet_bavarian_io() -> None:
    print('Wie heißt du? ')
    name = input()
    print('Servus ' + name)

greet_bavarian_io()
```
