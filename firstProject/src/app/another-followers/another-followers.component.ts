import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-another-followers',
  templateUrl: './another-followers.component.html',
  styleUrls: ['./another-followers.component.css']
})
export class AnotherFollowersComponent implements OnInit {
  followers;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      return [ {name: 'Andres', id: 1020}, {name: 'Daniel', id: 1021 } ]

    })
    .subscribe(followers => this.followers);

  }

}
