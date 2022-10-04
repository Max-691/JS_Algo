//Multiplication
const multiplication = document.getElementById('multiplication');
for (let i = 1; i < 10; i++) {

    for (let j = 1; j <= 9; j++) {  
        const p = document.createElement('p');
        multiplication.appendChild(p);
        if(j === 3 || j === 6 || j === 9){
            p.style.backgroundColor="blue";
        }
        p.textContent = i + " x " + j + " = " + i*j
    }
}

//Conversion
const euro = document.getElementById('euro');
const franc = document.getElementById('franc');
const prixEuro = 0.15;
const prixFranc = 6.56;

euro.addEventListener('keyup', ()=>{
    franc.value = parseFloat(euro.value * prixFranc);
    
});
franc.addEventListener('keyup', ()=>{
    euro.value = parseFloat(franc.value * prixEuro);
})


//Effet menu
const list = document.querySelectorAll('#menu li');
for (let i = 0; i < list.length; i++) {
   list[i].addEventListener('mouseover', ()=>{
    list[i].style.color="red";
    setTimeout(function(){
        list[i].style.color="";
    },400 )
   })
}

