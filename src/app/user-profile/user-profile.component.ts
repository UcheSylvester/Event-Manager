import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "../shared/toastr.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern("[a-zA-Z].*")
    ]);
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues: { firstName: string; lastName: string }) {
    // console.log(formValues);
    if (this.profileForm.valid) {
      this.authService
        .updateCurrentProfile(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success("Profile saved");
          this.router.navigate(["events"]);
        });
    } else {
      console.log("invalid");
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(["/events"]);
    });
  }

  cancel(): void {
    this.router.navigate(["events"]);
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  checkInputs() {
    if (this.profileForm.invalid) {
      return true;
    } else {
      return false;
    }
  }
}
