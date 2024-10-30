import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MailFormComponent } from './mail-form/mail-form.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent, MailFormComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AssicurazioniLowcost';
}
