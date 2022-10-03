const img = document.getElementById('img');
const btnarr = document.getElementById('btnarr');
const btnav = document.getElementById('btnav');
for (let i = 1; i < 6; i++) {
  img.src=`images2/anim1.jpg`;
  btnarr.addEventListener('click', ()=>{
    if (i >= 6) {
      i = 1;
    }
    i++;
    img.src=`images2/anim${i}.jpg`;
   
  });

  btnav.addEventListener('click', ()=>{
    if (i <= 1) {
      i = 6;
    }
    i--;
    img.src=`images2/anim${i}.jpg`;
   
  });
}