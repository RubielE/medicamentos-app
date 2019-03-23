import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologiaListadoadminComponent } from './hematologia-listadoadmin.component';

describe('HematologiaListadoadminComponent', () => {
  let component: HematologiaListadoadminComponent;
  let fixture: ComponentFixture<HematologiaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HematologiaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HematologiaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
