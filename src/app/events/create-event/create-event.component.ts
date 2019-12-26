import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { EventService } from "src/app/shared/events.service";
import { IEvent } from "src/app/shared/event.model";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent implements OnInit {
  constructor(private route: Router, private eventService: EventService) {}
  isDirty = true;

  ngOnInit() {}

  saveEvent(formValues: IEvent) {
    // this.eventService.saveNewEvent(formValues);
    this.eventService.saveNewEvent(formValues).subscribe(events => {
      console.log(events);
      this.isDirty = false;
      this.route.navigate(["events"]);
    });
  }

  cancel(): void {
    this.route.navigate(["/events"]);
  }
}
