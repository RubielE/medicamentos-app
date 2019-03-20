import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunologiaCrearComponent } from './inmunologia-crear.component';

describe('InmunologiaCrearComponent', () => {
  let component: InmunologiaCrearComponent;
  let fixture: ComponentFixture<InmunologiaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunologiaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmunologiaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
