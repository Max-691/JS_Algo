/*
const tab = [4, 6, 8, 14, 15, 19, 26, 28, 30, 34, 45, 48, 51];
const nb = 7;
let a = 0;
let m = 0;
let b = tab.length-1;
let count = 0;
while (a < b) {
    count++;
    if (count >= 100) {
        console.log("stopped");
        break;
    }
    m = Math.ceil((a + b) / 2);
    if (nb === tab[m]) {
      console.log("trouvé: " + tab[m]);
      break;
    } else if (nb > tab[m]) {
        a = m;
        //console.log('plus grand');
    } else if (nb < tab[m]) {
        b = m;
        //console.log('plus petit');
    }
}*/

//CORRECTION
let nb = 4;
let tab = [];
let a;
let b;
let m;

tab = [4, 6, 8, 14, 15, 19, 26, 28, 30, 34, 45, 48, 51];
a = 0;
b = tab.length - 1;
m = Math.ceil((a + b) / 2);
while (a < b) {
  if (tab[m] == nb) {
    a = m;
    break;
  } else if (tab[m] > nb) {
    b = m - 1;
  } else {
    a = m + 1;
  }
  m = Math.ceil((a + b) / 2);
}
if (tab[a] == nb) {
  console.log("trouvé à la position: " + (a + 1));
} else {
  console.log("non trouvé");
}
