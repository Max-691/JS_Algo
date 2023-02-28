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

