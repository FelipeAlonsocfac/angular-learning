/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre : string,
    hijos? : string[]
}

const pasajero1 : Pasajero = {
    nombre : "Fernando",
}

const pasajero2 : Pasajero = {
    nombre : "Melissa",
    hijos : ["Natalia","Gabriel"]
}

function ImprimeHijos(pasajero : Pasajero) : void {
    const cuantosHijos = pasajero.hijos?.length || 0; //si hijos es undefined que regrese 0

    console.log("Numero de hijos: ",cuantosHijos);
}

ImprimeHijos(pasajero1);