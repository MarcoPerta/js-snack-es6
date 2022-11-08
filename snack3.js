// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let bike = document.getElementById('bike')

const bici = [
    {
      nome: 'Atala',
      peso: 60,
    },
    {
      nome: 'Bianchi',
      peso: 70,
    },
    {
        nome: 'Cross',
        peso: 50,
    }
  ]

let oggettoMinore = bici[0];

for (x=0; x< bici.length; x++){
    if(bici[x].peso < oggettoMinore.peso){
        oggettoMinore = bici[x];
    }
}
console.log(oggettoMinore)

const {nome,peso} = oggettoMinore;
console.log(nome,peso)

bike.innerHTML = `la bici con peso minore è ${nome}, ed ha un peso di ${peso}`;






// let array = [5,2,6,8,10,1];
// let numeroMinore = array[0];

// for(x=0 ; x< array.length; x++){

//     if( array[x] < numeroMinore ){
//         numeroMinore = array[x];
//     }
// }
// console.log(numeroMinore)