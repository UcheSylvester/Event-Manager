import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent implements OnInit {
  constructor(private route: Router) {}

  isDirty: boolean = true;

  ngOnInit() {}

  cancel(): void {
    this.route.navigate(["/events"]);
  }
}
