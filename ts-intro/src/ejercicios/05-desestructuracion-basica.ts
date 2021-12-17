/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen : number,
    segundo : number,
    cancion : string,
    detalles : Detalles
}
interface Detalles {
    autor : string,
    anio : number,
}

const reproductor : Reproductor = {
    volumen : 90,
    segundo : 36,
    cancion : "Mess",
    detalles :  {
        anio : 2015,
        autor : "Ed Sheeran"
    }
}   

const autor = "Fulano";
const {volumen : vol, segundo, cancion, detalles: {autor: autorDetalle}} = reproductor; //desestructurar objetos

// console.log("El volumen actual es de: ", vol);
// console.log("El segundo actual es de: ", segundo);
// console.log("La cancion actual es de: ", cancion);
// console.log("El autor es: ", autorDetalle);

const dbz : string[] = ["Goku","Vegeta","Trunks"];
const [goku, vegeta, trunks] = dbz;

console.log("Personaje 1: ", goku);
console.log("Personaje 2: ", vegeta);
console.log("Personaje 3: ", trunks);