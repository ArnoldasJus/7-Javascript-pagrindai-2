// 3. Sukurkite skriptą, kuris nuorodytame intervale išveda visus skaičius, kurie dalinasi iš 5.
"use strict";
console.log("Lyginiai, kurie dalinasi is 5 [20]");
for(let i=0; i<21; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}