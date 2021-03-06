import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BibleService } from 'src/app/services/bible.service';

@Component({
  selector: 'app-livro-capitulo',
  templateUrl: './livro-capitulo.component.html',
  styleUrls: ['./livro-capitulo.component.css']
})
export class LivroCapituloComponent implements OnInit {

  livro: Book;

  abbrev: string;
  cap: string;

  fonteMinima = 12;
  fonteMaxima = 32;

  tamanhoFonte = 16;

  constructor(private router: Router, private service: BibleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(item => {
      this.abbrev = item.abbrev;
      this.cap = item.capitulo;

      this.livro = this.service.ObterLivro(this.abbrev);
    });
  }

  back() {
    if(parseInt(this.cap) == 1) {
      let livroAnterior = this.service.ObterLivroAnterior(this.abbrev);
      let capitulo = livroAnterior.chapters.length;

      this.router.navigate(['/' + livroAnterior.abbrev + '/' + capitulo]);
    }
    else {
      this.router.navigate(['/' + this.abbrev + '/' + this.getCapituloAnterior()]);
    }
  }

  next() {
    if(parseInt(this.cap) >= this.livro.chapters.length) {
      let proximoLivro = this.service.ObterProximoLivro(this.abbrev);
      let capitulo = 1;

      this.router.navigate(['/' + proximoLivro.abbrev + '/' + capitulo]);
    }
    else {
      this.router.navigate(['/' + this.abbrev + '/' + this.getProximoCapitulo()]);
    }
  }

  getCapituloAnterior() {
    return parseInt(this.cap) - 1;
  }

  getProximoCapitulo() {
    return parseInt(this.cap) + 1;
  }

  aumentarFonte() {
    if(this.tamanhoFonte < this.fonteMaxima) {
      this.tamanhoFonte += 2;
    }
  }

  diminuirFonte() {
    if(this.tamanhoFonte > this.fonteMinima) {
      this.tamanhoFonte -= 2;
    }
  }

}
