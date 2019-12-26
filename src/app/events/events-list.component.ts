import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/events.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared/event.model";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(events => {
      this.events = events.events;
    });
  }
}
