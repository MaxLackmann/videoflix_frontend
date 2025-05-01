import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoofferPageComponent } from './videooffer-page.component';

describe('VideoofferPageComponent', () => {
  let component: VideoofferPageComponent;
  let fixture: ComponentFixture<VideoofferPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoofferPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoofferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
