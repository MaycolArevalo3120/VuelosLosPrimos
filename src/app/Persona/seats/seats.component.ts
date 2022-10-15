import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
    this.numeroFilas = 10
    this.numeroColumnas = 6
    this.ingresoDeFilasColumas()
    this.estadoAsiento=Array.from(Array(this.numeroFilas), () => new Array(this.numeroColumnas).fill(0))
    this.asientosPreCargados()
  }

  asientosPreCargados(){
    this.estadoAsiento[1][2] = 1
    this.estadoAsiento[1][5] = 1
    this.estadoAsiento[2][4] = 1
    this.estadoAsiento[6][2] = 1
    this.estadoAsiento[4][2] = 1
  }
  

  numeroFilas:number=0;
  numeroColumnas:number=0;
  
  ingresoDeFilasColumas(){
    this.Filas = Array.from({length: this.numeroFilas}, (_, i) => i + 1)
    this.Columna = Array.from({length: this.numeroColumnas}, (_, i) => i + 1)
  }
  Filas:number[]  =[];
  estadoAsiento:any[][]=[];
  Columna:number[]  =[];

  crearID(fila: String, columna: String): String {
    fila = fila + "-";
    return fila.concat(columna.toString());
  }

  guardarEstadoAsiento(evento:any){    
    console.log(evento.srcElement.id)
    this.cambiarEstadoAsiento(evento.srcElement.id)
    console.log(this.estadoAsiento)
    
  }

  cambiarEstadoAsiento(idasiento:any){
    //11-5
    const id =idasiento.split("-")
    let fila = parseInt(id[0])
    let columna = parseInt(id [1])
    let estadoActual = this.estadoAsiento[fila-1][columna-1]
    if (estadoActual == 0)
      this.estadoAsiento[fila-1][columna-1] = 1
    else
    this.estadoAsiento[fila-1][columna-1] = 0
  }


}
