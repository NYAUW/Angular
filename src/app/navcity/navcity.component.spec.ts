import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcityComponent } from './navcity.component';

describe('NavcityComponent', () => {
  let component: NavcityComponent;
  let fixture: ComponentFixture<NavcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
