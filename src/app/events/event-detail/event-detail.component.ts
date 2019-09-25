import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { EventService } from "src/app/shared/events.service";
import { IEvent, ISession } from "src/app/shared/event.model";

@Component({
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  event: IEvent;
  addMode: boolean;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.params["id"];
    // console.log(id, this.route.snapshot);
    this.event = this.eventService.getEvent(id);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map(session => session.id)
    );

    sessionStorage.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
    console.log(session);
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
