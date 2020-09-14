import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BibleService } from 'src/app/services/bible.service';

@Component({
  selector: 'app-livros-listagem',
  templateUrl: './livros-listagem.component.html',
  styleUrls: ['./livros-listagem.component.css']
})
export class LivrosListagemComponent implements OnInit {

  livros: Book[] = [];

  constructor(private service: BibleService) {}

  ngOnInit() {
    this.livros = this.service.ListarLivros();
  }

}
