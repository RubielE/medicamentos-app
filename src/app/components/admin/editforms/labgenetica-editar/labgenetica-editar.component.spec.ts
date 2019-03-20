import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabgeneticaEditarComponent } from './labgenetica-editar.component';

describe('LabgeneticaEditarComponent', () => {
  let component: LabgeneticaEditarComponent;
  let fixture: ComponentFixture<LabgeneticaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabgeneticaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabgeneticaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
