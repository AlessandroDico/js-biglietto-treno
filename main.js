// document.writeln('hello world');

// il prezzo del biglietto dipende dalla distanza da percorrere e costa € 0.21 / km
// è previsto uno sconto del 20% per i minorenni
// gli over 65 hanno diritto ad uno sconto del 40%


// prezzo fisso per km € 0.21

var fixed_price = parseFloat(0.21);
console.log(fixed_price);

// quanti kilometri percorrerà il passeggiero.

var kilometers = parseFloat(prompt('Quanti km percorrerà il passeggiero?'));
console.log(kilometers);

// prezzo del biglietto è uguale alla moltiplicazione dei km * prezzo fisso biglietto

var ticket_price = (kilometers * fixed_price);
console.log(ticket_price);

// ci serve sapere l'età del passeggiero per sapere se può avere scontistiche

var anni_passeggiero = parseInt(prompt('Quanti anni ha il passeggiero?'));
console.log(anni_passeggiero);

// se il passeggiero è minorenne allora avrà lo sconto del 20%
// se il passeggiero è over 65 allora avrà lo sconto del 40%

var tiket_price_sale18 = (ticket_price) - ((ticket_price) * 20) /100;

var tiket_price_sale65 = (ticket_price) - ((ticket_price) * 40) /100;

if (anni_passeggiero < 18) {
    ticket_price = tiket_price_sale18 ;
    console.log(tiket_price_sale18);

} else if (anni_passeggiero >= 65) {
    ticket_price = tiket_price_sale65 ;
    console.log(tiket_price_sale65);

}




/*--------------*/
