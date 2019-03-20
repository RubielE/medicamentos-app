import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunologiaEditarComponent } from './inmunologia-editar.component';

describe('InmunologiaEditarComponent', () => {
  let component: InmunologiaEditarComponent;
  let fixture: ComponentFixture<InmunologiaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunologiaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmunologiaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
