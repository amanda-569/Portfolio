import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initStarrySky();
    window.addEventListener('resize', () => {
      this.initStarrySky();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const value = window.scrollY;
    var night = this.el.nativeElement.querySelector('.constellation');
    const moon = this.el.nativeElement.querySelector('#moon');
    const mountain = this.el.nativeElement.querySelector('#mountain');
    const road = this.el.nativeElement.querySelector('#road');
    const text = this.el.nativeElement.querySelector('#text');
    const hiddenElements = document.querySelectorAll('.hidden-home');
    for (const card of Array.from(hiddenElements)) {
      (card as HTMLElement).onmousemove = (e) => {
        const rect = (card as HTMLElement).getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        console.log(x, y);
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      };
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));

    night.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
  }

  initStarrySky() {
    var style = ['style1', 'style2', 'style3'];
    var tam = ['tam1', 'tam1', 'tam1', 'tam2', 'tam3'];
    var opacity = [
      'opacity1',
      'opacity1',
      'opacity1',
      'opacity2',
      'opacity2',
      'opacity3',
    ];

    function getRandomArbitrary(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var star = '';
    var numStars = 500;
    var night = this.el.nativeElement.querySelector('.constellation');
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;

    for (var i = 0; i < numStars; i++) {
      star += `<div class='star ${style[getRandomArbitrary(0, 3)]} ${
        opacity[getRandomArbitrary(0, 6)]
      } 
      ${
        tam[getRandomArbitrary(0, 5)]
      }' style='background:white;position:relative;animation-delay: ${getRandomArbitrary(
        0,
        9
      )}s; left: ${getRandomArbitrary(
        0,
        widthWindow
      )}px; top: ${getRandomArbitrary(0, heightWindow)}px;'></div>`;
    }

    var night2 = this.el.nativeElement.querySelector('.constellation2');

    for (var i = 0; i < numStars; i++) {
      star += `<div class='star ${style[getRandomArbitrary(0, 3)]} ${
        opacity[getRandomArbitrary(0, 6)]
      } 
      ${
        tam[getRandomArbitrary(0, 5)]
      }' style='background:white;position:relative;animation-delay: ${getRandomArbitrary(
        0,
        9
      )}s; left: ${getRandomArbitrary(
        0,
        widthWindow
      )}px; top: ${getRandomArbitrary(0, heightWindow / 50)}px;'></div>`;
    }

    night.innerHTML = star;
    night2.innerHTML = star;
  }
}
