import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {
  LayoutComponent as AdminLayout,
  LayoutComponent,
} from './admin/layout/layout.component';

import { CompanyLayoutComponent as CompanyLayoutComponent } from './company/layout/layout.component';
import { LayoutComponent as UserLayout } from './user/layout/layout.component';
import { LayoutComponent as AppLayout } from './authentication/layout/layout.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import {
  RegisterComponent as AdminRegisterComponent,
  RegisterComponent,
} from './company/register/register.component';
import {
  LoginComponent as AdminLoginComponent,
  LoginComponent,
} from './company/login/login.component';
import { AddBetaTestComponent } from './company/add-beta-test/add-beta-test.component';
import { ManageBetaTestComponent } from './company/manage-beta-test/manage-beta-test.component';
import { AdminGuard } from './guards/admin.guard';
import { ManageUsersComponent } from './admin/manageusers/manageusers.component';
import { ManageCompanysComponent } from './admin/managecompanys/managecompanys.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/app/signin', pathMatch: 'full' },
  {
    path: 'app',
    component: AppLayout,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'reset', component: ResetPasswordComponent },
      { path: 'contactus', component: ContactusComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [AdminGuard],

    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manageusers', component: ManageUsersComponent },
      { path: 'managecompanys', component: ManageCompanysComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  {
    path: 'user',
    component: UserLayout,
    children: [
      { path: 'layout', component: LayoutComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  {
    path: 'company',
    component: CompanyLayoutComponent,
    children: [
      { path: '', redirectTo: '/company/login', pathMatch: 'full' },
      { path: 'addtest', component: AddBetaTestComponent },
      { path: 'managetest', component: ManageBetaTestComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: 'app',
    component: AppLayout,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'companyregister', component: AdminRegisterComponent },
      { path: 'companylogin', component: AdminLoginComponent },
      { path: 'reset', component: ResetPasswordComponent },
      { path: 'profile', component: ProfileComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
