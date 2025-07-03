import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { VideoCardComponent } from '../shared/video-card/video-card.component';
import { VideoPlayerComponent } from '../shared/video-player/video-player.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { VideoService } from '../../services/videoservice';

@Component({
  selector: 'app-videooffer-page',
  imports: [
    CommonModule,
    MatIconModule,
    VideoCardComponent,
    VideoPlayerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './videooffer-page.component.html',
  styleUrl: './videooffer-page.component.scss',
})
export class VideoofferPageComponent {
  highlightVideo = {
    id: 8,
    title: 'Breakout',
    description:
      'Explosive action and a race against time. Dive into the chaos.',
    thumbnail: 'assets/thumbnails/test.jpg',
  };

  sections = [
    {
      id: 'new',
      title: 'New on Videoflix',
      videos: [
        {
          id: 8,
          title: 'Friends Sitcom',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 9,
          title: 'Majestic Whales',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 10,
          title: 'Whispering Shadows',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 11,
          title: 'Baby’s secret language',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 12,
          title: 'World of Wonders',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
      ],
    },
    {
      id: 'documentary',
      title: 'Documentary',
      videos: [
        {
          id: 13,
          title: 'Majestic Whales',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 14,
          title: 'World of Wonders',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 15,
          title: 'Baby’s secret language',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
      ],
    },
    {
      id: 'drama',
      title: 'Drama',
      videos: [
        {
          id: 16,
          title: 'Friends Sitcom',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 17,
          title: '48 Hours to Survive',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 18,
          title: 'CRIME',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 19,
          title: 'Breakout',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
      ],
    },
    {
      id: 'romance',
      title: 'Romance',
      videos: [
        {
          id: 20,
          title: 'When I Met You',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          id: 21,
          title: 'I Hate You?',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
      ],
    },
  ];

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }

  showPlayer = false;
  playerSources: { [quality: string]: string | null } = {};

  constructor(private videoService: VideoService) {}

  playVideo(id: number) {
    this.videoService.getVideo(id).subscribe((data) => {
      this.playerSources = {
        '120p': data.url_120p,
        '240p': data.url_240p,
        '360p': data.url_360p,
        '480p': data.url_480p,
        '720p': data.url_720p,
        '1080p': data.url_1080p,
      };
      this.showPlayer = true;
    });
  }

  closePlayer() {
    this.showPlayer = false;
  }
}
