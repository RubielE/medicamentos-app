import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunologiaListadoComponent } from './inmunologia-listado.component';

describe('InmunologiaListadoComponent', () => {
  let component: InmunologiaListadoComponent;
  let fixture: ComponentFixture<InmunologiaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunologiaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmunologiaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
