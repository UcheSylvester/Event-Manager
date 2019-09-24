import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { userRoutes } from "./userRoutes";
import { UserProfileComponent } from "./user-profile.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [UserProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class UserModule {}
