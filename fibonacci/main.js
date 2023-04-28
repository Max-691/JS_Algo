//Fibonacci avec tableau
/*const array = [0, 1];
let avantDernier = 0;
let dernierValeur = 0;
let result = 0;
for(let i = 0; i < 50; i++){
  avantDernier = array[array.length - 2];
  dernierValeur = array[array.length - 1];
  result = avantDernier + dernierValeur;
  array.push(result);
}
console.log(array)
*/

//Fibonacci avec function
function Fibonacci(nb){
  let nb1 = 0;
  let nb2 = 1;
  let result = 0;
  for(let i = 0; i < nb; i++){
    result = nb1 + nb2;
    nb1 = nb2;
    nb2 = result;
    console.log(nb1 + nb2);
  }
}
Fibonacci(10)