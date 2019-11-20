import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contrato } from '../interfaces/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/contratos');
  }
  save(contrato: Contrato){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json', 'Accept': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/contratos', JSON.stringify(contrato), {headers: headers});
  }
  put(contrato) {
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/contratos/' + contrato.id, contrato, {headers: headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/contratos/' + id);
  }
}
