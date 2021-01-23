/*
    - Reemplaça la paraula blau per la paraula verd del següent text:
     "Tinc un cotxe de color blau"
    - Després intenta fer-ho remplaçant les o per les u.
*/

const p = 'Tinc un cotxe de color blau.';
console.log(p);
console.log(p.replace('blau', 'verd'));
console.log(p.replace(/o/g, 'u'));