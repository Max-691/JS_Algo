//5.9 lire suite des prix en euros entiers terminée par 0. Calculer somme, lire la somme et simuler remise de la monnaie en affichant "10€", "5€", "1€" autant de fois qu'il y a de coupures de chaque sorte à rendre
//PROBLEME DANS RENTE DE MONNAIE (50 P1 AU LIEU DE 5 B10)
/*
let prix = 1; //prix entré par user
let pay; //nombre que user entre pour payer
let total = 0; //total à payer
let b10 = 0;
let b5 = 0;
let p1 = 0;
while (prix !== 0) {
  prix = parseInt(prompt("enter price"));
  total += prix;
}
pay = parseInt(prompt("combien payez vous ? (entrez un nombre)"));
l = pay - total; //total - pay

if (l < 0) {
  alert("il vous reste" + l + " à payer");
}
while (l >= 10) {
  //l=pay - total ;
  l = l - 10;
  b10++;
  console.log(b10);

}

if (l >= 5) {
  l = l - 5;
  b5++;
  console.log(b5);
}

p1 = l;
alert("nous avons rendu " + b10 +  " billets de 10€, " + b5 + " billets de 5€, " + p1 +  " pièces de 1€");
//si user donne trop, alert on vous rend (montant en trop), si user donne pas assez, alert vous devez (montant manquant)
*/

//5.10
/*N = nombre de chevaux par temps, demander user nv cheveaux partant, nb de chevaux joués
afficher dans l'ordre une chance sur X de gagner
dans le désordre un chance sur Y de gagner
1. N = nb chevaux joués, for i = 1; i <= n; i++   calculer factorielle n, console.log(facto n)
*/
/*
let n = parseInt(prompt('nombre chevaux partants'));
let p = parseInt(prompt('nombre chevaux joués'));

let factoN = 1;
let factoP = 1;
let factoX = 0;
let factoY = 0;
for (let i = 1; i <= n; i++) {
  factoN *= i; 
  console.log(factoN);
}
for (let j = 1; j <= n; j++) {
  factoP = n - p;
  console.log(factoP);
}
factoX = factoN - factoP;
factoY = factoN - factoP / (n-p);
console.log(factoX);
*/

//6.6 suite de fibonacci
/*
let suite = [1, 1];
for (let i = 2; i <= 7; i++) {
  suite.push(suite[i-1] + suite[i-2]);
  console.log(suite);
}
*/
//6.7 moyennes tableau 9 notes
/*
let notes = alert('entrez 9 notes');
let notesTableau = [];
let somme = 0;
let result = 0;
for (let i = 0; i < 9; i++) {
  notes = parseInt(prompt('entrez 9 notes'));
  notesTableau.push(notes[i]);
  somme += notes[i];
  result = somme / notesTableau;
}
console.log(result);
*/

//6.11
/*à partir de 2 tableaux calculer le schtroumpf des 2 tableaux : multiplier chaque élément du tableau 1 par chaque élément du tableau 2 et additionner le tout
Exemple: tb1 = 4, 8, 7, 12; tb2 = 3, 6;*/
/*
const tb1 = [4, 8, 7, 12];
const tb2 = [3, 6];
let result = 0;
for (let i = 1; i <= tb1.length; i++) {

  for (let j = 1; j < i; j++) {
    result += tb1[i] * tb2[j] ;
  }
}
console.log(result);
*/

//afficher nb pairs avec tirets entre sauf pour le dernier

let display = "";
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    display = i + '-';
  }
  if (i === 20) {
    display = i;
  }
}
console.log(display);


//créer tableau multidimensionel qui représente panier achat, contenu: cocal 3 bouteilles à 0.99€ l'unité; 4 packs de bière à 5€ unité; 2 bouteilles wisky à 15€ unité
//calculer prix total du panier avec détails des achats
/*
const panier = [
  {
    name:"coca",
    price: 0.99,
    quantity: 3
  },
  {
    name: "beer",
    price: 5,
    quantity: 4
  },
  {
    name: "wisky",
    price: 15,
    quantity: 2
  }
]
let prices = 0;
let result;
for (let i = 0; i < panier.length; i++) {
  prices += panier[i].price;
  result = panier[i].name + ": " + panier[i].quantity + " *" + panier[i].price + " résultat " + Math.round(prices) + " euros";
  
}
alert(result);
*/
//créer function récursive qui permet de calculer la valeur d'un placement de 10 000€ sur 20 ans avec intérêts de 4%
/*
let compteur = 0;
let placement = 10000;
let taux = 0.04;
function bank(compteur, placement){
  compteur++;
  placement = placement + placement*0.04
  if(compteur < 20){
    return bank(compteur, placement);
  }
  else {
    return Math.round(placement);
  }
}

console.log(bank(compteur, placement));
*/
//calculatrice
/*
function calc (a, b, operation){
  console.log(eval(a + operation + b))
}
calc(2, 5, "+");
*/
//function si nb d'objets est > 1: ajouter pluriel soit "s"
/*
let chaine = "seau";
function pluriel (){
  if (chaine.endsWith('eau')) {
    chaine += "x";
    return chaine;
  }  
  }
pluriel();
*/
/*
//expressions régulières, sortir nombres entre -999 et 999
let regex = RegExp(/1-?[0-9]{1.3}1-?[1-9]{1}[0-9]{0.2}$/);
test(regex);
*/
//function qui rempalce dans un nombre le point par virgule
/*
let entry = "0.85";
function nb (){
 console.log(entry.replace('.', ','));
}
nb()
*/
//function qui permet d'extraire l'extension de nom domaine ou fichier
/*
let entry = "test.js";
let result = "";
function ext(){
  result = entry.split(".")[entry.length];
  console.log(result);
}
ext();
*/

//function qui affiche la date qui sera dans n jours à partir d'aujourdhui
/*
let date = new Date();
let n = parseInt(prompt('enter date'));
let newDate = new Date();
newDate.setDate(date.getDate() + n);
alert("Aujourd'hui nous sommes le " + date.toLocaleDateString() + " dans 17 jours nous serons le " + newDate.toLocaleDateString());
*/
//créer expression régulière qui vérifie qu'une date est valide au format JJ/MM/AAAA
/*
const ask = prompt('enter date at format DD/MM/AAAA');
let regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(ask);
console.log(regex);
*/
//créer function permettant l'affichage alterné des images
/*
let count = 0;
const rendu_img = document.getElementById('rendu-img');
const img2 = document.getElementById('img2');
let images = [];
images[0] = new Image().src="images/1.png";
images[1] = new Image().src="images/2.png";
images[2] = new Image().src="images/3.png";


function afficherImageBis(){
  img2.src = images[count%(images.length)].src;
  count++;
}
afficherImageBis();
setInterval(afficherImageBis(), 100);
*/
//manque couleur class presque fini
/*
const contentDiv = document.getElementById('content');
const menu = document.getElementById('menu');
const li = document.getElementsByClassName('li');
const renduP = document.getElementById('renduP');
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', ()=>{
    renduP.textContent = li[i].textContent;
    li[i].classList.toggle('click');
    
  });
}
*/
