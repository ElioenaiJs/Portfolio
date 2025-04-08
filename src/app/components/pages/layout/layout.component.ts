import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { PresentacionComponent } from "../../presentacion/presentacion.component";
import { ExperienceComponent } from "../../experience/experience.component";

@Component({
  selector: 'app-layout',
  imports: [PresentacionComponent, ExperienceComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
