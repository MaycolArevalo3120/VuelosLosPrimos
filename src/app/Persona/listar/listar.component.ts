import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aerolinea } from 'src/app/Modelo/Aerolinea';
import {ServiceService} from '../../Service/service.service'


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  aerolineas: Aerolinea[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getAerolineas()
    .subscribe(data=>{
      this.aerolineas=data;
    })
    
  }

}
