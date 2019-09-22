import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent implements OnInit {
  @Input("recievedEvent") event: any;

  constructor() {}

  ngOnInit() {}

  checkStartTime() {
    return this.event && this.event.time === "8:00 am" ? "green bold" : "";
  }
}
