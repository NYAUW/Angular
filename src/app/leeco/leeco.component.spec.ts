import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeecoComponent } from './leeco.component';

describe('LeecoComponent', () => {
  let component: LeecoComponent;
  let fixture: ComponentFixture<LeecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
