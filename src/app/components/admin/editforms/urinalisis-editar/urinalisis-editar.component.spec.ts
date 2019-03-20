import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinalisisEditarComponent } from './urinalisis-editar.component';

describe('UrinalisisEditarComponent', () => {
  let component: UrinalisisEditarComponent;
  let fixture: ComponentFixture<UrinalisisEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrinalisisEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrinalisisEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
