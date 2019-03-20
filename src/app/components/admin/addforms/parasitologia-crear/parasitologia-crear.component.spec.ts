import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasitologiaCrearComponent } from './parasitologia-crear.component';

describe('ParasitologiaCrearComponent', () => {
  let component: ParasitologiaCrearComponent;
  let fixture: ComponentFixture<ParasitologiaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParasitologiaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParasitologiaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
