import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TradersClient';
  isLoggedIn: Observable<boolean>;

  constructor(private router: Router, public authenticationService: AuthenticationService) {
    this.title = 'PetStoreClient';
    this.isLoggedIn = authenticationService.isLoggedIn();
  }
}
