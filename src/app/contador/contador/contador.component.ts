import {Component} from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola Gerardo {{titulo}}</h1>
<h3>LA Base es:<strong>{{base}}</strong></h3>
<button (click)="operacion(base)">+{{base}}</button>
<span>Valor es:{{numero}}</span>
<button (click)="operacion(-base)">-{{base}}</button>
                `
})
export class ContadorComponent{
    titulo = 'ContadorApp';
    numero:number=10;
    base:number=5;
  
     operacion(valor:number):number{
      this.numero+=valor
      console.log("Valor ",this.numero);
      if(this.numero<=0){
        //console.log("entraaaaa");
        this.numero=0;
      }
      return this.numero;
    }
}