// 2. Sukurkite skriptą, kuris nuorodytame intervale išveda visus nelyginius skaičius.
"use strict";
console.log("Nelyginiai skaičiai [20]");
for(let i=0; i<21 ;i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}