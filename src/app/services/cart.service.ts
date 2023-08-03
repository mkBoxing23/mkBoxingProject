
import { Injectable } from '@angular/core';
import { Prodotto } from 'app/interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartLocalStorageKey = 'datiCarrello';
  items: any[] = [];


  constructor() {
    this.loadCartData();
  }

  addToCart(product: Prodotto, quantity = 1) {
    this.items.push({...product, quantity});
    this.saveCartData();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.saveCartData();
    return this.items;
  }


  rimuoviProdottoCarrello(item : any) {
    const indiceInArray = this.items.findIndex(item => item.id == item.id);
    this.items.splice(indiceInArray, 1);
    this.saveCartData()
    return this.items;
  }


  private saveCartData() {
    const cartDataString = JSON.stringify(this.items);
    localStorage.setItem(this.cartLocalStorageKey, cartDataString);
  }

  private loadCartData() {
    const cartDataString = localStorage.getItem(this.cartLocalStorageKey);
    if (cartDataString) {
      this.items = JSON.parse(cartDataString);
    }
  }
}
