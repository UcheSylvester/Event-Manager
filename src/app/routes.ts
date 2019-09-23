import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";

export const appRoutes: Routes = [
  { path: "events", component: EventsListComponent },
  { path: "events/:id", component: EventDetailComponent },
  { path: "", redirectTo: "events", pathMatch: "full" }
];
