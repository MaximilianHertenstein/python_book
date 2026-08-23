# Chapter 3: PyScript-Editor

Der folgende Editor ist eine Alternative zu JupyterLite direkt im Buch.
Du kannst den Code im Editor aendern und mit `Run` ausfuehren.
Beide Editoren nutzen dieselbe Umgebung, damit Variablen geteilt werden.

<script type="py-editor" env="klasse" setup>
zahl = 7
fach = "Informatik"
</script>

<script type="py-editor" env="klasse">
print("Hallo aus dem PyScript-Editor!")

for nummer in range(1, 4):
    print(f"{nummer}. Stunde: {fach}")

if zahl % 2 == 0:
    print("Die Zahl ist gerade.")
else:
    print("Die Zahl ist ungerade.")
</script>


<script type="py-editor" env="klasse">
print(f"Geteilte Variable zahl = {zahl}")
print(f"Geteilte Variable fach = {fach}")

</script>

Hinweis: Der Python-Interpreter wird erst geladen, wenn du das erste Mal auf `Run` klickst.

## Werte ohne `print()` anzeigen

Ein PyScript-Editor fuehrt Code als Skript aus, nicht wie eine Jupyter-Zelle.
Deshalb wird der letzte Ausdruck eines Blocks nicht automatisch angezeigt, wenn
du einfach nur `zahl` in eine Zeile schreibst. Der offizielle PyScript-Weg,
Werte ohne die "print"-Formatierung anzuzeigen, ist `display()`:

<script type="py-editor" env="klasse">
from pyscript import display

display(zahl)
display(fach)
</script>

`display()` ist der empfohlene Ersatz fuer `print()`, wenn du nur einen Wert
zeigen willst (auch fuer Bilder, Tabellen oder HTML geeignet).

## Warum die PyScript-Shell dafuer nicht genutzt wird

Die [PyScript-Shell](https://docs.pyscript.net/2026.7.3/user-guide/terminal/)
verhaelt sich zwar wie eine echte Python-Konsole (dort wuerde `zahl` alleine
tatsaechlich `7` anzeigen), das funktioniert in diesem Buch aber aus zwei
Gruenden nicht zuverlaessig:

1. Eine echte interaktive Shell mit Eingaben braucht einen Web-Worker. Ein
   Worker ist aber ein komplett eigener Python-Interpreter mit eigenem
   Speicher - er kann die Variablen aus den Editor-Bloecken oben nicht sehen,
   selbst wenn beide denselben `env`-Namen verwenden.
2. Web-Worker mit Eingabe brauchen zusaetzliche Server-Header
   (`Cross-Origin-Opener-Policy` / `Cross-Origin-Embedder-Policy`), die auf
   GitHub Pages nicht ohne weiteres verfuegbar sind.

Deshalb ist `display()` in den Editor-Bloecken der zuverlaessigste Weg, um
Werte ohne viel Tipparbeit anzuzeigen.