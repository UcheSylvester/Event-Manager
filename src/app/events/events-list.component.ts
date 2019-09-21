import { Component } from "@angular/core";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent {
  event = {
    id: 1,
    name: "Angular Connect",
    date: "9/22/2012",
    price: 599.99,
    imageUrl: "./assets/images/angular-connect-shield.png",
    location: {
      address: "10043 01",
      city: "London",
      country: "England"
    }
  };
}
