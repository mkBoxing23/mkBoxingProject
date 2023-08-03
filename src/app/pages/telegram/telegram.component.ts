import { Component } from '@angular/core';

@Component({
  selector: 'app-telegram',
  templateUrl: './telegram.component.html',
  styleUrls: ['./telegram.component.scss']
})
export class TelegramComponent {
  vaiAlCanale() {
    window.open('https://t.me/mk_Boxing');
  }
}
