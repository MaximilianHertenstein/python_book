# Funktionen prüfen

Bisher haben wir, um zu sehen, ob eine Funktion korrekt arbeitet, diese
in der Shell aufgerufen.

Dies kann man aber auch mit `assert`-*Statements* erreichen. Dafür
schreiben wir hinter das Schlüsselwort `assert` einen Funktionsaufruf,
den *Gleichheitsoperator* `==` und den Wert, den wir erwarten. Wenn der
Funktionsaufruf zu dem angegeben *Wert* ausgewertet wird, passiert
nichts.

``` python, py-execute
assert yard_to_inch(2) == 72
```

Wenn dies nicht der Fall ist, wird ein `AssertionError` angezeigt.

``` python, py-execute
assert yard_to_inch(2) == 10
```

Es ist sinnvoll, solche Überprüfungen selbst in eine Funktion
auszulagern.

``` python, py-execute
def test_yard_to_inch():
    assert yard_to_inch(1) == 36
    assert yard_to_inch(2) == 72
    assert yard_to_inch(3) == 108
```

``` python, py-execute
test_yard_to_inch()
```

Da hier kein `AssertionError` angezeigt wurde, hat die Funktion den Test
bestanden.