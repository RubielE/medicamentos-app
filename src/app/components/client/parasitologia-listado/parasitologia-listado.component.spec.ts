import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasitologiaListadoComponent } from './parasitologia-listado.component';

describe('ParasitologiaListadoComponent', () => {
  let component: ParasitologiaListadoComponent;
  let fixture: ComponentFixture<ParasitologiaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParasitologiaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParasitologiaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
