
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccediComponent } from './pages/accedi/accedi.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { RassegnaComponent } from './pages/rassegna/rassegna.component';
import { AccountComponent } from './pages/account/account.component';
import { TelegramComponent } from './pages/telegram/telegram.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import { CartComponent } from './components/cart/cart.component';
import { PasswordComponent } from './components/password/password.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PathDinamicoComponent } from './pages/path-dinamico/path-dinamico.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: [

      ],
    },
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: {
      breadcrumb: [
        {
          label: 'Carrello',
          url: '/cart',
          active: false,
          class: 'breadcrumb-item active',
        },

        {
          label: 'Checkout',
          url: '',
          active: true,
          class: 'breadcrumb-item active',
        },


      ],
    },
  },

  {
    path: 'newsletter',
    component: NewsletterComponent,
    data: {
      breadcrumb: [
        {
          label: 'Newsletter',
          url: '',
          active: true,
          class: 'breadcrumb-item active',
        },
      ],
    },
  },
  {
    path: 'accedi',
    component: AccediComponent,
    data: {
      breadcrumb: [
        {
          label: 'Accedi',
          url: '',
          active: true,
          class: 'breadcrumb-item active',
        },
      ],
    },
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent,
    data: {
      breadcrumb: [

        {
          label: 'Registrazione',
          url: '',
          active: true,
          class: 'breadcrumb-item active',
        },
      ],
    },
  },
  {
    path: 'rassegna',
    component: RassegnaComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Rassegna',
          url: '',
          active: true,
          class: 'breadcrumb-item active',
        },
      ],
    },
  },

  {
    path: 'account',
    component: AccountComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Il mio account',
          url: '',
          active: true,
          class: 'breadcrumb-item active',
        },
      ],
    },
  },
  {
    path: 'telegram',
    component: TelegramComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Telegram',
          url: '',
          active: true,
          class: 'breadcrumb-item active',
        },
      ],
    },
  },
  {
    path: 'catalogo',
    component: CategorieComponent,
    data: {
      breadcrumb: [
        {
          label: 'Catalogo',
          url: '/catalogo',
          class: 'breadcrumb-item',
          active: false,
        }
      ],
    },
  },
  {
    path: 'dinamico/:path',
    component: PathDinamicoComponent

  },
  {
    path: 'catalogo/abbigliamento',
    component: CategoriaComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },

        {
          label: 'catalogo',
          url: '/catalogo',
          class: 'breadcrumb-item',
          active: false,
        },


        {
          label: 'Abbigliamento',
          url: '/catalogo/abbigliamento',
          active: true,
          class: 'breadcrumb-item active',
        }
      ],
    },
  },

  {
    path: 'catalogo/abbigliamento/dettaglioProdotto',
    component: ProdottoComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Catalogo',
          url: '/catalogo',
          active: false,
          class: 'breadcrumb-item active',
        },

        {
          label: 'Dettaglio Prodotto',
          url: '/catalogo/abbigliamento/dettaglioProdotto',
          active: true,
          class: 'breadcrumb-item active',
        }
      ],
    },
  },
  {
    path: 'catalogo/sacchi',
    component: CategoriaComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },

        {
          label: 'catalogo',
          url: '/catalogo',
          class: 'breadcrumb-item',
          active: false,
        },


        {
          label: 'Sacchi',
          url: '/catalogo/sacchi',
          active: true,
          class: 'breadcrumb-item active',
        }
      ],
    },
  },

  {
    path: 'catalogo/sacchi/dettaglioProdotto',
    component: ProdottoComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Catalogo',
          url: '/catalogo',
          active: false,
          class: 'breadcrumb-item active',
        }
      ],
    },
  },
  {
    path: 'catalogo/guanti',
    component: CategoriaComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'catalogo',
          url: '/catalogo',
          class: 'breadcrumb-item',
          active: false,
        },

        {
          label: 'Guanti',
          url: '/catalogo/guanti',
          active: true,
          class: 'breadcrumb-item active',
        }
      ],
    },
  },
  {
    path: 'catalogo/guanti/dettaglioProdotto',
    component: ProdottoComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Catalogo',
          url: '/catalogo',
          active: false,
          class: 'breadcrumb-item active',
        },

        {
          label: 'Dettaglio Prodotto',
          url: '/catalogo/abbigliamento/dettaglioProdotto',
          active: true,
          class: 'breadcrumb-item active',
        }
      ],
    },
  },
  {
    path: 'catalogo/protezioni',
    component: CategoriaComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'catalogo',
          url: '/catalogo',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Protezioni',
          url: '/catalogo/protezioni',
          active: true,
          class: 'breadcrumb-item active',
        }
      ],
    },
  },
  {
    path: 'catalogo/protezioni/dettaglioProdotto',
    component: ProdottoComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Catalogo',
          url: '/catalogo',
          active: false,
          class: 'breadcrumb-item active',
        },

        {
          label: 'Dettaglio Prodotto',
          url: '/catalogo/abbigliamento/dettaglioProdotto',
          active: true,
          class: 'breadcrumb-item active',
        }
      ],
    },
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Carrello',
          url: '/cart',
          active: true,
          class: 'breadcrumb-item active',
        },


      ],
    },
  },
  {
    path: 'password',
    component: PasswordComponent,
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },
        {
          label: 'Recupera Password',
          url: '',
          active: true,
          class: 'breadcrumb-item active',
        },

      ],
    },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      breadcrumb: [
        {
          label: 'Blog',
          url: '/',
          class: 'breadcrumb-item',
          active: false,
        },


      ],
    },
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
