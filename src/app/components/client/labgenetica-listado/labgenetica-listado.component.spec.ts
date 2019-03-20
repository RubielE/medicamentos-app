import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabgeneticaListadoComponent } from './labgenetica-listado.component';

describe('LabgeneticaListadoComponent', () => {
  let component: LabgeneticaListadoComponent;
  let fixture: ComponentFixture<LabgeneticaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabgeneticaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabgeneticaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
