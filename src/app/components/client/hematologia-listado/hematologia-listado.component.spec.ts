import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologiaListadoComponent } from './hematologia-listado.component';

describe('HematologiaListadoComponent', () => {
  let component: HematologiaListadoComponent;
  let fixture: ComponentFixture<HematologiaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HematologiaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HematologiaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
