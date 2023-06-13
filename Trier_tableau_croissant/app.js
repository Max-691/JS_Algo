/*
let array = [[1,4,5], [1,1,1],[11,1,3],[5,9,1],[11,3,7],[15,4,2]];
let tmp = 0;
for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
        if(array[i] < array[j]){
            tmp = array[j];
            array[j] = array[i];
            array[i] = tmp;
        }
    }
   
}
console.log(array)
*/
let go = true;
let tab = [[1,4,5], [1,1,1], [11,1,3], [5,9,1], [11,3,7], [15,4,2]];
let cpt = 0;
while (go) {
    go = false;
    for (i = 0 ; i < tab.length - 1;i++) {
        cpt++;
        if (tab[i][0] > tab[i + 1][0]) {
			//echange de tout le sous-tab
            ech = tab[i];
            tab[i] = tab[i + 1];
            tab[i + 1] = ech;
            go = true;
            
        }
        else if (tab[i][0] == tab[i + 1][0] && tab[i][1] > tab[i + 1][1]) {
            //echange de tout le sous-tab
            ech = tab[i];
            tab[i] = tab[i + 1];
            tab[i + 1] = ech;
            go = true;
        }
    }
}
console.log(tab);
console.log(cpt);