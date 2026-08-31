

# Listen verändern

## Übersicht

Wir haben bis jetzt nur unveränderliche *Werte* genutzt. Wir konnten
zwar den *Wert* einer *Variablen* durch einen neuen *Wert* ersetzen aber
**nicht** den *Wert* selbst ändern. Bei *Listen* ist dies jedoch
möglich.

## Elemente zur Liste hinzufügen

Mit der Methode `append` können wir ein Element zu einer *Liste*
hinzufügen. Hierbei wird tatsächlich der *Wert* selbst geändert.

``` python, py-execute
xs = [True]
```

![variable_xs_vor_append](variable_xs_vor_append/variable_xs_vor_append.svg)
``` python, py-execute
xs.append(False)
```

![variable_xs_nach_append](variable_xs_nach_append/variable_xs_nach_append.svg)
``` python, py-execute
xs
```

## Elemente austauschen

Wir können ein Element einer *Liste* durch ein neues Element ersetzen.
Hierfür schreiben wir auf der linken Seite des *Zuweisungsoperators* `=`
den Namen der *Liste* und den *Index* des Elements, das wir austauschen
wollen. Auf der rechten Seite steht ein Ausdruck. Dessen *Wert* wird an
der entsprechenden Stelle in der *Liste* eingefügt.

``` python, py-execute
xs = [True, False, True]
```

``` python, py-execute
xs[2] = False
```
``` python, py-execute
xs
```

Auch hier wird tatsächlich der *Wert* der *Liste* geändert.

![variable_xs](../17_listen/variable_xs/variable_xs.svg)

## Schwierigkeiten beim Umgang mit veränderlichen Werten

Eine Schwierigkeit beim Umgang mit veränderlichen *Werten* sehen wir,
wenn wir zwei *Variablen* erstellen, die auf denselben *Wert* verweisen.

``` python, py-execute
xs = [True, False, True]
```
``` python, py-execute
ys = xs
```

![variable_xs_updated](variable_xs_updated/variable_xs_updated.svg)
``` python, py-execute
ys[2] = False
```

![variablen_xs_ys_vor_änderung](variablen_xs_ys_vor_änderung/variablen_xs_ys_vor_änderung.svg)
``` python, py-execute
xs
```

## Listen in Funktionen ändern

Eine Funktion kann eine *Liste*, die ihr übergeben wird ändern.

``` python, py-execute
def set_first_false(xs: list[bool]) -> None:
    xs[0] = False
```

``` python, py-execute
xs = [True, True]
```
``` python, py-execute
set_first_false(xs)
```
``` python, py-execute
xs
```

![variablen_xs_ys_nach_änderung](variablen_xs_ys_nach_änderung/variablen_xs_ys_nach_änderung.svg)
