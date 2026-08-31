# Iteration über Strings

Strings bestehen aus einzelnen Zeichen. Wir können diese Zeichen mit einer
`for`-Schleife durchlaufen.

``` python, py-execute
for char in "hello":
    print(char)
```

- In der ersten Zeile wird festgelegt, dass die Variable `char` die Zeichen in `"hello"` durchlaufen soll.
  - Beim ersten Durchlauf hat `char` den Wert `"h"`.
  - Beim zweiten Durchlauf hat `char` den Wert `"e"`.
  - \\(\vdots\\)


- Darunter steht, dass bei jedem Schleifendurchlauf, der Wert der Variable `char` ausgegeben werden soll.

  - Da `char` bei der ersten Ausführung des Schleifenkörpers den Wert
    `"h"` hat, wird zuerst `print("h")` ausgeführt

  - Da `char` bei der zweiten Ausführung des Schleifenkörpers den Wert
    `"e"` hat, wird anschließend `print("e")` ausgeführt

  - \\(\vdots\\)
