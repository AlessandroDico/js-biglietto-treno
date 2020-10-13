// document.writeln('hello world');

// il prezzo del biglietto dipende dalla distanza da percorrere e costa € 0.21 / km
// è previsto uno sconto del 20% per i minorenni
// gli over 65 hanno diritto ad uno sconto del 40%


// prezzo fisso per km € 0.21

var fixed_price = parseFloat(0.21 + '€') ;
console.log(fixed_price);

// quanti kilometri percorrerà l'utente.

var kilometers = parseFloat(prompt('Quanti km percorrerai?'));
console.log(kilometers);

// prezzo del biglietto è uguale alla moltiplicazione dei km * prezzo fisso biglietto

var ticket_price = (kilometers * fixed_price);
console.log(ticket_price);
