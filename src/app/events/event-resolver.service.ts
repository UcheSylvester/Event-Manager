import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";

import { EventService } from "../shared/events.service";
import { IEvent } from "../shared/event.model";

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id;
    // return this.eventService.getEvent(route.params["id"]);
    return this.eventService
      .getEvents()
      .pipe(map((events: IEvent[]) => this.eventService.getEvent(events, +id)));
  }
}
