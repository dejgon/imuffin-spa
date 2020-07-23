import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { VerifyAccountComponent } from './pages/verify-account/verify-account.component';
import { RestorePasswordComponent } from './pages/restore-password/restore-password.component';



@NgModule({
  declarations: [SignUpComponent, SignInComponent, VerifyAccountComponent, RestorePasswordComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
