# Syntaxfehler


In großen Skripten kann es schnell schwierig werden, Syntaxfehler zu
finden.

``` python, py-execute
def double(x: int) -> int:
    return 2 * x

def square(x: int) -> int
    return x * x
```

Deshalb zeigt Python in der ersten Zeile einer Fehlermeldung genau an, in welcher Zeile der Fehler aufgetreten ist.

```
File "<exec>", line 4
    def square(x: int) -> int
                             ^
SyntaxError: expected ':'
```

Darunter wird angezeigt, an welcher Stelle welches Zeichen erwartet wurde.
