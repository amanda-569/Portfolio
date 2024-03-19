import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initStarrySky();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const value = window.scrollY;
    var night = this.el.nativeElement.querySelector(".constellation");    
    const moon = this.el.nativeElement.querySelector('#moon');
    const mountain = this.el.nativeElement.querySelector('#mountain');
    const road = this.el.nativeElement.querySelector('#road');
    const text = this.el.nativeElement.querySelector('#text');

    night.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
  }

  initStarrySky() {
    var style = ["style1", "style2", "style3"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

    function getRandomArbitrary(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var star = "";
    var numStars = 500;
    var night = this.el.nativeElement.querySelector(".constellation");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;

    for (var i = 0; i < numStars; i++) {
      star += `<div class='star ${style[getRandomArbitrary(0, 3)]} ${opacity[getRandomArbitrary(0, 6)]} 
      ${tam[getRandomArbitrary(0, 5)]}' style='background:white;position:relative;animation-delay: ${getRandomArbitrary(0, 9)}s; left: ${getRandomArbitrary(0, widthWindow)}px; top: ${getRandomArbitrary(0, heightWindow)}px;'></div>`;
    }

    night.innerHTML = star;
  }
}
