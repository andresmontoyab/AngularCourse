import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFollowersComponent } from './some-followers.component';

describe('SomeFollowersComponent', () => {
  let component: SomeFollowersComponent;
  let fixture: ComponentFixture<SomeFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
