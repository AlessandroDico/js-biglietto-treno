// document.writeln('hello world');

// il prezzo del biglietto dipende dalla distanza da percorrere e costa € 0.21 / km
// è previsto uno sconto del 20% per i minorenni
// gli over 65 hanno diritto ad uno sconto del 40%

// richiesta nome e cognome del passeggero
var passenger_name = prompt('Inserisci il tuo nome');
document.getElementById('passenger_name').innerHTML = passenger_name;

var passenger_surname = prompt('Inserisci il tuo cognome');
document.getElementById('passenger_surname').innerHTML = passenger_surname;


// prezzo fisso per km € 0.21

var fixed_price = parseFloat(0.21);
console.log(fixed_price);

// quanti kilometri percorrerà il passeggero.

var kilometers = parseFloat(prompt('Quanti km percorrerà il passeggero?'));
console.log(kilometers);

// prezzo del biglietto è uguale alla moltiplicazione dei km * prezzo fisso biglietto

var ticket_price = (kilometers * fixed_price).toFixed(2);
console.log(ticket_price);

// ci serve sapere l'età del passeggero per sapere se può avere scontistiche

var passenger_years = parseInt(prompt('Quanti anni ha il passeggero?'));
console.log(passenger_years);

// se il passeggero è minorenne allora avrà lo sconto del 20%
// se il passeggero è over 65 allora avrà lo sconto del 40%

var ticket_price_sale18 = ((ticket_price) - ((ticket_price) * 20) /100).toFixed(2);

var ticket_price_sale65 = ((ticket_price) - ((ticket_price) * 40) /100).toFixed(2);


// ISTRUZIONI CONDIZIONALI

if (passenger_years < 18) {
    console.log(ticket_price_sale18);
    document.getElementById('final_price').innerHTML = (ticket_price_sale18 + '€');

} else if (passenger_years >= 65) {
    console.log(ticket_price_sale65);
    document.getElementById('final_price').innerHTML = (ticket_price_sale65 + '€');


} else {
    console.log(ticket_price);
    document.getElementById('final_price').innerHTML = (ticket_price + '€');

}

// PROVA isNaN





/*--------------*/
