import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordInfoPageComponent } from './forgot-password-info-page.component';

describe('ForgotPasswordInfoPageComponent', () => {
  let component: ForgotPasswordInfoPageComponent;
  let fixture: ComponentFixture<ForgotPasswordInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
