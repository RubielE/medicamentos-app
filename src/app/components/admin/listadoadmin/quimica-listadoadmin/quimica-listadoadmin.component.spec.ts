import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaListadoadminComponent } from './quimica-listadoadmin.component';

describe('QuimicaListadoadminComponent', () => {
  let component: QuimicaListadoadminComponent;
  let fixture: ComponentFixture<QuimicaListadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuimicaListadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaListadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
