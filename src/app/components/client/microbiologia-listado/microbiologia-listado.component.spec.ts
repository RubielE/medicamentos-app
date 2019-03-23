import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrobiologiaListadoComponent } from './microbiologia-listado.component';

describe('MicrobiologiaListadoComponent', () => {
  let component: MicrobiologiaListadoComponent;
  let fixture: ComponentFixture<MicrobiologiaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrobiologiaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrobiologiaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
