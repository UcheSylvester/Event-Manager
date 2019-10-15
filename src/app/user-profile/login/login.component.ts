import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin;
  loginInvalid: boolean = false

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(formValues: { userName: string; password: string }): void {
    // console.log(this.authService);
    this.authService
      .loginUser(formValues.userName, formValues.password)
      .subscribe(response => {
        if (!response) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(["events"]);
        }
      });
    // navigate back to events page after authentication
  }

  cancel(): void {
    this.router.navigate(["events"]);
  }
}
