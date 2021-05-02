import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
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

import { NgsRevealModule } from 'ngx-scrollreveal';
import { MatFormFieldModule } from '@angular/material/form-field';
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

@NgModule({
  declarations: [
    AppComponent,
    AdminLayout,
    UserLayout,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    LayoutComponent,
    ProfileComponent,
    ManageUsersComponent,
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
    NgsRevealModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    SocialLoginModule,
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