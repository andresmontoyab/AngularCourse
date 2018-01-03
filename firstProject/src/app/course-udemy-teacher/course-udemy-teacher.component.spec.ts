import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUdemyTeacherComponent } from './course-udemy-teacher.component';

describe('CourseUdemyTeacherComponent', () => {
  let component: CourseUdemyTeacherComponent;
  let fixture: ComponentFixture<CourseUdemyTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseUdemyTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseUdemyTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
