import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailInfoPageComponent } from './verify-email-info-page.component';

describe('VerifyEmailInfoPageComponent', () => {
  let component: VerifyEmailInfoPageComponent;
  let fixture: ComponentFixture<VerifyEmailInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEmailInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
