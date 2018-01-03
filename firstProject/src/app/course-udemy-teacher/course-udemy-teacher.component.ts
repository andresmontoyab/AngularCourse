import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-udemy-teacher',
  templateUrl: './course-udemy-teacher.component.html',
  styleUrls: ['./course-udemy-teacher.component.css']
})
export class CourseUdemyTeacherComponent implements OnInit {

  isChecked = false;
  Categorys = [
    {id:1, name: 'Development'},
    {id:2, name: 'Arts'},
    {id:3, name: 'Languague'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
