import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";

export const appRoutes: Routes = [
  { path: "events/new", component: CreateEventComponent },
  { path: "events", component: EventsListComponent },
  { path: "events/:id", component: EventDetailComponent },
  { path: "", redirectTo: "events", pathMatch: "full" }
];
