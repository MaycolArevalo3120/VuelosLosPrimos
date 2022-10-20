import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import {FormsModule}from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {DataService} from './data.service';
import {ServiceService} from '../app/Service/service.service';
import { SeatsComponent } from './Persona/seats/seats.component';
import { LoginComponent } from './Persona/login/login.component';
import { CommonModule } from "@angular/common";
import { AvionComponent } from './Persona/avion/avion.component';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditComponent,
    SeatsComponent,
    AddComponent,
    LoginComponent,
    AvionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    
  ],
  providers: [DataService,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
