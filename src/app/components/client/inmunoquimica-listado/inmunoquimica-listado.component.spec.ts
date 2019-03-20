import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunoquimicaListadoComponent } from './inmunoquimica-listado.component';

describe('InmunoquimicaListadoComponent', () => {
  let component: InmunoquimicaListadoComponent;
  let fixture: ComponentFixture<InmunoquimicaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunoquimicaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmunoquimicaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
