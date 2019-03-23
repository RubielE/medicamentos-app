import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatListadoadminComponent } from './nat-listadoadmin.component';

describe('NatListadoadminComponent', () => {
  let component: NatListadoadminComponent;
  let fixture: ComponentFixture<NatListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
