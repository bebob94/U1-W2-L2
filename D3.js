/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let number1= 40
let number2= 30

if(number1>number2){
  console.log("number1 è maggiore");
} else{
  console.log("number2 è maggiore");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let num= 7

if (num!==5) {
  console.log("not equal");
} else {
  console.log("equal");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num2=13

if (num2 % 5===0) {
  console.log("il numero è divisibile per 5");
} else{
  console.log("il numero non è divisibile per 5");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let num3=5
let num4=2

if (num3 ===8 || num4 === 8) {
  console.log("condizione verificata");
} else if (num3 + num4 ===8) {
  console.log("condizione verificata");
} else if (num3-num4 ===8){
  console.log("condizione verificata");
} else if (num4-num3 ===8){  
  console.log("condizione verificata");
}else{
  console.log("condizione non verificata");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

 let totalShoppingCart= 15

 let total= totalShoppingCart + 10

console.log(total);

if (totalShoppingCart>=0) {
  console.log("il totale è " + totalShoppingCart);
} else{
  console.log("il totale è " + total);
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2= 70

let blackfriday= totalShoppingCart2 - totalShoppingCart2 * 20/100

let tot= blackfriday + 10
console.log(blackfriday);
console.log(tot)

if (blackfriday >=50) {
  console.log("il totale è " + blackfriday);
} else{
  console.log("il totale è " + tot);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
// const block={
// val1: 10,
// val2: 20,
// val3: 30,
// }
let val1=20
let val2=30
let val3=10


if (val1>=val2) {
  if (val1>=val3) {
    if (val2>=val3) {
      console.log(val1, val2, val3);
    }else
    console.log(val1,val3,val2);
  }else{
    console.log(val3,val1,val2);
  }
}else{
  if (val2>=val3) {
    if (val1>=val3) {
      console.log(val2, val1, val3);
    }else{
      console.log(val2, val3, val1);
    }
  }else{
    console.log(val3, val2, val1);
  }
}
// const unorderlist= [val1,val2,val3]

// console.log(unorderlist);

// console.log(unorderlist.reverse()); 
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


let valore= "bebo"

if (typeof valore== "number") {
  console.log("è stato inserito un numero");
}else{
  console.log("è stato inserita una stringa");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let valx=16

if (valx%2===0) {
  console.log("il numero è pari");
} else{
  console.log("il numero è dispari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

*/

let val =4
  if (val < 10 && val >5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if(val>=10) {
      console.log("Uguale a 10 o maggiore");
    }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city="Lazio"

console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName

console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills.pop()
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const firstarray=[]
firstarray.push(1,2,3,4,5,6,7,8,9,10)

console.log(firstarray);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
firstarray[9]=100
console.log(firstarray);
// console.log(firstarray);
/* SCRIVI QUI LA TUA RISPOSTA */
