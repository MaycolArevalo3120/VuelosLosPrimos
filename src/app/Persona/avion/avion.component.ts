import { Component, OnInit } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
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
      this.cualquier(data)
    })

    console.log(this.avion);
  }

  public cualquier(hala:any){
    hala=this.avion;
    //console.log(hala[1].filas);
    return hala;
  }


}
