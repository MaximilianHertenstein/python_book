# Aufgaben: Iteration über Strings

## Quiz

### Quiz 1

{{#quiz ../quizzes/iteration_ueber_strings_01.toml}}

### Quiz 2

{{#quiz ../quizzes/iteration_ueber_strings_02.toml}}

### Quiz 3

{{#quiz ../quizzes/iteration_ueber_strings_03.toml}}

### Quiz 4

{{#quiz ../quizzes/iteration_ueber_strings_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
for char in "cat":
    print(char)
```

### 2. Verändere die Eingabe

Ändere nur den String, sodass genau vier Buchstaben ausgegeben werden.

``` python, py-execute
for char in "cat":
    print(char)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `reversed` am Ende den umgekehrten String enthält.

``` python, py-execute
word = 'python'
reversed = ''
for char in word:
    reversed = ____
reversed
```

### 4. Fehler finden und reparieren

Ergänze die fehlende Initialisierung von `letter_count` (als Zähler, der bei `0` beginnt).

``` python, py-execute
word = 'hello'
for char in word:
    letter_count = letter_count + 1
letter_count
```

### 5. Prüfe deine Idee

Sage voraus, was in jeder Zeile ausgegeben wird, bevor du den Code ausführst.

``` python, py-execute
greeting = 'hi'
weird_greeting = ''
for char in greeting:
    weird_greeting = char + weird_greeting
    print(weird_greeting)
```
