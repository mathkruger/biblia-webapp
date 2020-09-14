import { Injectable } from '@angular/core';

import  *  as  biblia  from  '../database/nvi.json';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor() { }

  ListarLivros(): Book[] {
    return biblia.map(item => {
      let book = new Book();
      book.abbrev = item.abbrev;
      book.name = item.name;

      return book;
    });
  }

  ObterLivro(abbrev: string): Book {
    return biblia.find(x => x.abbrev == abbrev) as Book;
  }
}
