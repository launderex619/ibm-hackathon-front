import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'http://9.240.130.96:8080';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getOrdenes() {
    return new Promise<any>( (resolve, reject) => {
      this.http.get(URL + '/orden')
        .subscribe( resp => {
          console.log(resp);
          
          resolve(resp);
        }, err => {
          reject(err);
        });
    });
  }
}
