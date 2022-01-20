let age = parseInt(prompt('Quanti anni ha il viaggiatore?'));

let km = parseInt(prompt('Di quanti kilometri è il viaggio?'));

if (isNaN(age) || isNaN(km)) {

    alert('Devi inserire un numero valido!');

} else {

    if (age > 65) {
        sconto = 'Congratulazione! Sei vecchio! È stato applicato uno sconto del 40% per gli over 65.'
        prezzoViaggio = (km * .21) * .60;
    } else if (age < 18) {
        sconto = 'Congratulazioni! Sei giovane! È stato applicato uno sconto del 20% per i minorenni.'
        prezzoViaggio = (km * .21) * .80;
    } else {
        prezzoViaggio = km * .21;
        sconto = ''
    } 

}

document.getElementById('sconto').innerHTML = sconto 

document.getElementById('prezzoViaggio').innerHTML = '€' + (prezzoViaggio.toFixed(2))



