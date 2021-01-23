/*
    - Donat el seguit llistat d'objectes 'taula', 'cadira', 'ordinador', 'libreta', 
    per un bucle que mostri per pantalla cada objecte i la seva posició al llistat.
*/

let officeStuff = ['Taula', 'Cadira', 'Ordinador', 'Llibreta'];
for(let i=0; i < officeStuff.length; i++){
    console.log(`Objecte: ${officeStuff[i]} ; Posició: ${i}`);
}