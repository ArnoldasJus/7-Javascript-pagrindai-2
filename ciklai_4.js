// 4. Parašykite skriptą, kuri suskaičiuotų kiek natūralių skaičių intervale [a; b] yra lyginių skaičių, besidalijančių iš 3
"use strict";
console.log("Lyginiai, kurie dalinasi is 3 [20]");
for(let i=1; i<21; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(i);
    }
}