const quantite = document.getElementsByClassName("quantite");//ciblage quantité
const prixunit = document.getElementsByClassName("prixunit");//ciblage du prix unitaire
const prix = document.getElementsByClassName("prix");//ciblage du prix
const total = document.getElementById("total");//ciblage du total
const send = document.getElementById("send");//ciblage du bouton
total.value = 0
  for (let i = 0; i < quantite.length; i++) {
    quantite[i].addEventListener("keyup", () => {
  
      if (isNaN(quantite[i].value || undefined)) {
        quantite[i].value = 0;
      }
      if (quantite[i].value < 0) {
          quantite[i].value = 0;
      }
      if (prixunit[i].value < 0) {
        quantite[i].value = 0;
      }
      if (isNaN(prixunit[i].value || undefined)) {
        prixunit[i].value = 0;
      }
      prix[i].value = parseFloat(quantite[i].value * prixunit[i].value);
      total.value += prix[i].value;
  
    
    prixunit[i].addEventListener('keyup', ()=>{
      prix[i].value = parseFloat(quantite[i].value * prixunit[i].value);
      parseFloat(total.value) += parseFloat(prix[i].value);
    })
  })
}