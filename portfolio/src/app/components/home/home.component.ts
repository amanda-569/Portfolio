import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxParticlesModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly projects = PROJECTS;
  readonly skillGroups = [
    {
      title: 'Frontend',
      description: 'Interfaces that feel clear, responsive, and enjoyable to use.',
      accent: '130, 166, 255',
      constellation: 'Phoenix',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS'],
    },
    {
      title: 'Backend',
      description: 'Application logic, APIs, data, and full-stack foundations.',
      accent: '178, 144, 255',
      constellation: 'Lyra',
      skills: [
        'Node.js',
        'Express',
        'C#',
        'Java',
        'PHP',
        'Python',
        'SQL',
        'MongoDB',
        'MVC',
      ],
    },
    {
      title: 'Tools & Platforms',
      description: 'The tools I use to design, build, collaborate, and ship.',
      accent: '255, 220, 160',
      constellation: 'Andromeda',
      skills: ['Git / GitHub', 'Figma', 'AWS', 'Android Studio', 'C'],
    },
  ];
  readonly restingCardTransform =
    'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  cardTransforms: Record<number, string> = {};
  private revealObserver?: IntersectionObserver;
  private scrollFrame?: number;
  private constellation?: HTMLElement;
  private moon?: HTMLElement;
  private mountain?: HTMLElement;
  private road?: HTMLElement;
  private heroCopy?: HTMLElement;
  private welcomeLayer?: HTMLElement;
  private identityLayer?: HTMLElement;
  private pointerHandlers: Array<{
    element: HTMLElement;
    handler: (event: PointerEvent) => void;
  }> = [];
  readonly starOptions: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 40,
    background: { color: { value: 'transparent' } },
    particles: {
      number: {
        value: 300,
        density: { enable: true },
      },
      color: {
        value: ['#ffffff', '#dce7ff', '#fff4dc'],
      },
      shape: { type: 'circle' },
      size: {
        value: { min: 0.4, max: 1.4 },
      },
      opacity: {
        value: { min: 0.08, max: 1 },
        animation: {
          enable: true,
          speed: { min: 0.8, max: 2.2 },
          mode: 'auto',
          startValue: 'random',
          sync: false,
        },
      },
      move: { enable: false },
      groups: {
        distant: {
          number: { value: 270 },
          shape: { type: 'circle' },
          size: { value: { min: 0.4, max: 1.4 } },
        },
        sparkle: {
          number: { value: 16 },
          shape: {
            type: 'star',
            options: {
              star: {
                sides: 4,
                inset: 6,
              },
            },
          },
          size: { value: { min: 0.75, max: 1.5 } },
          rotate: {
            value: 45,
            animation: { enable: false },
          },
          opacity: {
            value: { min: 0.12, max: 1 },
            animation: {
              enable: true,
              speed: { min: 0.6, max: 1.6 },
              mode: 'auto',
              startValue: 'random',
              sync: false,
            },
          },
        },
      },
    },
    detectRetina: true,
  };

  constructor(
    private el: ElementRef,
    private readonly particlesService: NgParticlesService
  ) {}

  ngOnInit() {
    void this.particlesService.init(async engine => {
      await loadSlim(engine);
    });
  }

  ngAfterViewInit(): void {
    const root = this.el.nativeElement as HTMLElement;

    this.constellation = root.querySelector<HTMLElement>('.constellation') ?? undefined;
    this.moon = root.querySelector<HTMLElement>('#moon') ?? undefined;
    this.mountain = root.querySelector<HTMLElement>('#mountain') ?? undefined;
    this.road = root.querySelector<HTMLElement>('#road') ?? undefined;
    this.heroCopy = root.querySelector<HTMLElement>('.hero-copy') ?? undefined;
    this.welcomeLayer = root.querySelector<HTMLElement>('.hero-welcome') ?? undefined;
    this.identityLayer = root.querySelector<HTMLElement>('.hero-identity') ?? undefined;

    this.setupRevealObserver(root);
    this.setupSectionLighting(root);
    this.updateParallax();
  }

  private setupRevealObserver(root: HTMLElement): void {
    const hiddenElements = root.querySelectorAll<HTMLElement>('.hidden-home');

    this.revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    hiddenElements.forEach(element => this.revealObserver?.observe(element));
  }

  private setupSectionLighting(root: HTMLElement): void {
    root.querySelectorAll<HTMLElement>('.hidden-home, .skill-group').forEach(element => {
      const handler = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        element.style.setProperty('--mouse-x', `${event.clientX - bounds.left}px`);
        element.style.setProperty('--mouse-y', `${event.clientY - bounds.top}px`);
      };

      element.addEventListener('pointermove', handler);
      this.pointerHandlers.push({ element, handler });
    });
  }

  tiltProjectCard(event: MouseEvent, projectId: number): void {
    const card = event.currentTarget as HTMLElement;
    const bounds = card.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    const maxTilt = 5;

    // Positive Y rotation raises the right edge; negative X rotation raises
    // the bottom edge. The card therefore leans toward the pointer.
    const rotateY = horizontal * maxTilt * 2;
    const rotateX = vertical * maxTilt * -2;

    this.cardTransforms[projectId] =
      `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) ` +
      `rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
  }

  resetProjectCard(projectId: number): void {
    this.cardTransforms[projectId] = this.restingCardTransform;
  }

  scrollToProjects(event: Event): void {
    event.preventDefault();
    const projects = document.getElementById('projects');

    if (!projects) {
      return;
    }

    const headerHeight = document.querySelector<HTMLElement>('header')?.offsetHeight ?? 68;
    const top = projects.getBoundingClientRect().top + window.scrollY
      - headerHeight - 36;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.history.replaceState(null, '', '#projects');
    window.scrollTo({
      top: Math.max(0, top),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.scrollFrame !== undefined) {
      return;
    }

    this.scrollFrame = requestAnimationFrame(() => {
      this.updateParallax();
      this.scrollFrame = undefined;
    });
  }

  private updateParallax(): void {
    const scrollY = window.scrollY;

    this.constellation?.style.setProperty(
      'transform',
      `translate3d(0, ${scrollY * 0.12}px, 0)`
    );
    this.moon?.style.setProperty(
      'transform',
      `translate3d(${scrollY * -0.22}px, 0, 0)`
    );
    this.mountain?.style.setProperty(
      'transform',
      `translate3d(0, ${scrollY * -0.08}px, 0)`
    );
    this.road?.style.setProperty(
      'transform',
      `translate3d(0, ${scrollY * 0.08}px, 0)`
    );
    const welcomeProgress = Math.min(Math.max(scrollY / 45, 0), 1);
    const identityProgress = Math.min(Math.max((scrollY - 24) / 46, 0), 1);

    this.heroCopy?.style.setProperty(
      'transform',
      `translate3d(-50%, ${scrollY * 0.55}px, 0)`
    );

    this.welcomeLayer?.style.setProperty('opacity', `${1 - welcomeProgress}`);
    this.welcomeLayer?.style.setProperty(
      'transform',
      `translate3d(0, ${welcomeProgress * -14}px, 0)`
    );
    this.welcomeLayer?.style.setProperty(
      'pointer-events',
      welcomeProgress > 0.6 ? 'none' : 'auto'
    );
    this.welcomeLayer?.toggleAttribute('inert', welcomeProgress > 0.6);
    this.welcomeLayer?.setAttribute('aria-hidden', `${welcomeProgress > 0.6}`);

    this.identityLayer?.style.setProperty('opacity', `${identityProgress}`);
    this.identityLayer?.style.setProperty(
      'transform',
      `translate3d(0, ${(1 - identityProgress) * 14}px, 0)`
    );
    this.identityLayer?.style.setProperty(
      'pointer-events',
      identityProgress < 0.5 ? 'none' : 'auto'
    );
    this.identityLayer?.toggleAttribute('inert', identityProgress < 0.5);
    this.identityLayer?.setAttribute('aria-hidden', `${identityProgress < 0.5}`);
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.pointerHandlers.forEach(({ element, handler }) => {
      element.removeEventListener('pointermove', handler);
    });

    if (this.scrollFrame !== undefined) {
      cancelAnimationFrame(this.scrollFrame);
    }
  }
}
