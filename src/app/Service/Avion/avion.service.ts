import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class AvionService {

  private url = 'http://localhost:8099/api/avion/getListadoAvion';
  constructor(
    private http: HttpClient
  ) { }

  public getListadoAvion():Observable<any> {
    return this.http.get(this.url)
  }
}
