import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trabajadores } from '../interfaces/trabajadores';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/trabajadores');
  }
  save(trabajador: Trabajadores){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json', 'Accept': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/trabajadores', JSON.stringify(trabajador), {headers: headers});
  }
  put(trabajador) {
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/trabajadores/' + trabajador.id, trabajador, {headers: headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/trabajadores/' + id);
  }
}
