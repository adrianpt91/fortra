import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actividad } from '../interfaces/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/fuera_actividad');
  }
  save(actividad: Actividad){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/fuera_actividad', actividad, {headers: headers});
  }
  put(actividad) {
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/fuera_actividad/' + actividad.id, actividad, {headers: headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/fuera_actividad/' + id);
  }
}
