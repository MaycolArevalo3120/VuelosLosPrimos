import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Aerolinea} from '../Modelo/Aerolinea'

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

  Createaerolinea(aerolinea:Aerolinea){
    return this.http.post<Aerolinea>(this.url,aerolinea);
  }
}
