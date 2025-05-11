import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { VideoCardComponent } from '../shared/video-card/video-card.component';
import { VideoPlayerComponent } from '../shared/video-player/video-player.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-videooffer-page',
  imports: [
    CommonModule,
    MatIconModule,
    VideoCardComponent,
    // VideoPlayerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './videooffer-page.component.html',
  styleUrl: './videooffer-page.component.scss',
})
export class VideoofferPageComponent {
  activeVideo: string | null = null;

  playVideo(url: string) {
    this.activeVideo = url;
  }

  highlightVideo = {
    title: 'Breakout',
    description:
      'Explosive action and a race against time. Dive into the chaos.',
    thumbnail: 'assets/thumbnails/test.jpg',
    url: 'assets/videos/test.mp4',
  };

  sections = [
    {
      id: 'new',
      title: 'New on Videoflix',
      videos: [
        {
          title: 'Friends Sitcom',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          title: 'Majestic Whales',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          title: 'Whispering Shadows',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          title: 'Baby’s secret language',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
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
          title: 'Majestic Whales',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          title: 'World of Wonders',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
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
          title: 'Friends Sitcom',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          title: '48 Hours to Survive',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
          title: 'CRIME',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
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
          title: 'When I Met You',
          thumbnail: 'assets/thumbnails/test.jpg',
          url: 'assets/videos/test.mp4',
        },
        {
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
}
