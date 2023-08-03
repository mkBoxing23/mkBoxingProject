import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  prodotti  : any[] = [];
  catalogo : any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
    ) {

    this.activatedRoute.params.subscribe((params:any) => {
      console.log("AGGIORNO CATALOGO CON ", params);
      const nomeCategoria = params.nome ? params.nome : '';
      this.commonService.getCatalogo(nomeCategoria).subscribe(res => {
        this.catalogo = res ? res[0] : {};

        for(let i =0; i < this.catalogo.prodotti.length; i++) {
          const idProdotto = this.catalogo.prodotti[i];
          this.commonService.getProdotto(idProdotto).subscribe(res => {
            this.prodotti.push(res);
          });
        }
      });

    });

  }

}
