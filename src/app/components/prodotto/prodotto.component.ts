import { Prodotto } from 'app/interfaces/Categoria';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './../../services/shared-data.service';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss']

})


export class ProdottoComponent implements OnInit {
  addToCart(product: Prodotto) {
    this.CartService.addToCart(product);
    window.alert('il tuo articolo è stato aggiunto al carrello!');
  }

  datiProdotto: any = '';
  constructor(private sharedDataService: SharedDataService, private CartService : CartService) {
  }
  ngOnInit() {
    // Recupera i dati del prodotto dal servizio condiviso
    // Metodo 1 (dati non persistenti)
    // this.getProductDetailFromService();
    // Metodo 2 (dati  persistenti)
    this.datiProdotto = localStorage.getItem('prodottoSelezionato');
    this.datiProdotto = JSON.parse(this.datiProdotto);
    console.log(this.datiProdotto);
  }}


