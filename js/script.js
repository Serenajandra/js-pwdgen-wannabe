// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const userName= prompt(`Gentilmente, potresti dirmi come ti chiami?`);
console.log(userName);
document.getElementById(`name`).innerHTML=`Il mio nome è ${userName}.`;

const userSurname= prompt(`Ora dimmi, qual'è il tuo cognome?`);
console.log(userSurname);
document.getElementById(`surname`).innerHTML= `Il mio cognome è ${userSurname}.`;

const favouriteColor= prompt(`Penultima domandina veloce: il tuo colore preferito?`);
console.log(favouriteColor);
document.getElementById(`color`).innerHTML=`Il mio colore preferito è il ${favouriteColor}.`;

const favouriteNumber= prompt(`Questa è l'ultima domanda: il tuo numero preferito è il 21, vero? Rispondi 21 sia in caso affermativo...che negativo!!Grazie!`);
console.log(favouriteNumber);
document.getElementById(`number`).innerHTML=`Ma sei un veggente! E' proprio così, il mio numero preferito è ${favouriteNumber}.`;

document.getElementById(`end`).innerHTML= `Bene, ti comunico ufficialmente che ho deciso quale sarà la tua password, preparati! La tua sicurissima password sarà ${userName}${userSurname}${favouriteColor}21 ...non è geniale?`;