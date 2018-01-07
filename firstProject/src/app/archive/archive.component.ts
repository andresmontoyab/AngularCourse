import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  title='Hi';
  constructor(private route: ActivatedRoute, private router: Router) { }

  submit(){
    this.router.navigate(['']);
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe(combined => {
      this.title = combined.get('year') + '/' + combined.get('month');
    });
  }

}
