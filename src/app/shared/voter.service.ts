import { Injectable } from "@angular/core";
import { ISession } from "./event.model";

@Injectable()
export class VoterService {
  constructor() {}

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
    // console.log("deleting voter", session.voters);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
    // console.log("adding voter", session.voters);
  }

  userHasVoted(session: ISession, voterName: string) {
    // console.log("userhasvoted", session.voters);
    return session.voters.some(voter => voter === voterName);
  }
}
