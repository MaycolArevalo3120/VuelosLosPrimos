import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {DataService} from './data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vuelosVenta';
  

  posts: any;
  constructor(private router:Router, private dataService:DataService){
    this.dataService.getData().subscribe(data=> {
      this.posts = data;
    })
    this.dataService.getData().subscribe(dara2=>{
      console.log(dara2);
    })
  }
  Listar(){
    this.router.navigate(["listar"])
  }
  Nuevo(){
    this.router.navigate(["add"])
  }

  Asientos(){
    this.router.navigate(["seats"])
  }

  DataLoad(){
    //this.dataService.getData().subscribe(=> {c})
  }
  

}
