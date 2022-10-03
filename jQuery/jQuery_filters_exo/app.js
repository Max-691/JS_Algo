const check = $("input[type='checkbox']");
const send = $("input[type='submit']");
let valeurs = "";
for (let i = 0; i < check.length; i++) {
    check.click(function (){
        valeurs += check.value + ", ";
    })
}
send.click(function (e){
    e.preventDefault()
    console.log(valeurs);
})
