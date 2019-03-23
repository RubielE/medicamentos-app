import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasitologiaListadoadminComponent } from './parasitologia-listadoadmin.component';

describe('ParasitologiaListadoadminComponent', () => {
  let component: ParasitologiaListadoadminComponent;
  let fixture: ComponentFixture<ParasitologiaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParasitologiaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParasitologiaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
