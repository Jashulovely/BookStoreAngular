import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrsignupComponent } from './login-orsignup.component';

describe('LoginOrsignupComponent', () => {
  let component: LoginOrsignupComponent;
  let fixture: ComponentFixture<LoginOrsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOrsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOrsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
