import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  courses = [];
  isSelected: boolean = true;

  onAdd () {
    this.courses.push( { id: 55, name: 'This is a new Course' });
  }

  onDelete (index) {
    this.courses.splice(index,1);
  }
  viewMode = 'list';

  trackCourse (index, course) {
    return course ? course.id : undefined;
  }

  loadData () {
    this.courses = [
      { id:3,  name: 'courses1'},
      { id:12, name: 'courses2'},
      { id:32, name: 'courses3'},
      { id:43, name: 'courses4'},
      { id:54, name: 'courses5'},
    ];
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }



}
