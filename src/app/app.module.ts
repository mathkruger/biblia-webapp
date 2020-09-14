import { LivroCapituloComponent } from './pages/livro-capitulo/livro-capitulo.component';
import { LivroDetalheComponent } from './pages/livro-detalhe/livro-detalhe.component';
import { LivrosListagemComponent } from './pages/livros-listagem/livros-listagem.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    LivrosListagemComponent,
    LivroDetalheComponent,
    LivroCapituloComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LivrosListagemComponent
        },
        {
          path: ':abbrev',
          component: LivroDetalheComponent
        },
        {
          path: ':abbrev/:capitulo',
          component: LivroCapituloComponent
        },
      ],
      { useHash: true, anchorScrolling: 'enabled' }
    ),
    BrowserAnimationsModule,
    
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
