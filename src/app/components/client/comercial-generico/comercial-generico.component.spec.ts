import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialGenericoComponent } from './comercial-generico.component';

describe('ComercialGenericoComponent', () => {
  let component: ComercialGenericoComponent;
  let fixture: ComponentFixture<ComercialGenericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercialGenericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercialGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
