import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaListadoComponent } from './quimica-listado.component';

describe('QuimicaListadoComponent', () => {
  let component: QuimicaListadoComponent;
  let fixture: ComponentFixture<QuimicaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuimicaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
