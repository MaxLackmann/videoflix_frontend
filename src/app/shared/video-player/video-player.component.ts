import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent implements OnInit {
  @Input() sources!: { [quality: string]: string | null };
  @Output() close = new EventEmitter<void>();
  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;

  selectedQuality: string = '360p';
  fullscreenActive = false;
  isPlaying = false;
  showCentralPlay = true;
  showControls = false;

  muted = true;
  volume = 0;
  lastVolume = 0.1;
  showVolumeBar = false;

  currentTime = 0;
  duration = 0;
  hoverTime = 0;
  hoverTimeLeft = 0;
  showHoverTime = false;

  ngOnInit() {
    this.sources = {
      '120p':
        'http://127.0.0.1:8000/media/videos/background_videooffer_HA8XJqx_120p.mp4',
      '360p':
        'http://127.0.0.1:8000/media/videos/background_videooffer_HA8XJqx.mp4',
      '480p':
        'http://127.0.0.1:8000/media/videos/background_videooffer_HA8XJqx_480p.mp4',
      '720p':
        'http://127.0.0.1:8000/media/videos/background_videooffer_HA8XJqx_720p.mp4',
      '1080p':
        'http://127.0.0.1:8000/media/videos/background_videooffer_HA8XJqx_1080p.mp4',
    };
  }

  get qualities() {
    return Object.keys(this.sources ?? {}).filter((q) => !!this.sources[q]);
  }

  onMuteToggle() {
    const video = this.videoRef.nativeElement;
    if (video.muted || video.volume < 0.1) {
      this.volume = this.lastVolume > 0.01 ? this.lastVolume : 0.1;
      video.volume = this.volume;
      video.muted = false;
      this.muted = false;
    } else {
      this.lastVolume = video.volume;
      video.volume = 0;
      video.muted = true;
      this.volume = 0;
      this.muted = true;
    }
  }

  onVolumeChange(event: any) {
    const v = Number(event.target.value);
    this.volume = v;
    const video = this.videoRef.nativeElement;
    video.volume = v;
    if (v < 0.01) {
      video.muted = true;
      this.muted = true;
    } else {
      video.muted = false;
      this.muted = false;
      this.lastVolume = v;
    }
  }

  toggleFullscreen() {
    if (!this.fullscreenActive) {
      this.videoRef?.nativeElement?.requestFullscreen();
      this.fullscreenActive = true;
    } else {
      document.exitFullscreen();
      this.fullscreenActive = false;
    }
  }

  centralPlay() {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.volume = 0;
    this.muted = true;
    this.volume = 0;
    this.isPlaying = true;
    this.showCentralPlay = false;
    this.showControls = true;
  }

  togglePlayPause() {
    const video = this.videoRef.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  onVolumeButtonMouseEnter() {
    this.showVolumeBar = true;
  }
  onVolumeButtonMouseLeave() {
    this.showVolumeBar = false;
  }

  onPlay() {
    this.isPlaying = true;
  }

  onPause() {
    this.isPlaying = false;
  }

  onClose() {
    this.close.emit();
  }
}
