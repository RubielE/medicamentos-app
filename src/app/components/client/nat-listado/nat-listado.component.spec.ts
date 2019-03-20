import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatListadoComponent } from './nat-listado.component';

describe('NatListadoComponent', () => {
  let component: NatListadoComponent;
  let fixture: ComponentFixture<NatListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
