import { SharedDataService } from './../../services/shared-data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogo, Prodotto } from 'app/interfaces/Categoria';
import { CommonService } from 'app/services/common.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {
  constructor(
    private commonService: CommonService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) { }

  categoria: any = '';
  catalogo: Array<Catalogo> = [];
  prodottiFiltratiPerCategoria: any = [];


  ngOnInit() {
    this.categoria = localStorage.getItem('Categoria');
    this.getAllCategoriaFromCommonService();
  }

  private getAllCategoriaFromCommonService() {
    this.commonService.getAllCatalogo().subscribe((catalogo) => {
      this.catalogo = catalogo;
      if (this.categoria) {
        this.prodottiFiltratiPerCategoria = this.catalogo.filter(
          (element) => element.categoria === this.categoria
        );
        this.prodottiFiltratiPerCategoria =
          this.prodottiFiltratiPerCategoria[0].prodotti;
      }
    });
  }



  goToProductDetail(prodotto: Prodotto) {
    // Imposta i dati del prodotto nel servizio condiviso
    // Metodo 1 (dati non persistenti)
    // this.sharedDataService.productDetail.next(prodotto);
    // Metodo 2 (dati persistenti)
    localStorage.setItem('prodottoSelezionato', JSON.stringify(prodotto));
    let categoriaRouting = 'abbigliamento';
    if (this.categoria) {
      categoriaRouting = this.categoria.toLowerCase();
    }
    this.router.navigateByUrl('/catalogo/' + categoriaRouting + '/dettaglioProdotto');
  }
}
