// 1. Sukurkite skriptą, kuris paima informaciją iš input laukelio mygtuko paspaudimu ir papildo masyvą.

let masyvas1 = [8, 'yellow', 'Arvydas'];

// for(let i=0; i< 9000; i++) {
//     let atsitiktinisSkaicius = Math.floor(Math.random() * 10000);
//     masyvas1.push(atsitiktinisSkaicius);
// }

// document.querySelector('#valyti').addEventListener('click', function(){
//     console.log('Valymo mygtukas paspaustas');
//     document.querySelector('#skaiciuotuvo_rezultatas').innerHTML = "";
// });

document.querySelector('#ikelti_i_masyva').addEventListener('click', function() {
    let nauji_masyvo_duomenys = document.querySelector('#nauji_masyvo_duomenys').value;
    masyvas1.push(nauji_masyvo_duomenys);

    for(let i = 0; i < masyvas1.length; i++) {
        document.querySelector('#masyvas').innerHTML += '<div>' + masyvas1[i] + '</div>';
    }
});

// for(let i = 0; i < masyvas1.length; i++) {
//     document.querySelector('#masyvas').innerHTML += '<div>' + masyvas1[i] + '</div>';
// }

// console.log(masyvas1);