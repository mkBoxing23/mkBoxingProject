import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrazioneService {
  private datiRegistrati: any[] = [];

  constructor(private http: HttpClient) { }

  registrazioneUtente(data: any): Observable<any> {
    this.datiRegistrati.push(data);
//    return of(data);
    return this.http.post('/api/utenti', data)
  }

  getDatiRegistrati(): Observable<any[]> {
    return of(this.datiRegistrati);
  }
}
