import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { IUser } from "./user.model";
import { tap, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  // keeping track of current user
  currentUser?: IUser;
  loginUser(userName?: string, password?: string) {
    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    let loginInfo = {
      username: userName,
      password: password
    };

    return this.http
      .post("/api/login", loginInfo, options)
      .pipe(
        tap(data => {
          this.currentUser = <IUser>data["user"];
        })
      )
      .pipe(
        catchError(err => {
          return of(false);
        })
      );
  }

  logout() {
    this.currentUser = undefined;

    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post("/api/logout", {}, options);
  }

  isAuthenticated() {
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
    // return this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http
      .get("/api/currentIdentity")
      .pipe(
        tap(data => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  updateCurrentProfile(firstName?: string, lastName?: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    console.log(this.currentUser);

    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.put(
      `/api/users/${this.currentUser.id}`,
      this.currentUser,
      options
    );
  }
}
