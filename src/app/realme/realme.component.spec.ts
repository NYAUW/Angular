import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmeComponent } from './realme.component';

describe('RealmeComponent', () => {
  let component: RealmeComponent;
  let fixture: ComponentFixture<RealmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
