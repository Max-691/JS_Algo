
function randomNb(min, max, result){
    for(let i = 0; i < 3; i++){
         result.push(Math.floor(Math.random() * (max - min)) + min); 
         if (result[i] * result[i] == 8) {
              console.log('win');
         }
         else{
            console.log('loose');
         }
    }
    
    console.log(result);
}
randomNb(1, 6, []);


