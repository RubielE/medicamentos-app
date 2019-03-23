import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarhomeComponent } from './administrarhome.component';

describe('AdministrarhomeComponent', () => {
  let component: AdministrarhomeComponent;
  let fixture: ComponentFixture<AdministrarhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
