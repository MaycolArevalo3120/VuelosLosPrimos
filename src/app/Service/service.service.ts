import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Aerolinea} from '../Modelo/Aerolinea'
import { Asiento } from '../Modelo/Asiento';
import { Avion } from '../Modelo/Avion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //aerolinea: Aerolinea = new Aerolinea;
  constructor(private http:HttpClient) { }
  url='http://localhost:8099/Aerolinea'

  getAerolineas(){
    return this.http.get<Aerolinea[]>(this.url)
  }

  getAvion(){
    return this.http.get<Avion[]>('http://localhost:8099/api/avion/getListadoAvion')
  }
}
