const nombre = prompt('combien de nombres');
let entry;
let positif = 0;
let negatif = 0;
for (let i = 1; i <= nombre; i++) {
  entry = parseInt(prompt('entrez les nombres'));
  
  if (entry >= 0) {
    positif++;
  }
  else{
    negatif++;
  }
}
console.log(positif, negatif);