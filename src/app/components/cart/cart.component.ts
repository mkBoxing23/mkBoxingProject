
import { Router } from '@angular/router';
import { CartService } from 'app/services/cart.service';
import { Component } from '@angular/core';
import { Prodotto } from 'app/interfaces/Categoria';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private cartService: CartService, private router: Router) {}
  items: Array<any> = [];

  get totale (){
    let totale = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item: any = this.items[i];
      const prezzo = item?.prezzo ?? 1;
      const qnt = item?.quantity ?? 1;
      totale += prezzo * qnt;
    }
    console.log("CALCOLO IL TOTALE: ", totale);
    return totale.toFixed(2);
  }

  ngOnInit() {
    this.caricaDatiCarrello();
  }

  caricaDatiCarrello() {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  checkout() {
    console.log("CHECKOUT PRODOTTI:", this.items);
    this.router.navigateByUrl('/checkout');
  }


  svuotaCarrello() {
    this.cartService.clearCart();
    this.caricaDatiCarrello();
    // this.salvaDatiCarrello();
  }

  // Funzione per salvare i dati del carrello nel local storage
  salvaDatiCarrello() {
    const datiCarrelloString = JSON.stringify(this.items);
    localStorage.setItem('datiCarrello', datiCarrelloString);
  }
  rimuoviProdottoCarrello(item: Prodotto) {
    this.items = this.cartService.rimuoviProdottoCarrello(item);
    this.salvaDatiCarrello();
  }
}


