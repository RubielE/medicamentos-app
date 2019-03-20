import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerologiaListadoComponent } from './serologia-listado.component';

describe('SerologiaListadoComponent', () => {
  let component: SerologiaListadoComponent;
  let fixture: ComponentFixture<SerologiaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerologiaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerologiaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
