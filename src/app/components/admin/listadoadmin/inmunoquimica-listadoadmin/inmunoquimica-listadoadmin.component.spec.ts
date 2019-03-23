import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunoquimicaListadoadminComponent } from './inmunoquimica-listadoadmin.component';

describe('InmunoquimicaListadoadminComponent', () => {
  let component: InmunoquimicaListadoadminComponent;
  let fixture: ComponentFixture<InmunoquimicaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunoquimicaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmunoquimicaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
