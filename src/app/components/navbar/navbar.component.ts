import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeSection: string = 'home';

  scrollTo(sectionId: string): void {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['home', 'experiencia', 'proyectos', 'sobre-mi', 'contacto'];
    const scrollPosition = window.scrollY + 100;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition + windowHeight >= documentHeight - 200) {
      this.activeSection = 'sobre-mi';
      return;
    }

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}

