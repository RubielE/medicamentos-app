import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabgeneticaListadoadminComponent } from './labgenetica-listadoadmin.component';

describe('LabgeneticaListadoadminComponent', () => {
  let component: LabgeneticaListadoadminComponent;
  let fixture: ComponentFixture<LabgeneticaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabgeneticaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabgeneticaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
