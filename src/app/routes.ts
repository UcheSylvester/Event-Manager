import { Routes } from "@angular/router";

import { EventsListComponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventListResolver } from "./events/events-list-resolve.services";
import { CreateSessionComponent } from "./events/create-session/create-session.component";
import { EventResolver } from "./events/event-resolver.service";

export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  { path: "events/session/new", component: CreateSessionComponent },
  { path: "events/404", component: Error404Component },
  {
    path: "events/:id",
    component: EventDetailComponent,
    resolve: {event: EventResolver}
  },
  { path: "user", loadChildren: "./user-profile/user.module#UserModule" },
  { path: "", redirectTo: "events", pathMatch: "full" },
  { path: "**", redirectTo: "events/404", pathMatch: "full" }
];
