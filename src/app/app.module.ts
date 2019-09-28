import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavComponent } from "./nav/nav.component";
import { EventService } from "./shared/events.service";
import { TOASTR_TOKEN, Toastr } from "./shared/toastr.service";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-route-activator";
import { EventListResolver } from "./events/events-list-resolve.services";
import { AuthService } from "./user-profile/auth.service";
import { CreateSessionComponent } from "./events/create-session/create-session.component";
import { SessionListComponent } from "./events/session-list/session-list.component";
import { CollapsibleWellComponent } from "./shared/collapsible-well/collapsible-well.component";
import { DurationPipe } from "./shared/duration.pipe";

declare let toastr: Toastr;

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    EventListResolver,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState },
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have saved this event, do you really want to cancel??"
    );
  } else {
    return true;
  }
}
