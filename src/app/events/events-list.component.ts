import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/events.services";
import { ToastrService } from "../shared/toastr.service.component";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    console.log(eventName);
    // this.toastrService.success(eventName);
  }
}
