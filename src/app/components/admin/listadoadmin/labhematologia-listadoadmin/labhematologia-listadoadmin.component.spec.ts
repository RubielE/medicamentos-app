import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabhematologiaListadoadminComponent } from './labhematologia-listadoadmin.component';

describe('LabhematologiaListadoadminComponent', () => {
  let component: LabhematologiaListadoadminComponent;
  let fixture: ComponentFixture<LabhematologiaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabhematologiaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabhematologiaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
