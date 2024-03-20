import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthentificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FIESTA-WEB';
}
