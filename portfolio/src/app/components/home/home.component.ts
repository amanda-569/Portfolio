import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const value = window.scrollY;
    const bg = this.el.nativeElement.querySelector('#bg');
    const moon = this.el.nativeElement.querySelector('#moon');
    const mountain = this.el.nativeElement.querySelector('#mountain');
    const road = this.el.nativeElement.querySelector('#road');
    const text = this.el.nativeElement.querySelector('#text');

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
  }
}
