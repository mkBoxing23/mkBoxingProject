import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: Array<any> = [];
  totale: number = 0;

  constructor(private cartService: CartService,
    private Router: Router, ) {}

  ngOnInit() {
    this.caricaDatiCarrello();
    this.calcolaTotale();
  }

  caricaDatiCarrello() {
    this.items = this.cartService.getItems();
  }

  calcolaTotale() {
    this.totale = this.items.reduce((acc, item) => acc + (item.prezzo * item.quantity), 0);
  }

}
