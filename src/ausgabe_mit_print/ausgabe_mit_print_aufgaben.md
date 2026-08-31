# Aufgaben: Ausgabe mit print

## Quiz

### Quiz 1

{{#quiz ../quizzes/ausgabe_mit_print_01.toml}}

### Quiz 2

{{#quiz ../quizzes/ausgabe_mit_print_02.toml}}

### Quiz 3

{{#quiz ../quizzes/ausgabe_mit_print_03.toml}}

### Quiz 4

{{#quiz ../quizzes/ausgabe_mit_print_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
def greet_english_print(name: str) -> None:
    print('Hello ' + name)

greet_english_print('Mia')
```

### 2. Fehler finden und reparieren

Der Code erzeugt einen TypeError. Ändere `return` zu `print`, sodass der Wert ausgegeben statt zurückgegeben wird, und entferne die fehlerhafte Verwendung des Ergebnisses.

``` python, py-execute
def double_print(x: int) -> None:
    return 2 * x

result = double_print(4) + 1
result
```

### 3. Verändere die Eingabe

Ändere den Namen im Funktionsaufruf, sodass `'Hello Ben'` ausgegeben wird.

``` python, py-execute
def greet_english_print(name: str) -> None:
    print('Hello ' + name)

greet_english_print('Mia')
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Funktion den Text ausgibt, statt ihn zurückzugeben.

``` python, py-execute
def show_double(x: int) -> None:
    ____('Das Doppelte ist: ' + str(2 * x))

show_double(5)
```

### 5. Prüfe deine Idee

Sage voraus, was ausgegeben wird und was zurückgegeben wird. Prüfe deine Vermutung danach.

``` python, py-execute
def say_goodbye() -> str:
    print('Goodbye')
    return 'Hello'

say_goodbye()
```
