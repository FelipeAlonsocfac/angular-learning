import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    private _personajes : Personaje[] = [
        {
            nombre: "Goku",
            poder : 15000
        },
        {
            nombre : "Vegeta",
            poder : 7500
        }
    ];

    get personajes() : Personaje[] {
        return [...this._personajes]; //las llaves indican que es un arreglo, los 3 puntos son el operador spread
        //que separa cada uno de los elementos del arreglo y lo crea uno nuevo por decirlo asi
    }

    constructor(){}

    agregarPersonaje( personaje : Personaje) {
        this._personajes.push(personaje);
    }
}