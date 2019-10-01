import { Component, OnInit } from "@angular/core";
import { AuthService } from "../user-profile/auth.service";
import { ISession } from "../shared/event.model";
import { EventService } from "../shared/events.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) {}

  ngOnInit() {}

  searchSession(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(session => {
      this.foundSessions = session;
      // console.log(this.foundSessions);
    });
  }
}
