import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
  // <app-events-list></app-events-list>
})
export class AppComponent {
  title = "events-manager";
}
