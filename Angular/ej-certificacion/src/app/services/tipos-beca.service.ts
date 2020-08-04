import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { TiposBeca } from '../models/tipos-beca';

@Injectable({
  providedIn: 'root'
})
export class TiposBecaService {

  url = 'https://localhost:44398/api/TiposBecas';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  save(a: TiposBeca): Observable<any> {
    const tipoBecaBody = JSON.stringify(a);
    if (a.idtipobeca === undefined){
      return this.http.post<any>(this.url, tipoBecaBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, tipoBecaBody, this.httpOptions);
  }

  retrieve(id: number): Observable<TiposBeca> {
    return this.http.get<TiposBeca>(this.url + '/' + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(a: TiposBeca): Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idtipobeca,
      this.httpOptions);
  }

  list(): Observable<TiposBeca[]> {
    return this.http.get<TiposBeca[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
}
