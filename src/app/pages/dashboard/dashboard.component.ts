import { Catalogo } from '../../interfaces/Categoria';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { utenti } from 'app/interfaces/utenti';
import { CommonService } from 'app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  categorie: Catalogo[] = [];
  utenti: utenti[] = [];
  constructor(
    private router: Router,
    private commonService: CommonService
    ) { }


  ngOnInit(): void {
    this.getAllutentiFromCommonService();
  }




  private getAllutentiFromCommonService() {
    this.commonService.getAllutenti().subscribe(utenti => {
      this.utenti = utenti ;
    })
  }



}
