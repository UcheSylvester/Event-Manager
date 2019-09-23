import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./shared/event-route-activator";

export const appRoutes: Routes = [
  { path: "events/new", component: CreateEventComponent },
  { path: "events", component: EventsListComponent },
  { path: "events/404", component: Error404Component },
  {
    path: "events/:id",
    component: EventDetailComponent,
    canActivate: [EventRouteActivator]
  },
  { path: "", redirectTo: "events", pathMatch: "full" }
];
