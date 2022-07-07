// 1. Sukurkite skriptą, kuris paima informaciją iš input laukelio mygtuko paspaudimu ir papildo masyvą.

let masyvas1 = [8, 'yellow', 'Arvydas'];

// for(let i=0; i< 9000; i++) {
//     let atsitiktinisSkaicius = Math.floor(Math.random() * 10000);
//     masyvas1.push(atsitiktinisSkaicius);
// }


//document.querySelector('#masyvas').append(masyvas1);
for(let i = 0; i < masyvas1.length; i++) {
    document.querySelector('#masyvas').innerHTML += '<div>' + masyvas1[i] + '</div>';
}

//document.querySelector('#masyvas').innerHTML = '<div>' + masyvas1 + '</div>';
console.log(masyvas1);