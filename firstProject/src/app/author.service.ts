import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  getAuthors() {
    return ["Author1","Author2","Autho3"];
  }

}
