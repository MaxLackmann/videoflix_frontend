
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video-card',
  imports: [MatIconModule],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() title!: string;
  @Input() thumbnail!: string;
  @Output() play = new EventEmitter<void>();

  emitPlay() {
    this.play.emit();
  }
}
