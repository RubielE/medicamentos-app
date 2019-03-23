import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerologiaListadoadminComponent } from './serologia-listadoadmin.component';

describe('SerologiaListadoadminComponent', () => {
  let component: SerologiaListadoadminComponent;
  let fixture: ComponentFixture<SerologiaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerologiaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerologiaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
