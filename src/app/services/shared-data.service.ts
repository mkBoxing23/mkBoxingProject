import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  datiProdotto: any;
  productDetail = new BehaviorSubject<any>(null);
}




