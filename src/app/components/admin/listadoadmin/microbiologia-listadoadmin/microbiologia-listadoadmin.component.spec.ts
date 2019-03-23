import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrobiologiaListadoadminComponent } from './microbiologia-listadoadmin.component';

describe('MicrobiologiaListadoadminComponent', () => {
  let component: MicrobiologiaListadoadminComponent;
  let fixture: ComponentFixture<MicrobiologiaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrobiologiaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrobiologiaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
