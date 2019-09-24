import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  // keeping track of current user
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: "Uchenna",
      lastName: "Okoro",
      userName: "UCylvester"
    };
  }

  isAuthenticated() {
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
    // return this.currentUser;
  }
}
