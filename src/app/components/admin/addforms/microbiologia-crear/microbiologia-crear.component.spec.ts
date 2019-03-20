import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrobiologiaCrearComponent } from './microbiologia-crear.component';

describe('MicrobiologiaCrearComponent', () => {
  let component: MicrobiologiaCrearComponent;
  let fixture: ComponentFixture<MicrobiologiaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrobiologiaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrobiologiaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
