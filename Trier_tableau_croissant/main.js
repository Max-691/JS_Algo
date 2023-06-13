function trierTab(tab) {
    if(tab[0].length==undefined){
        for (let i = 0; i < tab.length - 1; i++) {
            let memoire = i;
            for (let j = i + 1; j < tab.length; j++) {
                if (tab[j] < tab[memoire] || (tab[j] == tab[memoire] && tab[j] < tab[memoire])) {
                    memoire = j;
                }
            }
            if (memoire != i) {
                const temp = tab[i];
                tab[i] = tab[memoire];
                tab[memoire] = temp;
            }
        }
        return tab;
    }else{
        for (let i = 0; i < tab.length - 1; i++) {
            let memoire = i;
            for (let j = i + 1; j < tab.length; j++) {
                let k = 0;
                if (tab[j][k] < tab[memoire][k] || (tab[j][k] == tab[memoire][k] && tab[j][k+1] < tab[memoire][k+1])) {
                    memoire = j;
                }
            }
            if (memoire != i) {
                const temp = tab[i];
                tab[i] = tab[memoire];
                tab[memoire] = temp;
            }
        }
        return tab;
    }
}

const tab = [[1,13],[1,12],[5,9],[1,11],[1,1]];
const tab2 = [1,131,125,91,111,2];
const tabTrie = trierTab(tab);
const tabTrie2 = trierTab(tab2);
console.log(tabTrie);
console.log(tabTrie2);