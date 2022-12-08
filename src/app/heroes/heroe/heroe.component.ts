import { Component } from "@angular/core";




@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent{
    nombre:string = "Ironman";
    edad:number=78

    get NombreMayusculas(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
       //return  `${this.nombre}- ${this.edad}`;
        return this.nombre+"-"+this.edad.toString();
    }
    
    cambiarNombre():void{
        this.nombre="Batman";
    }

    cambiarEdad():void{
        this.edad=1000;
    }
}