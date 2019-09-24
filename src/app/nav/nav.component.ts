import { Component, OnInit } from "@angular/core";
import { AuthService } from "../user-profile/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(private auth: AuthService) {
    console.log(auth);
  }

  ngOnInit() {}
}
