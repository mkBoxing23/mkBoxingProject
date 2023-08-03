import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  constructor(private commonService: CommonService, private router: Router, private activatedRoute: ActivatedRoute) { }

  logout() {
    localStorage.removeItem('token');
    this.commonService.isLogged.next(false);
    this.router.navigate(['/dashboard']);
  }

}
