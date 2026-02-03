const ime = 'Juraj';//prompt('Unesite svoje ime:');
console.log(typeof ime, ime);
console.log(`Dobar dan ${ime}!`);

const unosGodina = '2026';

const godina = Number(unosGodina);
console.log (typeof godina, godina + 1);
console.log ( typeof unosGodina, unosGodina + 1);

const cijeliBroj = parseInt ('7');
console.log ( typeof cijeliBroj, cijeliBroj);

const decimalniBroj = parseFloat ('3.14');
console.log ( typeof decimalniBroj, decimalniBroj);

const logickaVrijednost = true;
console.log ( typeof logickaVrijednost, logickaVrijednost);

// logickaVrijednost = false;

let broj = 7;
console.log (typeof broj, broj);
broj = 8;
console.log (typeof broj, broj);

const velikiBroj = 23456790342573285n;
console.log ( typeof velikiBroj, velikiBroj);