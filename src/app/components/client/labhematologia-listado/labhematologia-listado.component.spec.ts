import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologiaEspecializadaListadoComponent } from './hematologia-especializada-listado.component';

describe('HematologiaEspecializadaListadoComponent', () => {
  let component: HematologiaEspecializadaListadoComponent;
  let fixture: ComponentFixture<HematologiaEspecializadaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HematologiaEspecializadaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HematologiaEspecializadaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
