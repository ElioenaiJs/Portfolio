import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LayoutComponent } from "./components/pages/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
