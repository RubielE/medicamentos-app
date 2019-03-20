import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaCrearComponent } from './quimica-crear.component';

describe('QuimicaCrearComponent', () => {
  let component: QuimicaCrearComponent;
  let fixture: ComponentFixture<QuimicaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuimicaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
