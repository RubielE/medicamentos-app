import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinalisisListadoadminComponent } from './urinalisis-listadoadmin.component';

describe('UrinalisisListadoadminComponent', () => {
  let component: UrinalisisListadoadminComponent;
  let fixture: ComponentFixture<UrinalisisListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrinalisisListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrinalisisListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
