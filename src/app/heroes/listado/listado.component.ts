import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[]=["Spiderman","Hulk","Thor"];
  detectaborrado:string="";
  bandera:number=0;
 

  borrarArreglo(){
    this.detectaborrado=this.heroes.pop() || "";
    this.bandera=1;
    
  }
}
