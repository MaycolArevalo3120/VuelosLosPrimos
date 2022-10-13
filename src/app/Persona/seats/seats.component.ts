import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {



 AndyFilas:number[]  =[1,2,3];

 AndyColumna:number[]  =[1,2,3,4,5,6];
 AndyAsientos:string[]  =["a","b","c","d","e","f"];

  idAsiento:String[]=["aa","ab","ba","bb","ca","cb"];
 row:string[] = ['row row--1','row row--2','row row--3','row row--4']

 contar:number=this.get();
 public get():any{
   this.AndyFilas.forEach(element => {this.AndyAsientos.length+this.AndyColumna.length
     return element  
   });
   
 }
  constructor() { }


/*
generarMatriz(){
  let TotalAsientos:number=this.AndyFilas.length*this.AndyColumna.length;
  let idAsiento:String[6]=["aa","ab","ba","bb","ca","cb"];

 contador:number=0;
    for(let j:number=0; j<this.AndyColumna.length;j++){
      this.idAsiento[0]=this.AndyFilas[i]+""+this.AndyColumna[j];
      contador++;
    } 
  }



}
*/

  ngOnInit(): void {
  }

}
