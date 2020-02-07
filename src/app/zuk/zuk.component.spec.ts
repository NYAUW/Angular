import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZukComponent } from './zuk.component';

describe('ZukComponent', () => {
  let component: ZukComponent;
  let fixture: ComponentFixture<ZukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
