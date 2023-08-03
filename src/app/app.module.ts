import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

import { AccediComponent } from './pages/accedi/accedi.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { RassegnaComponent } from './pages/rassegna/rassegna.component';
import { AccountComponent } from './pages/account/account.component';
import { ScrollTopDownComponent } from './components/scroll-top-down/scroll-top-down.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { TelegramComponent } from './pages/telegram/telegram.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import { SharedDataService } from './services/shared-data.service';
import { CartComponent } from './components/cart/cart.component';
import { PasswordComponent } from './components/password/password.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PathDinamicoComponent } from './pages/path-dinamico/path-dinamico.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    BreadcrumbsComponent,
    AccediComponent,
    RegistrazioneComponent,
    RassegnaComponent,
    AccountComponent,
    ScrollTopDownComponent,
    CarouselComponent,
    NewsletterComponent,
    TelegramComponent,
    CatalogoComponent,
    CategorieComponent,
    CategoriaComponent,
    ProdottoComponent,
    CartComponent,
    PasswordComponent,
    BlogComponent,
    PathDinamicoComponent,
    CheckoutComponent,



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ButtonModule,
    CarouselModule,
    FormsModule,


  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
