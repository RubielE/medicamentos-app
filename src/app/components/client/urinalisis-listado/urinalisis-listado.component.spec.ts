import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinalisisListadoComponent } from './urinalisis-listado.component';

describe('UrinalisisListadoComponent', () => {
  let component: UrinalisisListadoComponent;
  let fixture: ComponentFixture<UrinalisisListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrinalisisListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrinalisisListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
