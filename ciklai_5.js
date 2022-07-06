// 5. Martynas labai mėgsta saldainius. Mamos slėptuvėje jis rado m saldainių. Pirmą dieną jis suvalgė 1 saldainį, antrąją – 2, trečiąją – 3. Kiekvieną kitą dieną jis suvalgydavo vienu saldainiu daugiau negu prieš tai buvusią dieną. Per kelias dienas d Martynas suvalgys visus saldainius? Paskutinei dienai gali likti mažiau saldainių. Pasitikrinkite. Kai m = 11, turėtumėte gauti d = 5.
"use strict";

let m = 11;
let d = 0;

while(m > 0) {
    d++;
    m = m - d;
    
    
    console.log("Diena: " + d);
    console.log("Saldainiai: " + m);
}

console.log("Martynui užteko saldainių " + d + " dienoms.");