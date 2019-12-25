import { Component, OnInit } from "@angular/core";
import { AuthService } from "./user-profile/auth.service";
import { EventService } from "./shared/events.service";

@Component({
  selector: "app-root",
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private eventService: EventService) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();

    // this.eventService.saveEvents().subscribe(data => console.log(data));
  }
}
