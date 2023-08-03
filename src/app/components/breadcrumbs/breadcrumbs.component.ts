import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent  {
  constructor(private route: Router) {}
  b: any;

  ngOnInit() {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var snapshot = this.route.routerState.snapshot;
        this.b = snapshot.root.children[0].data['breadcrumb'];
      }
    });
  }
}


