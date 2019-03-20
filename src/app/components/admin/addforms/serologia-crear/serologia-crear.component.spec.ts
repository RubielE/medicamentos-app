import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerologiaCrearComponent } from './serologia-crear.component';

describe('SerologiaCrearComponent', () => {
  let component: SerologiaCrearComponent;
  let fixture: ComponentFixture<SerologiaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerologiaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerologiaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
