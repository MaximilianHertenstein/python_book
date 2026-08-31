# Aufgaben: Strings und Funktionen

## Quiz

### Quiz 1

{{#quiz ../quizzes/funktionen_und_strings_01.toml}}

### Quiz 2

{{#quiz ../quizzes/funktionen_und_strings_02.toml}}

### Quiz 3

{{#quiz ../quizzes/funktionen_und_strings_03.toml}}

### Quiz 4

{{#quiz ../quizzes/funktionen_und_strings_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
def greet_bavarian(name: str) -> str:
    return 'Servus ' + name

greet_bavarian('Luis')
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass die Funktion `'Servus Mia'` zurückgibt.

``` python, py-execute
def greet_bavarian(name: str) -> str:
    return 'Servus ' + name

greet_bavarian('Luis')
```

### 3. Fehler finden und reparieren

Die Funktion gibt immer `'Servus name'` zurück, statt den übergebenen Namen zu verwenden. Repariere den Fehler.

``` python, py-execute
def greet_bavarian_wrong(name: str) -> str:
    return 'Servus ' + 'name'

greet_bavarian_wrong('Ada')
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Funktion `'Hello Grace'` zurückgibt.

``` python, py-execute
def greet_english(name: str) -> str:
    return ____

greet_english('Grace')
```

### 5. Passe die Funktion an

Passe die Funktion so an, dass sie statt mit `'Servus'` mit `'Hallo'` grüßt.

``` python, py-execute
def greet_bavarian(name: str) -> str:
    return 'Servus ' + name

greet_bavarian('Luis')
```
