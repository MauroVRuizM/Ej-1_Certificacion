import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Calificacion } from '../models/calificacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  url = 'https://localhost:44398/api/Calificacion';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  save(calificacion: Calificacion): Observable<any> {
    const calificacionBody = JSON.stringify(calificacion);
    return this.http.post<any>(this.url, calificacionBody, this.httpOptions);
  }
}
