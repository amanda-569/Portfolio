import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  readonly date = new Date();
  readonly author = 'Amanda Mar';

  activeSection = 'home';
  headerScrolled = false;
  menuOpen = false;
  private scrollFrame?: number;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.scrollFrame !== undefined) {
      return;
    }

    this.scrollFrame = requestAnimationFrame(() => {
      this.updateNavigation();
      this.scrollFrame = undefined;
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMenu();

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);

      if (!section) {
        return;
      }

      const header = document.querySelector<HTMLElement>('header');
      const headerHeight = header?.offsetHeight ?? 68;
      const breathingRoom = 36;
      const top = section.getBoundingClientRect().top + window.scrollY
        - headerHeight - breathingRoom;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.history.replaceState(null, '', `#${sectionId}`);
      window.scrollTo({
        top: Math.max(0, top),
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    });
  }

  private updateNavigation(): void {
    this.headerScrolled = window.scrollY > 48;

    const sections = ['contact', 'about', 'projects', 'technology', 'experience'];
    const marker = window.innerHeight * 0.35;
    let visibleSection = 'home';

    for (const id of sections) {
      const section = document.getElementById(id);

      if (section && section.getBoundingClientRect().top <= marker) {
        visibleSection = id;
        break;
      }
    }

    if (this.activeSection !== visibleSection) {
      this.activeSection = visibleSection;

      const nextHash = `#${visibleSection}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, '', nextHash);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.scrollFrame !== undefined) {
      cancelAnimationFrame(this.scrollFrame);
    }
  }
}
