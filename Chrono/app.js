const chrono = document.getElementById("chrono"); //parent div
const start = document.getElementById("start"); //bouton start
const stop = document.getElementById("stop"); //bouton stop
const efface = document.getElementById("efface"); //bouton effacer
const memorise = document.getElementById("memorise"); //bouton memoriser
const time = document.getElementById("time"); //temps global de sec + min
const memoriseP = document.getElementById("memoriseP"); //au click de "memorise" button -> le temps s'affichera ici
const rappel = document.getElementById('rappel');
let memoriseSec = 0;
let memoriseMin = 0;
let sec = 0;
let min = 0;
time.textContent = min + ":" + sec;
start.addEventListener("click", () => {
  let interval = setInterval(function () {
    sec++;
    if (min < 10) {
      //affichage du 0 devant si chiffre
      time.textContent = "0" + min + ":" + sec;
    }
    if (sec < 10) {
      //affichage du 0 devant si chiffre
      time.textContent = min + ":" + "0" + sec;
    }

    if (sec === 60) {
      min++;
      sec = 0;
    }
  }, 100);

  stop.addEventListener("click", () => {
    clearInterval(interval);
  });

  efface.addEventListener("click", () => {
    clearInterval(interval);
    sec = 0;
    min = 0;
    time.textContent = min + ":" + sec;
  });

  memorise.addEventListener("click", () => {
   memoriseSec = sec;
   memoriseMin = min;
  });

  rappel.addEventListener('click', ()=>{
    sec = memoriseSec;
    min = memoriseMin;
    time.textContent = min + ":" + sec;
  })
});
