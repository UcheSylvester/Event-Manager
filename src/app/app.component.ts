import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-nav></app-nav>
    <app-events-list></app-events-list>
  `
  // templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "events-manager";
}
