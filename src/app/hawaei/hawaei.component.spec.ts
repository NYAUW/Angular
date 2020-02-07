import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawaeiComponent } from './hawaei.component';

describe('HawaeiComponent', () => {
  let component: HawaeiComponent;
  let fixture: ComponentFixture<HawaeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawaeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawaeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
