import { Component } from '@angular/core';

@Component({
  selector: 'app-biography',
  imports: [],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.scss'
})
export class BiographyComponent {
isModalOpen = false;
  modalImageSrc = '';
  modalImageAlt = '';

  openModal(src: string, alt: string) {
    this.modalImageSrc = src;
    this.modalImageAlt = alt;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  ngOnInit() {
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isModalOpen) {
        this.closeModal();
      }
    });
  }
}
