import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Asiento } from 'src/app/Modelo/Asiento';
import { Avion } from 'src/app/Modelo/Avion';
import { AvionService } from 'src/app/Service/Avion/avion.service';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
   
  asientos:Asiento[] = [];
  Aviones: any;
  constructor(
    private serviceAsiento:ServiceService,
    private router:Router,
    public avionService:AvionService,
    ) { }
  ngOnInit(): void {
    this.numeroFilas = 100
    this.numeroColumnas = 6
    this.ingresoDeFilasColumas()
    this.estadoAsiento = Array.from(Array(this.numeroFilas), () => new Array(this.numeroColumnas).fill(0))
    this.asientosPreCargados()
  }


  asientosPreCargados() {
    this.estadoAsiento[1][2] = 1
    this.estadoAsiento[1][5] = 1
    this.estadoAsiento[2][4] = 1
    this.estadoAsiento[6][2] = 1
    this.estadoAsiento[4][2] = 1
   
  }


  numeroFilas: number = 0;
  numeroColumnas: number = 0;

  ingresoDeFilasColumas() {
    this.Filas = Array.from({ length: this.numeroFilas }, (_, i) => i + 1)
    this.Columna = Array.from({ length: this.numeroColumnas }, (_, i) => i + 1)
  }
  Filas: number[] = [];
  estadoAsiento: any[][] = [];
  Columna: number[] = [];

  crearID(fila: String, columna: String): String {
    fila = fila + "-";
    return fila.concat(columna.toString());
  }

  guardarEstadoAsiento(evento: any) {
    console.log(evento.srcElement.id)
    this.cambiarEstadoAsiento(evento.srcElement.id)
    console.log(this.estadoAsiento)
    this.   bloquearAsiento()

  }

  cambiarEstadoAsiento(idasiento: any) {
    //11-5
    const id = idasiento.split("-")
    let fila = parseInt(id[0])
    let columna = parseInt(id[1])
    let estadoActual = this.estadoAsiento[fila - 1][columna - 1]
    if (estadoActual == 0)
      this.estadoAsiento[fila - 1][columna - 1] = 1
    else
      this.estadoAsiento[fila - 1][columna - 1] = 0
  }

  bloquearAsiento() {
    let check = document.getElementById("2-3");
    console.warn("andy ", check)
    if (check?.ariaDisabled != null) {
      check.ariaDisabled = "0";
      console.warn("andy ", check)
    }
  }

}
