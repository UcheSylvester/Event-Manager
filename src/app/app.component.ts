import { Component, OnInit } from "@angular/core";
import { AuthService } from './user-profile/auth.service';

@Component({
  selector: "app-root",
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
  // <app-events-list></app-events-list>
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService){}

  ngOnInit() {
    this.auth.checkAuthenticationStatus()
  }
}
