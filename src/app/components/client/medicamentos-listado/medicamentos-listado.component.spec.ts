import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosListadoComponent } from './medicamentos-listado.component';

describe('MedicamentosListadoComponent', () => {
  let component: MedicamentosListadoComponent;
  let fixture: ComponentFixture<MedicamentosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
