//Multiplication
const multiplication = document.getElementById('multiplication');
for (let i = 1; i < 10; i++) {

    for (let j = 1; j <= 9; j++) {  
        const p = document.createElement('p');
        multiplication.appendChild(p);
        if(j === 3 || j === 6 || j === 9){
            p.style.backgroundColor="blue";           //Change background each 3 lines
        }
        p.textContent = i + " x " + j + " = " + i * j //Example: 1 x 2 = 2
    }
}

//Conversion
const euro = document.getElementById('euro');
const franc = document.getElementById('franc');
const prixEuro = 0.15;
const prixFranc = 6.56;

euro.addEventListener('keyup', ()=>{
    franc.value = parseFloat(euro.value * prixFranc);
    //User entre valeur en euro, resultat apparait dans champ Franc et inversement L25
});
franc.addEventListener('keyup', ()=>{
    euro.value = parseFloat(franc.value * prixEuro);
})


//Effet menu
const list = document.querySelectorAll('#menu li');
for (let i = 0; i < list.length; i++) {
   list[i].addEventListener('mouseover', ()=>{
    list[i].style.color = "red";
})}

//Liste panier
 
const fruits = $('#fruits option');
const panier = $('#panier option');
const add = $('#add');
const remove = $('#remove');

for (let i = 0; i < fruits.length; i++) {
    add.cli
}
