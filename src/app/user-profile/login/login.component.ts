import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userName;
  password;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}

  login(formValues: { userName: string; password: string }): void {
    console.log(this.authService);
    this.authService.loginUser(formValues.userName, formValues.password);
    // navigate back to events page after authentication
    this.router.navigate(["events"]);
  }

  cancel(): void {
    this.router.navigate(["events"]);
  }
}
