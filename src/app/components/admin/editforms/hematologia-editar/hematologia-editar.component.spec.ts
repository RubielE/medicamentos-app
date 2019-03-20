import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologiaEditarComponent } from './hematologia-editar.component';

describe('HematologiaEditarComponent', () => {
  let component: HematologiaEditarComponent;
  let fixture: ComponentFixture<HematologiaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HematologiaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HematologiaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
