import { Routes } from "@angular/router";

import { EventsListComponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-route-activator";
import { EventListResolver } from "./events/events-list-resolve.services";

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
  { path: "events/404", component: Error404Component },
  {
    path: "events/:id",
    component: EventDetailComponent,
    canActivate: [EventRouteActivator]
  },
  { path: "", redirectTo: "events", pathMatch: "full" },
  { path: "user", loadChildren: "./user-profile/user.module#UserModule" }
];
