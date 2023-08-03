import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent {

  constructor(private router: Router) {

  }
  goToCategory(categoria: string) {
    localStorage.setItem('Categoria', categoria);
    this.router.navigateByUrl('/catalogo/' + `${categoria.toLocaleLowerCase()}`);
  }
}
