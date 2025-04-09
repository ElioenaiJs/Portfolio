import { Component } from '@angular/core';
import { PresentacionComponent } from "../../presentacion/presentacion.component";
import { ExperienceComponent } from "../../experience/experience.component";
import { AllProjectsComponent } from "../../all-projects/all-projects.component";
import { BiographyComponent } from "../../biography/biography.component";

@Component({
  selector: 'app-layout',
  imports: [PresentacionComponent, ExperienceComponent, AllProjectsComponent, BiographyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
