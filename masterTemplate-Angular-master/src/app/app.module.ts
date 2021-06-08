import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbToastrModule,
  NbChatModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutComponent as AdminLayout } from './admin/layout/layout.component';
import { LayoutComponent as UserLayout } from './user/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NebularModule } from './modules/nebular/nebular.module';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LayoutComponent } from './authentication/layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageUsersComponent } from './admin/manageusers/manageusers.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';

import { GoogleLoginProvider } from 'angularx-social-login';
import { app_config } from 'src/config';
import { RegisterComponent } from './company/register/register.component';
import { LoginComponent } from './company/login/login.component';
import { AddBetaTestComponent } from './company/add-beta-test/add-beta-test.component';
import { ManageBetaTestComponent } from './company/manage-beta-test/manage-beta-test.component';
import { AddReviewComponent } from './main/add-review/add-review.component';
import { CompanyLayoutComponent } from './company/layout/layout.component';
import { ManageCompanysComponent } from './admin/managecompanys/managecompanys.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchBetaTestComponent } from './main/search-beta-test/search-beta-test.component';
import { EnrollTestComponent } from 'src/app/user/enrolltest/enrolltest.component';
import { CreateFeedbackFormComponent } from './company/create-feedback-form/create-feedback-form.component';
import { ViewFeedbackComponent } from './company/view-feedback/view-feedback.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { EnrolledComponent } from './user/enrolled/enrolled.component';
import { CompanyprofileComponent } from './company/companyprofile/companyprofile.component';
import { AddFeedbackComponent } from './user/add-feedback/add-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLayout,
    AdminLayout,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    RegisterComponent,
    LoginComponent,
    AddBetaTestComponent,
    ManageBetaTestComponent,
    AddReviewComponent,
    LayoutComponent,
    ProfileComponent,
    ManageCompanysComponent,
    CompanyLayoutComponent,
    ManageUsersComponent,
    ContactusComponent,
    SearchBetaTestComponent,
    EnrollTestComponent,
    CreateFeedbackFormComponent,
    ViewFeedbackComponent,
    AboutusComponent,
    HomeComponent,
    EnrolledComponent,
    CompanyprofileComponent,
    AddFeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NebularModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    SocialLoginModule,
    NbMenuModule.forRoot(),
    NbIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NbToastrModule.forRoot(),
    NbChatModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(app_config.OAuthID),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class PageModule {}
