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
  filterBy: string = "all";
  sortBy: string = "votes";

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.forEach(data => {
      console.log(data, "dldlld");
      this.event = data["event"];
      this.addMode = false;
    });

    // let id = +this.route.snapshot.params["id"];
    // this.event = this.eventService.getEvent(id);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const lastId = Math.max.apply(
      null,
      this.event.sessions.map(session => session.id)
    );

    sessionStorage.id = lastId + 1;
    this.event.sessions.push(session);
    this.eventService.saveNewEvent(this.event).subscribe(() => {
      this.addMode = false;
      console.log(session);
    });
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
