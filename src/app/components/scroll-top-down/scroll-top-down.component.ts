

import { Component, HostListener } from '@angular/core';




@Component({

  selector: 'app-scroll-top-down',

  templateUrl: './scroll-top-down.component.html',

  styleUrls: ['./scroll-top-down.component.scss']

})

export class ScrollTopDownComponent {

  showButton = false;




  @HostListener('window:scroll', ['$event'])

  metodoSuSroll(event: any) {

    if (window.scrollY > 100) {

      this.showButton = true;

    } else{

      this.showButton = false;

    }




  }




  topFunction(){

    window.scrollTo(0,0);

  }

}


