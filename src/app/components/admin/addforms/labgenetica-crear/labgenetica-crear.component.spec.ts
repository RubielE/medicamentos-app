import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabgeneticaCrearComponent } from './labgenetica-crear.component';

describe('LabgeneticaCrearComponent', () => {
  let component: LabgeneticaCrearComponent;
  let fixture: ComponentFixture<LabgeneticaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabgeneticaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabgeneticaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
