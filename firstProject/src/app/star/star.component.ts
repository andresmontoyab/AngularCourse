import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  template: `
    <div>
    <span (click)="changeState()" class="glyphicon" [class.glyphicon-star]="emptyStar" [class.glyphicon-star-empty]="!emptyStar" ></span>
    </div>
  `
})
export class StarComponent implements OnInit {

  emptyStar = false;

  changeState() {
    this.emptyStar = !this.emptyStar;
  }
  constructor() { }

  ngOnInit() {
  }

}
