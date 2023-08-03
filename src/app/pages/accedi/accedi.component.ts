import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';

@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.scss']
})
export class AccediComponent {

  constructor(
    private router: Router,
    private commonService: CommonService) {

  }

  accedi() {
    this.commonService.login().subscribe(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.commonService.isLogged.next(true);
        this.router.navigateByUrl('/dashboard');
      }
    });

  }

}
