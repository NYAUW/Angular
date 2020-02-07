import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazerComponent } from './razer.component';

describe('RazerComponent', () => {
  let component: RazerComponent;
  let fixture: ComponentFixture<RazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
