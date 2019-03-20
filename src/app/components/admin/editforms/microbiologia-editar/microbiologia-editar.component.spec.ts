import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrobiologiaEditarComponent } from './microbiologia-editar.component';

describe('MicrobiologiaEditarComponent', () => {
  let component: MicrobiologiaEditarComponent;
  let fixture: ComponentFixture<MicrobiologiaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrobiologiaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrobiologiaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
