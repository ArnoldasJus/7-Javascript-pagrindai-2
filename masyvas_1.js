// 1. Sukurkite skriptą, kuris paima informaciją iš input laukelio mygtuko paspaudimu ir papildo masyvą.

let masyvas1 = [8, 'yellow', 'Arvydas'];

document.querySelector('#ikelti_i_masyva').addEventListener('click', function() {
    let nauji_masyvo_duomenys = document.querySelector('#nauji_masyvo_duomenys').value;
    masyvas1.push(nauji_masyvo_duomenys);

    for(let i = 0; i < masyvas1.length; i++) {
        document.querySelector('#masyvas').innerHTML += '<div>' + masyvas1[i] + '</div>';
    }

    document.querySelector('#nauji_masyvo_duomenys').value = '';
});