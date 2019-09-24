import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup, Form } from "@angular/forms";

import { ISession } from "src/app/shared/event.model";

@Component({
  selector: "app-create-session",
  templateUrl: "./create-session.component.html",
  styleUrls: ["./create-session.component.css"]
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  voters: FormControl;

  constructor() {}

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400)
    ]);
    this.voters = new FormControl("", Validators.required);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
      // voters: this.voters
    });
  }

  saveSession(formValues: ISession): void {
    // console.log(formValues);
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };
    console.log(session);
  }
}
