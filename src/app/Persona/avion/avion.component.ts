import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avion } from 'src/app/Modelo/Avion';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-avion',
  templateUrl: './avion.component.html',
  styleUrls: ['./avion.component.css']
})
export class AvionComponent implements OnInit {

  avion:Avion[]=[];
  constructor(private service:ServiceService, router:Router) { }

  ngOnInit(){

    this.service.getAvion().subscribe(data=>{
      this.avion=data;
    })
  }



}
