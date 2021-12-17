import { Component } from "@angular/core";

const min : number = 1;
const max : number = 100;

@Component({
    selector : "app-heroe",
    templateUrl : "heroe.component.html"
})
export class HeroeComponent{
    nombre : string = "Ironman";
    edad   : number = 45;

    
    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }
    

    obtenerNombre() : string {
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre() : void {
        this.nombre = "Spiderman";
    }
    cambiarEdad() : void {
        this.edad = Math.floor(Math.random() * (max - min + 1)) + min; //random number from 1 to 100
    }
}