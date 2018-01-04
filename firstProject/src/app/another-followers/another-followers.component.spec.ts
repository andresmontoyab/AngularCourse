import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherFollowersComponent } from './another-followers.component';

describe('AnotherFollowersComponent', () => {
  let component: AnotherFollowersComponent;
  let fixture: ComponentFixture<AnotherFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
