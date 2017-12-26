import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .glyphicon {
      color: blue;
  }
  `
  ]
})
export class FavoriteComponent  {
  @Input('is-favorite') isFavorite = true;
  @Output('change') click = new EventEmitter();
  onClick() {
    this.isFavorite = !this.isFavorite;
    let sendData = {
      isSelected : true,
      year: 2017,
      month: "December"
    }

    this.click.emit(sendData);
  }
}

export interface dataOutPut {
  isSelected : boolean,
  year: number,
  month: string
}
