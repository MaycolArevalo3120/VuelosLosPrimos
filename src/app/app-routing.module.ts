import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { SeatsComponent } from './Persona/seats/seats.component';
import {AvionComponent} from './Persona/avion/avion.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'edit', component:EditComponent},
  {path:'add', component:AddComponent},
  {path:'seats', component:SeatsComponent},
  {path:'aviones', component:AvionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
