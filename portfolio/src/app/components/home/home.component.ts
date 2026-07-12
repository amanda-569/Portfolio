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
import type { Project } from '../../models/project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxParticlesModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly projects = PROJECTS;
  readonly heroRadiantStars = [
    [11, 16, 1.15, -1.4, 5.8], [27, 34, 0.8, -3.9, 6.6],
    [43, 13, 0.95, -2.2, 7.1], [61, 28, 1.25, -5.1, 6.2],
    [77, 17, 0.75, -0.8, 5.5], [89, 39, 1.05, -4.5, 7.4],
  ];
  readonly contentRadiantStars = [
    [8, 3, 0.8, -1.2, 6.4], [31, 5, 1.05, -4.7, 7.2],
    [67, 4, 0.75, -2.8, 5.9], [91, 7, 1.2, -5.4, 7.8],
    [15, 14, 1.1, -3.1, 6.8], [48, 16, 0.7, -0.5, 5.7],
    [79, 19, 0.9, -4.2, 7.5], [5, 28, 0.75, -2.5, 6.1],
    [37, 31, 1.25, -5.8, 7.9], [70, 34, 0.8, -1.7, 6.6],
    [94, 38, 1.05, -3.6, 7.1], [20, 46, 0.9, -4.9, 7.6],
    [56, 49, 0.75, -0.9, 5.8], [84, 53, 1.15, -2.9, 6.9],
    [9, 62, 1.05, -5.2, 7.3], [43, 66, 0.8, -1.9, 6.2],
    [73, 71, 1.2, -4.1, 7.7], [95, 76, 0.75, -0.3, 5.6],
    [25, 83, 0.9, -3.4, 6.7], [59, 88, 1.1, -5.6, 7.4],
    [87, 94, 0.8, -2.1, 6.0],
  ];
  selectedProject: Project | null = null;
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
    'perspective(680px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
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
  private projectTrigger?: HTMLElement;
  private shootingStarTimer?: ReturnType<typeof setTimeout>;
  private shootingStars: HTMLElement[] = [];
  private shootingStarLaunched = false;
  private pointerHandlers: Array<{
    element: HTMLElement;
    handler: (event: PointerEvent) => void;
  }> = [];
  private readonly compactSky = window.matchMedia('(max-width: 700px)').matches;
  private readonly reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  readonly starOptions: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 40,
    background: { color: { value: 'transparent' } },
    particles: {
      number: {
        value: this.compactSky ? 180 : 300,
        density: { enable: !this.compactSky },
      },
      color: {
        value: ['#ffffff', '#dce7ff', '#fff4dc'],
      },
      shape: { type: 'circle' },
      size: {
        value: this.compactSky
          ? { min: 0.8, max: 1.9 }
          : { min: 0.4, max: 1.4 },
      },
      opacity: {
        value: { min: this.compactSky ? 0.24 : 0.08, max: 1 },
        animation: {
          enable: !this.reduceMotion,
          speed: { min: 0.8, max: 2.2 },
          mode: 'auto',
          startValue: 'random',
          sync: false,
        },
      },
      move: { enable: false },
      groups: {
        distant: {
          number: { value: this.compactSky ? 164 : 270 },
          shape: { type: 'circle' },
          size: {
            value: this.compactSky
              ? { min: 0.8, max: 1.9 }
              : { min: 0.4, max: 1.4 },
          },
        },
        sparkle: {
          number: { value: this.compactSky ? 14 : 20 },
          shape: {
            type: 'star',
            options: {
              star: {
                sides: 4,
                inset: 6,
              },
            },
          },
          size: {
            value: this.compactSky
              ? { min: 0.25, max: 1.45 }
              : { min: 0.2, max: 1.25 },
            animation: {
              enable: !this.reduceMotion,
              speed: { min: 0.45, max: 0.85 },
              mode: 'auto',
              startValue: 'random',
              sync: false,
            },
          },
          rotate: {
            value: 45,
            animation: { enable: false },
          },
          opacity: {
            value: { min: 0.68, max: 1 },
            animation: {
              enable: !this.reduceMotion,
              speed: { min: 0.2, max: 0.5 },
              mode: 'auto',
              startValue: 'random',
              sync: false,
            },
          },
        },
        radiant: {
          number: { value: this.compactSky ? 5 : 8 },
          shape: {
            type: 'image',
            options: {
              image: {
                name: 'eight-point-radiant-star',
                src: 'assets/images/eight-point-star.svg',
                width: 100,
                height: 100,
                replaceColor: false,
              },
            },
          },
          size: {
            value: this.compactSky
              ? { min: 0.5, max: 4 }
              : { min: 0.65, max: 4.8 },
            animation: {
              enable: !this.reduceMotion,
              speed: { min: 0.35, max: 0.7 },
              mode: 'auto',
              startValue: 'random',
              sync: false,
            },
          },
          rotate: {
            value: 0,
            animation: { enable: false },
          },
          opacity: {
            value: { min: 0.82, max: 1 },
            animation: {
              enable: !this.reduceMotion,
              speed: { min: 0.18, max: 0.42 },
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
  readonly contentStarOptions: ISourceOptions = {
    ...this.starOptions,
    detectRetina: !this.compactSky,
    particles: {
      ...this.starOptions.particles,
      groups: {
        ...this.starOptions.particles?.groups,
        sparkle: {
          ...this.starOptions.particles?.groups?.['sparkle'],
          number: { value: this.compactSky ? 48 : 110 },
          size: {
            value: this.compactSky
              ? { min: 0.3, max: 1.85 }
              : { min: 0.25, max: 1.8 },
            animation: {
              enable: !this.reduceMotion,
              speed: { min: 0.45, max: 0.85 },
              mode: 'auto',
              startValue: 'random',
              sync: false,
            },
          },
        },
        radiant: {
          ...this.starOptions.particles?.groups?.['radiant'],
          number: { value: this.compactSky ? 12 : 22 },
          size: {
            value: this.compactSky
              ? { min: 0.55, max: 4.4 }
              : { min: 0.7, max: 5.2 },
            animation: {
              enable: !this.reduceMotion,
              speed: { min: 0.35, max: 0.7 },
              mode: 'auto',
              startValue: 'random',
              sync: false,
            },
          },
        },
      },
    },
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
    this.shootingStars = Array.from(root.querySelectorAll<HTMLElement>('.shooting-star'));

    this.setupRevealObserver(root);
    this.setupSectionLighting(root);
    this.scheduleShootingStar(true);
    this.updateParallax();
  }

  private scheduleShootingStar(firstAppearance = false): void {
    if (this.reduceMotion || document.hidden || this.shootingStarLaunched) {
      return;
    }

    window.clearTimeout(this.shootingStarTimer);
    const minimumDelay = firstAppearance ? 4500 : 14000;
    const delayRange = firstAppearance ? 5000 : 18000;

    this.shootingStarTimer = window.setTimeout(() => {
      this.launchShootingStar();
    }, minimumDelay + Math.random() * delayRange);
  }

  private launchShootingStar(): void {
    const inHero = window.scrollY < window.innerHeight * 0.72;
    const star = this.shootingStars.find(element =>
      element.classList.contains(inHero ? 'shooting-star-hero' : 'shooting-star-content')
    );

    if (!star) {
      return;
    }

    this.shootingStarLaunched = true;

    const top = 8 + Math.random() * 48;
    const left = 2 + Math.random() * 28;
    const angle = -24 + Math.random() * 14;
    const travelX = 42 + Math.random() * 28;
    const travelY = 8 + Math.random() * 12;
    const duration = 900 + Math.random() * 500;

    star.style.setProperty('--shoot-top', `${top}%`);
    star.style.setProperty('--shoot-left', `${left}%`);
    star.style.setProperty('--shoot-angle', `${angle.toFixed(1)}deg`);
    star.style.setProperty('--shoot-x', `${travelX.toFixed(1)}vw`);
    star.style.setProperty('--shoot-y', `${travelY.toFixed(1)}vw`);
    star.style.setProperty('--shoot-duration', `${duration.toFixed(0)}ms`);
    star.classList.remove('is-active');
    void star.offsetWidth;
    star.classList.add('is-active');
  }

  @HostListener('document:visibilitychange')
  onVisibilityChange(): void {
    if (document.hidden) {
      window.clearTimeout(this.shootingStarTimer);
      return;
    }

    if (!this.shootingStarLaunched) {
      this.scheduleShootingStar(true);
    }
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
    root.querySelectorAll<HTMLElement>('.skill-group').forEach(element => {
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
    if (this.compactSky || this.reduceMotion) {
      return;
    }

    const card = event.currentTarget as HTMLElement;
    const bounds = card.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
    const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
    const maxTilt = 6;

    card.style.setProperty('--glass-x', `${pointerX.toFixed(1)}%`);
    card.style.setProperty('--glass-y', `${pointerY.toFixed(1)}%`);

    // Positive Y rotation raises the right edge; negative X rotation raises
    // the bottom edge. The card therefore leans toward the pointer.
    const rotateY = horizontal * maxTilt * 2;
    const rotateX = vertical * maxTilt * -2;

    this.cardTransforms[projectId] =
      `perspective(680px) rotateX(${rotateX.toFixed(2)}deg) ` +
      `rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
  }

  resetProjectCard(event: MouseEvent, projectId: number): void {
    const card = event.currentTarget as HTMLElement;
    card.style.setProperty('--glass-x', '50%');
    card.style.setProperty('--glass-y', '35%');
    this.cardTransforms[projectId] = this.restingCardTransform;
  }

  openProject(project: Project, event?: Event): void {
    this.projectTrigger = event?.currentTarget as HTMLElement | undefined;
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      (this.el.nativeElement as HTMLElement)
        .querySelector<HTMLElement>('.project-modal-close')
        ?.focus();
    });
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';

    requestAnimationFrame(() => this.projectTrigger?.focus());
  }

  openProjectLink(event: Event, url: string): void {
    event.preventDefault();
    event.stopPropagation();
    window.location.assign(url);
  }

  @HostListener('document:keydown', ['$event'])
  handleModalKeyboard(event: KeyboardEvent): void {
    if (!this.selectedProject) {
      return;
    }

    if (event.key === 'Escape') {
      this.closeProject();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const modal = (this.el.nativeElement as HTMLElement).querySelector<HTMLElement>('.project-modal');
    const focusable = Array.from(
      modal?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ) ?? []
    );

    if (!focusable.length) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  scrollToProjects(event: Event): void {
    this.scrollToSection(event, 'projects');
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const headerHeight = document.querySelector<HTMLElement>('header')?.offsetHeight ?? 68;
    const top = section.getBoundingClientRect().top + window.scrollY
      - headerHeight - 36;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.history.replaceState(null, '', `#${sectionId}`);
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
    document.body.style.overflow = '';
    window.clearTimeout(this.shootingStarTimer);
    this.revealObserver?.disconnect();
    this.pointerHandlers.forEach(({ element, handler }) => {
      element.removeEventListener('pointermove', handler);
    });

    if (this.scrollFrame !== undefined) {
      cancelAnimationFrame(this.scrollFrame);
    }
  }
}
