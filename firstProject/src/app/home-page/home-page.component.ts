import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  listArchive = [
    {year: 2017, month: 1},
    {year: 2017, month: 2},
    {year: 2017, month: 3},
    {year: 2017, month: 4},
    {year: 2017, month: 5}
  ];
  constructor() { }

  ngOnInit() {
  }

}
