# Aufgaben: snoop

## Quiz

### Quiz 1

{{#quiz ../quizzes/snoop_01.toml}}

### Quiz 2

{{#quiz ../quizzes/snoop_02.toml}}

## Übungen im Python-Playground

Bearbeite die folgenden Aufgaben im Python-Playground.

### 1. Vorhersage → Ausführen

Lies den Code und überlege, welche Variablen und Werte snoop anzeigen wird. Führe ihn danach aus.

<script type="py-editor" config='{"packages": ["snoop"]}'>
import snoop

@snoop
def double(x: int) -> int:
    return x + x

double(4)
</script>

### 2. Ergänze die Lücke

Ergänze die Lücke, sodass snoop auch bei dieser Funktion die Ausführung protokolliert.

<script type="py-editor" config='{"packages": ["snoop"]}'>
import snoop

____
def triple(x: int) -> int:
    return 3 * x

triple(5)
</script>

### 3. Prüfe deine Idee

Entferne testweise die Zeile `@snoop` und führe den Code erneut aus. Vergleiche, was sich in der Ausgabe ändert.

<script type="py-editor" config='{"packages": ["snoop"]}'>
import snoop

@snoop
def count_to_three():
    x = 1
    while x <= 3:
        print(x)
        x = x + 1

count_to_three()
</script>
