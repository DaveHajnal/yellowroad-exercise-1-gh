Első feladat

Két javascript függvényt kell implementálni a ./script/script.js fájlban:

A *generateArray(count, max)* függvény két paramétert fogad, és egy olyan tömböt fog visszaadni, amiben count darabszámú random egész szám van,
amelyek mindegyike 1 és max közé esik

A *calculateSteps(arr)* függvény egy az előbb definiált függvény által generált tömböt kap paraméterként, és visszaad egy tömböt a következők szerint:
    
    - A visszaadott tömbben a paraméterként kapott tömb bizonyos indexei szerepelnek
    - Az arr tömbbön a lehető legkevesebb ugrással kell végigmenni úgy, hogy mindig maximum akkorát lehet ugrani, mint amilyen számon éppen állunk. Kevesebbet lehet ugrani, ha megéri. a cél, hogy minél előbb eljussunk a tömb végére.
    
Pl.:

     [3, 2, 4, 1, 1, 3, 1, 1, 1]
     visszaadott tömb: [0, 2, 5, 'end'] 
     (indulunk a 3-asról (0. index), onnan a 4-esre (2. index), onnan a 3-asra (5. index), és vége)

A két megvalósítandó függvényhez készültek "tesztek", ezeket a ./script/tests.js fájlban találjátok. Az index.html-t megnyitva egy böngészőben, láthatjátok a tesztek eredményeit.

Sok sikert :)
