import { Component, OnInit } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-secure';
  isAuthenticated: boolean;
  email: string;
  user: UserClaims;

  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.user = await this.oktaAuth.getUser();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe( async(isAuthenticated: boolean)  => {
      this.isAuthenticated = isAuthenticated;
      this.user = await this.oktaAuth.getUser();
    });
  }
}
