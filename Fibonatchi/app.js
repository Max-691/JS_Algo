const distance = 225000000; //distance à atteindre
let f = 0; //suite fibonatchi
let tmp = 0; //stocke valeur de f avant incrémentation
let va; //vitesse vaisseau a
let vb = 1.6; //vitesse vaisseau b
let distance_a = 0; //distance parcourue vaisseau a
let distance_b = 0; //distance parcourue vaisseau b
minut = 0; //minutes
while (distance_a + distance_b < distance) {
    tmp = f;
    f++;
    va = f + tmp;
    vb *= 1.6;
    distance_a += va;
    distance_b += vb;
    minut++;
}
    
    console.log(minut);

//vaisseau A part de la Terre en fibo(km)/min et un autre vaisseau B part de Mars en X1.6/min
//B part à 1.6km/min
//AU bout de combien de minutes se croisent-ils sachant qu'il y a 225 000 000km entre Terre et Mars