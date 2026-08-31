# Iteration über Strings

Strings sind Zeichenketten. Wir können diese Zeichenketten mit einer
`for`-Schleife durchlaufen.

``` python, py-execute
for char in "hello":
    print(char)
```

Bei einer `for`-Schleife besteht der *Schleifenkopf* aus

- aus Schlüsselwort `for`

- einer *Schleifenvariable* (hier `char`)

- dem Schlüsselwort `in`

- dem String, der durchlaufen werden soll

- einem abschließender Doppelpunkt

Bei der Ausführung der Schleife durchläuft die Schleifenvariable die
Zeichen in dem String.

- Beim ersten Durchlauf hat `char` den Wert `"h"`.

- Beim zweiten Durchlauf hat `char` den Wert `"e"`.

- \\(`\vdots`\\)

Nach dem Schleifenkopf folgt Schleifenkörper. Dieser wird eingerückt. Er
besteht aus Statements, in denen die Schleifenvariable genutzt werden
kann.

Diese werden bei jedem Durchlauf der Schleife ausgeführt. Da die
Schleifenvariable einen anderen Wert hat, passiert nicht unbedingt immer
das Gleiche.

- Da `char` bei der ersten Ausführung des Schleifenkörpers den Wert
  `"h"` hat, wird `print("h")` ausgeführt

- Da `char` bei der zweiten Ausführung des Schleifenkörpers den Wert
  `"e"` hat, wird `print("e")` ausgeführt

- \\(`\vdots`\\)
