import { BibleService } from './../../services/bible.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {
  livro: Book;

  constructor(private service: BibleService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
    .subscribe(item => {
      this.livro = this.service.ObterLivro(item.abbrev);
    });
  }

}
