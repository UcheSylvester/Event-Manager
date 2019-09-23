import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./userRoutes";
import { UserProfileComponent } from "./user-profile.component";

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  providers: []
})
export class UserModule {}
