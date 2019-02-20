import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOficialComponent } from './lista-oficial.component';

describe('ListaOficialComponent', () => {
  let component: ListaOficialComponent;
  let fixture: ComponentFixture<ListaOficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
