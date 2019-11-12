import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UnidadMilitar } from '../interfaces/unidad_militar';

@Injectable({
  providedIn: 'root'
})
export class UnidadesMilitaresService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/datos_militares');
  }
  save(unidad_militar: UnidadMilitar){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/datos_militares', unidad_militar, {headers: headers});
  }
  put(unidad_militar) {
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/datos_militares/' + unidad_militar.id, unidad_militar, {headers: headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/datos_militares/' + id);
  }
}
