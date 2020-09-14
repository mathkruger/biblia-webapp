import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private service: BibleService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
    .subscribe(item => {
      this.abbrev = item.abbrev;
      this.cap = item.capitulo;

      this.livro = this.service.ObterLivro(this.abbrev);
    });
  }

  getCapituloAnterior() {
    return parseInt(this.cap) - 1;
  }

  getProximoCapitulo() {
    return parseInt(this.cap) + 1;
  }

}
