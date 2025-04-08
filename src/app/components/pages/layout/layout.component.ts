import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { PresentacionComponent } from "../../presentacion/presentacion.component";

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, PresentacionComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
