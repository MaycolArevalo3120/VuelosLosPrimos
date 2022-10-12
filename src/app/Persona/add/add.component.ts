import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aerolinea } from 'src/app/Modelo/Aerolinea';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  Guardar(aerolinea:Aerolinea){
    this.service.Createaerolinea(aerolinea).subscribe(data=>{alert("Se agregó con exito");
    //this.router.navigate({"listar"})
    })
  }


}
