import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'some-followers',
  templateUrl: './some-followers.component.html',
  styleUrls: ['./some-followers.component.css']
})
export class SomeFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap
    .subscribe(params => {
      console.log(params.get('id'));
      
    });
  }

}
