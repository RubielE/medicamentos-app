import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaEditarComponent } from './quimica-editar.component';

describe('QuimicaEditarComponent', () => {
  let component: QuimicaEditarComponent;
  let fixture: ComponentFixture<QuimicaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuimicaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
