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

import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchBetaTestComponent } from './main/search-beta-test/search-beta-test.component';
import { EnrollTestComponent } from 'src/app/user/enrolltest/enrolltest.component';
import { LoginGuard } from './guards/login.guard';
import { CreateFeedbackFormComponent } from './company/create-feedback-form/create-feedback-form.component';
import { ViewFeedbackComponent } from './company/view-feedback/view-feedback.component';
import { ChatComponent } from './chat/chat.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { EnrolledComponent } from './user/enrolled/enrolled.component';
import { ManageEnrolledComponent } from './user/manage-enrolled/manage-enrolled.component';
import { CompanyprofileComponent } from './company/companyprofile/companyprofile.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'app',
    component: AppLayout,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'reset', component: ResetPasswordComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'reset', component: ResetPasswordComponent },

      { path: 'aboutus', component: AboutusComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [AdminGuard],

    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manageusers', component: ManageUsersComponent },
      { path: 'managecompanys', component: ManageCompanysComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  {
    path: 'user',
    component: UserLayout,
    canActivate: [LoginGuard],
    children: [
      { path: 'layout', component: LayoutComponent },
      { path: 'search', component: SearchBetaTestComponent },

      { path: 'enroll/:id', component: EnrollTestComponent },
      { path: 'enrolled', component: EnrolledComponent },
      { path: 'manage', component: ManageEnrolledComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  {
    path: 'company',
    component: CompanyLayoutComponent,
    children: [
      { path: '', redirectTo: '/company/login', pathMatch: 'full' },
      { path: 'addtest', component: AddBetaTestComponent },
      { path: 'managetests', component: ManageBetaTestComponent },
      { path: 'companyprofile', component: CompanyprofileComponent },

      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

      { path: 'feedback form', component: CreateFeedbackFormComponent },
      { path: 'view feedback', component: ViewFeedbackComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
