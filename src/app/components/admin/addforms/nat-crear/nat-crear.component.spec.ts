import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatCrearComponent } from './nat-crear.component';

describe('NatCrearComponent', () => {
  let component: NatCrearComponent;
  let fixture: ComponentFixture<NatCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
