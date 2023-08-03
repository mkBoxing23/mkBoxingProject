import { CommonService } from 'app/services/common.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalogo } from 'app/interfaces/Categoria';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent {

  path: any;
  isLogged: boolean = false;
  catalogo: Array<Catalogo> = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) {
    this.commonService.isLogged.subscribe(res => {
      this.isLogged = res;
    });
  }


  ngOnInit() {
    this.activatedRoute.url.subscribe(([url]) => {
      this.path = url;
    });
    this.getAllCategoriaFromCommonService();
  }

  private getAllCategoriaFromCommonService() {
    this.commonService.getAllCatalogo().subscribe(catalogo => {
      this.catalogo = catalogo;
    })
  }
  onCategoriaclick(categoria: string) {
    localStorage.setItem('Categoria', categoria);
    this.router.navigateByUrl('/catalogo/' + `${categoria.toLowerCase()}`)
  }
}


