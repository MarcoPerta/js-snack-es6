// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreCalcio = [
    {
        nome: 'Juventus',
        puntiFatti ,
        falliSubiti ,
    },
    {
        nome: 'Milan',
        puntiFatti ,
        falliSubiti ,
    },
    {
        nome: 'Inter',
        puntiFatti ,
        falliSubiti ,
    },
    {
        nome: 'Napoli',
        puntiFatti ,
        falliSubiti ,
    }
]

let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
squadreCalcio.forEach((puntiFatti,falliSubiti) => {
    puntiFatti = random;
    falliSubiti = random;
})
console.log(puntiFatti,falliSubiti)


