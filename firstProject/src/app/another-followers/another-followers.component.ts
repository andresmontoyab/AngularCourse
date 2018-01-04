import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-another-followers',
  templateUrl: './another-followers.component.html',
  styleUrls: ['./another-followers.component.css']
})
export class AnotherFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let obs= Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])

    obs.subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

    });

  }

}
