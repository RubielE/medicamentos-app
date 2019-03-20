import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatEditarComponent } from './nat-editar.component';

describe('NatEditarComponent', () => {
  let component: NatEditarComponent;
  let fixture: ComponentFixture<NatEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
