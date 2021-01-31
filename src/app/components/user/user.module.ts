import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HostProfileComponent } from './host-profile/host-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'host-profile', component: HostProfileComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    ResetPasswordComponent,
    HostProfileComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    NgbCarouselModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
