import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunologiaListadoadminComponent } from './inmunologia-listadoadmin.component';

describe('InmunologiaListadoadminComponent', () => {
  let component: InmunologiaListadoadminComponent;
  let fixture: ComponentFixture<InmunologiaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunologiaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmunologiaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
