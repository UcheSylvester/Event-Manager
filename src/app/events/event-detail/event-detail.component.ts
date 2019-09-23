import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { EventService } from "src/app/shared/events.service";

@Component({
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.params["id"];
    console.log(id, this.route.snapshot);
    this.event = this.eventService.getEvent(id);
  }
}