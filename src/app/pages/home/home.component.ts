import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LogoComponent } from '../logo/logo.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LogoComponent,CreateAccountComponent,LogInComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
