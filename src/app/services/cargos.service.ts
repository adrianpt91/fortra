import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cargo } from '../interfaces/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargosService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/cargo');
  }
  save(cargo: Cargo){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/cargo', cargo, {headers: headers});
  }
  put(cargo) {
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/cargo/' + cargo.id, cargo, {headers: headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/cargo/' + id);
  }
}
