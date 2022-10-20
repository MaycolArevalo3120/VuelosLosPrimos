import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avion } from 'src/app/Modelo/Avion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvionService } from 'src/app/Service/Avion/avion.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-avion',
  templateUrl: './avion.component.html',
  styleUrls: ['./avion.component.css']
})
export class AvionComponent implements OnInit {

  avion:Avion[]=[];
  avionForm: FormGroup | any;
  posts: any;
  Aviones: any;
  constructor(
    private router:Router,
    private dataService:DataService,
    public fb:FormBuilder,
    public avionService:AvionService,
    //public asientosService:AsientosService
    ){
    console.log(this.Aviones);
    this.dataService.getData().subscribe(data=> {
      this.posts = data;
    })
    this.dataService.getData().subscribe(dara2=>{
      //console.log(dara2);
       
    })
  }

  ngOnInit(){

    this.avionForm = this.fb.group({

      idavion:['', Validators.required],
      idestadoavion:['', Validators.required],
      idmodelo:['', Validators.required],
      nombre:['', Validators.required],
      filas:['', Validators.required],
      columnas:['', Validators.required],
      usuariocreacion:['', Validators.required],
      fechacreacion:['', Validators.required],
      usuariomodificacion:['', Validators.required],
      fechamodificacion:['', Validators.required],
      idestadoregistrotabla:['', Validators.required]
      })
      this.avionService.getListadoAvion().subscribe(respuesta =>{
        this.Aviones=respuesta;
        //console.log(respuesta);
        console.log(this.Aviones[1].nombre);
      })
  }
  Guardar(){}
}
