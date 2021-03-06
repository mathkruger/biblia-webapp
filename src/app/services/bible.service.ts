import { Injectable } from '@angular/core';

import  *  as  biblia  from  '../database/nvi.json';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  bibliaJson: Book[];

  constructor() {
    this.bibliaJson = Array.of(biblia)[0];
    this.bibliaJson = (<any>this.bibliaJson).default;
  }

  ListarLivros(): Book[] {
    return this.bibliaJson.map(item => {
      let book = new Book();
      book.abbrev = item.abbrev;
      book.name = item.name;

      return book;
    });
  }

  ObterLivro(abbrev: string): Book {
    return this.bibliaJson.find(x => x.abbrev == abbrev) as Book;
  }

  ObterProximoLivro(abbrev: string) {
    let livroIndex = this.bibliaJson.findIndex(x => x.abbrev == abbrev) + 1;
    
   if(livroIndex >= this.bibliaJson.length) {
     livroIndex = 0;
   }

    return this.bibliaJson[livroIndex] as Book;
  }

  ObterLivroAnterior(abbrev: string) {
    let livroIndex = this.bibliaJson.findIndex(x => x.abbrev == abbrev) - 1;

    if(livroIndex < 0) {
      livroIndex = this.bibliaJson.length - 1;
    }

    return this.bibliaJson[livroIndex] as Book;
  }
}
