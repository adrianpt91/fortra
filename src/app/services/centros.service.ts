import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Centro } from '../interfaces/centro';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/centro');
  }
  save(centro: Centro){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/centro', centro, {headers: headers});
  }
  put(centro) {
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/centro/' + centro.id, centro, {headers: headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/centro/' + id);
  }
}
