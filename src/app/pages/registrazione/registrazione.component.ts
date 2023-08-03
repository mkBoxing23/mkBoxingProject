import { RegistrazioneService } from './../../services/registrazione.service';
import { CommonService } from './../../services/common.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
  nome:string = '';
  cognome:string = '';
  email:string = '';
  password:string='';


  constructor(
    private router: Router,
    private commonService: CommonService,
    private RegistrazioneService: RegistrazioneService
   ) {
  }
  registrati() {
    const nuovoUtente = { nome: this.nome, email:this.email, password:this.password, cognome:this.cognome };

    this.RegistrazioneService.registrazioneUtente(nuovoUtente).subscribe(
      () => {
        console.log('Utente registrato con successo!');
        // Puoi aggiungere logica aggiuntiva o reindirizzamento a un'altra pagina qui
        this.nome = '';
        this.email = '';
        this.cognome = '';
        this.password = '';
      },
      (error) => {
        console.error('Errore durante la registrazione:', error);
      }
    );

}}
