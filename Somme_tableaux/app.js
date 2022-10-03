const tb1 = [1, 2, 3, 4, 5, 6];
const tb2 = [7, 8, 9, 10, 11, 12];
let tb3 = [];
let somme = 0;
for (let i = 0; i < tb1.length; i++) {
  somme = tb1[i] + tb2[i];
  tb3.push(somme);
}
console.log(tb3);
