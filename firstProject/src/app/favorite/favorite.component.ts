import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite = true;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    let sendData = {
      isSelected : true,
      year: 2017,
      month: "December"
    }

    this.change.emit(sendData);
  }
}

export interface dataOutPut {
  isSelected : boolean,
  year: number,
  month: string
}
