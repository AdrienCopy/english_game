import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  caption: string;
}

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  slides: Slide[] = [
    {
      image: 'presentation/slide1.jpg',
      caption: ''
    },
    {
      image: 'presentation/slide2.jpg',
      caption: ''
    },
    {
      image: 'presentation/slide3.jpg',
      caption: ''
    },
    {
      image: 'presentation/slide4.jpg',
      caption: ''
    },
    {
      image: 'presentation/slide5.jpg',
      caption: ''
    },
    {
      image: 'presentation/slide6.jpg',
      caption: ''
    },
    {
      image: 'presentation/slide7.jpg',
      caption: ''
    }
  ];

  currentIndex = 0;

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.previous();
    }
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
