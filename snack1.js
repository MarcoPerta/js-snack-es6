// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// const newArray = [];
const min = 1;
const max = 4;

// myArray.forEach((element,index) =>{
//     if (index>=min && index<=max ){
//         newArray.push(element);
// }});

// console.log(newArray);

const nomi = myArray.filter((element,index) => {
    if (index>=min && index<=max ){
        return true;
}
});
console.log(nomi)





// const newArray = [];
// const min = 1;
// const max = 4;
// for(let x=0; x<myArray.length; x++ ){
//     if (x>=min && x<=max ){
//         newArray.push(myArray[x])
//     }
// }
// console.log(newArray)