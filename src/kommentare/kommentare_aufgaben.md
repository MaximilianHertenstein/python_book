# Aufgaben: Kommentare

## Quiz

### Quiz 1

{{#quiz ../quizzes/kommentare_01.toml}}

### Quiz 2

{{#quiz ../quizzes/kommentare_02.toml}}

### Quiz 3

{{#quiz ../quizzes/kommentare_03.toml}}

### Quiz 4

{{#quiz ../quizzes/kommentare_04.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

``` python, py-execute
# Diese Zeile berechnet das Doppelte von 4
x = 2 * 4
x
```

### 2. Ergänze die Lücke

Ergänze das fehlende Zeichen am Anfang der ersten Zeile, damit sie zu einem Kommentar wird.

``` python, py-execute
____ Diese Funktion rechnet Fuß in Zoll um
def feet_to_inch(length_in_feet: int) -> int:
    return 12 * length_in_feet

feet_to_inch(2)
```

### 3. Fehler finden und reparieren

Die erste Zeile erzeugt einen SyntaxError, weil sie weder gültiger Python-Code noch ein Kommentar ist. Repariere sie.

``` python, py-execute
Diese Funktion verdoppelt eine Zahl
def double(x: int) -> int:
    return x + x

double(5)
```

### 4. Verändere die Eingabe

Ändere nur den Kommentar so, dass er die Berechnung noch genauer beschreibt (z. B. mit den konkreten Werten). Der berechnete Wert soll sich dabei nicht ändern.

``` python, py-execute
# Berechnet die Fläche eines Rechtecks
width = 3
height = 4
width * height
```

### 5. Prüfe deine Idee

Sage voraus, welchen Wert `x` hat, und erkläre, warum der Kommentar keinen Einfluss auf das Ergebnis hat.

``` python, py-execute
x = 5 # x = 10
x
```
