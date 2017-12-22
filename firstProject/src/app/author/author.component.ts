import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  template: `
        <h2> {{ getAuthor() }} </h2>
        <ul>
          <li *ngFor= "let author of authors">
            {{ author}}
          </li>
        </ul>
   `
})
export class AuthorComponent implements OnInit {

  author = "3 Author";
  authors;

  constructor(service : AuthorService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  getAuthor() {
    return this.author;
  }

}
