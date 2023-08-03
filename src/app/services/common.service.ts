import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from 'app/interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLogged = new Subject<boolean>();
  private carrello: any[] = [];

  isRegister = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getAllCatalogo(): Observable<Catalogo[]> {
    const url = '/api/catalogo'
    return this.http.get<Catalogo[]>(url);
  }

  getAllutenti(): Observable<any[]> {
    const url = '/api/utenti'
    return this.http.get<any[]>(url);
  }

  getCarrello() {
    return this.carrello;
  }

  inserisciOrdine(ordine: any) {
    this.carrello.push(ordine);
  }

  eliminaOrdine(prodotto: any) {
    const posizioneProdotto = this.carrello.indexOf(prodotto);
    if (posizioneProdotto >= 0) {//verifico prodotto da eliminare dal carrello
      this.carrello.splice(posizioneProdotto, 1);
    }
  }

  getElencoCataloghi() {
    return this.http.get<any[]>(`/api/catalogo/`);
  }

  getCatalogo(nome: string) {
    return this.http.get<any[]>(`/api/catalogo?nome=${nome}`);
  }

  getProdotto(id: string) {

    return this.http.get<any[]>(`/api/prodotti/${id}`);
  }
  login(): Observable<any> {
    const url = '/api/login ';
    return this.http.get<any>(url);
  }

}
