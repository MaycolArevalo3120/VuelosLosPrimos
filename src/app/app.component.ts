import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DataService} from './data.service'
import {AvionService} from './Service/Avion/avion.service'
import {AsientosService} from './Service/Asientos/asientos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  avionForm: FormGroup | any;
  posts: any;
  constructor(
    private router:Router,
    private dataService:DataService,
    public fb:FormBuilder,
    public avionService:AvionService,
    public asientosService:AsientosService
    ){
    
    this.dataService.getData().subscribe(data=> {
      this.posts = data;
    })
    this.dataService.getData().subscribe(dara2=>{
      console.log(dara2);
       
    })
  }


  ngOnInit(): void {
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
  }

  Guardar(){}

  Listar(){
    this.router.navigate(["listar"])
  }
  Nuevo(){
    this.router.navigate(["add"])
  }

  Asientos(){
    this.router.navigate(["seats"])
  }
  Aviones(){
    this.router.navigate(["aviones"])
  }

  DataLoad(){
    //this.dataService.getData().subscribe(=> {c})
  }
  

}
