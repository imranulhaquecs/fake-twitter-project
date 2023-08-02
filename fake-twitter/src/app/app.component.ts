import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Fake Twitter';
  isUserLoggedIn: any;

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit() {

    this.isUserLoggedIn = this.authService.isLoggedIn;

  }

  ngOnDestroy() {
    
  }

  logout() {
    this.authService.logout();
  }


}
