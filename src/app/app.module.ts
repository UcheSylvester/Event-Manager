import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavComponent } from "./nav/nav.component";
import { EventService } from "./shared/events.services";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent
  ],
  imports: [BrowserModule],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
