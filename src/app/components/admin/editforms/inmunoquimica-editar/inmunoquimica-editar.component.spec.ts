import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunoquimicaEditarComponent } from './inmunoquimica-editar.component';

describe('InmunoquimicaEditarComponent', () => {
  let component: InmunoquimicaEditarComponent;
  let fixture: ComponentFixture<InmunoquimicaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunoquimicaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmunoquimicaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
