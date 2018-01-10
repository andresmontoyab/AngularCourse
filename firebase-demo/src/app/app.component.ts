import { Component, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs/Subscription';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: Observable<any[]>;
  course$;
  author$;

  constructor (private db: AngularFireDatabase) {
    
    this.courses$ = db.list('/courses').auditTrail();
    console.log(this.courses$);
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
  }

  add(course: HTMLInputElement) {
    console.log('Entro');
    this.db.list('courses').push({
      name: course.value,
      price: 150,
      usLive: true,
      section: [
        {title: 'Components'},
        {title: 'Directives'},
        {title: 'Templates'},
      ]
    });
    console.log('Termino');
  }

  update(course) {
    this.db.object('/courses/' +course.key).set(course.payload.node_.value_ + 'Updated');
    this.db.object('/courses/' +course.key +1).update({title: 'New Title',islive : true});
  }

  delete(course) {
    this.db.object('/courses/' +course.key).remove().then (x => console.log("Deleted"))
  }
}
