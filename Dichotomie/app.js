const tab = [4, 6, 8, 14, 15, 19, 26, 28, 30, 34, 34, 45, 48, 51];
const nb = 34;
let a = 0;
let b = tab.length - 1;
let m = parseInt(b / 2);

while(a < b){
    m = parseInt((a + b) / 2);
    if (nb > m) {
        a = m;
    }
    if (nb < m) {
        b = m;
    }
    if (nb === m) {
        console.log("trouvé");
        break;
    }
}