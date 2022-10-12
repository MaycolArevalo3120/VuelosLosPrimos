import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {AerolineaData} from './Modelo/AerolineaData'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    console.log('Service is woeking!')
  }
  getData(){
    return this.http.get<AerolineaData[]>('http://localhost:8099/api/aerolinea/IdNombreAerolinea') 
  }
}
