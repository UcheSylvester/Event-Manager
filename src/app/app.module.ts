import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavComponent } from "./nav/nav.component";
import { EventService } from "./shared/events.services";
import { ToastrService } from "./shared/toastr.service.component";
import { EventDetailComponent } from './events/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailComponent
  ],
  imports: [BrowserModule],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule {}
