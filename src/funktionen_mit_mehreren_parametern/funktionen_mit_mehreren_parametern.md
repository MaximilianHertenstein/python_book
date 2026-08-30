# Funktionen mit mehreren Parametern


# Funktionen mit mehreren Parametern

Funktionen können auch mehrere oder gar keine *Parameter* haben. Die
*Parameter* stehen in den runden Klammern hinter dem Funktionsnamen.
Zwischen zwei *Parameter* schreibt man ein Komma.

``` python, py-execute
def constant_zero() -> int:
    return 0
    
def sum_of_squares(p_a: int, p_b: int) -> int:
    return p_a * p_a + p_b * p_b
```

Beim Aufruf der Funktion muss dann die entsprechende Anzahl an
*Argumenten* in Klammern übergeben werden. Auch die *Argumente* werden
durch Kommas voneinander getrennt.

``` python, py-execute
constant_zero()
```
``` python, py-execute

sum_of_squares(2, 3)
```