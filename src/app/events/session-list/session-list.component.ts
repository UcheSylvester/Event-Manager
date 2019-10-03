import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ISession } from "src/app/shared/event.model";
import { AuthService } from "src/app/user-profile/auth.service";
import { VoterService } from 'src/app/shared/voter.service';

@Component({
  selector: "app-session-list",
  templateUrl: "./session-list.component.html",
  styleUrls: ["./session-list.component.css"]
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  filteredSessions: ISession[] = [];

  constructor(private authService: AuthService, private voterService: VoterService) {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSession(this.filterBy);
      // sorting sessions by votes or name
      this.sortBy === "name"
        ? this.filteredSessions.sort(sortByNameAsc)
        : this.filteredSessions.sort(sortByVotesDsc);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        session,
        this.authService.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        session,
        this.authService.currentUser.userName
      );
    }
    if (this.sortBy === "votes") {
      this.filteredSessions.sort(sortByVotesDsc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.authService.currentUser.userName
    );
  }

  filterSession(filter: string) {
    if (filter === "all") {
      this.filteredSessions = this.sessions.slice(0);
      // console.log(this.filteredSessions);
    } else {
      this.filteredSessions = this.sessions.filter(
        session => session.level.toLocaleLowerCase() === filter
      );
      // console.log(this.filteredSessions);
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

const sortByVotesDsc = (s1: ISession, s2: ISession) =>
  (s2.voters.length = s1.voters.length);
