import { VoterService } from "./voter.service";
import { ISession } from "./event.model";
import { of } from "rxjs";

describe("VoterService", () => {
  let voterService: VoterService, mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj("mockHttp", ["delete", "post"]);
    voterService = new VoterService(mockHttp);
  });

  describe("deleteVoter", () => {
    it("remove voter from the list of voters", () => {
      let session = {
        id: 6,
        voters: ["Uche", "Sylvester"]
      };

      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, <ISession>(<unknown>session), "Uche");

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe("Sylvester");
    });

    it("should make a http.delete call to the right url", () => {
      let session = {
        id: 5,
        voters: ["Uche", "Sylvester"]
      };

      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, <ISession>(<unknown>session), "Uche");

      expect(mockHttp.delete).toHaveBeenCalledWith(
        "/api/events/3/sessions/5/voters/Uche"
      );
    });
  });

  describe("addVoter", () => {
    it("adds voter to the list of voters", () => {
      let session = {
        id: 4,
        voters: ["Amaka", "Emeka"]
      };

      mockHttp.post.and.returnValue(of(true));

      voterService.addVoter(3, <ISession>session, "Uche");

      expect(session.voters.length).toBe(3);
      expect(session.voters[2]).toBe("Uche");
    });

    it("shold make  http.post to the right url", () => {
      let session = {
        id: 4,
        voters: ["Amaka", "Emeka"]
      };

      mockHttp.post.and.returnValue(of(true));

      voterService.addVoter(3, <ISession>session, "Uche");

      expect(mockHttp.post).toHaveBeenCalledWith(
        "/api/events/3/sessions/4/voters/Uche",
        {},
        jasmine.any(Object)
      );
    });
  });
});
