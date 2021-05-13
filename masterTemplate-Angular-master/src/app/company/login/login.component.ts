import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import {CompanyService} from 'src/app/services/company.service';
import Swal from 'sweetalert2';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: any;
  socialUser: SocialUser;
  isLoggedin: boolean;
  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
    document.getElementsByTagName('nb-layout-column')[0].classList.add('login');
    // document.body.classList.add('login');

    this.socialAuthService.authState.subscribe((company) => {
      this.socialUser = company;
      this.isLoggedin = company != null;
      console.log(this.socialUser);
    });
  }

  ngOnDestroy() {
    document
      .getElementsByTagName('nb-layout-column')[0]
      .classList.remove('login');
  }

  initLoginForm() {
    this.loginform = this.fb.group({
      email: '',
      password: '',
    });
  }

  submitLoginForm() {
    let formdata = this.loginform.value;

    this.companyService.getCompanyByEmail(formdata.email).subscribe((companydata) => {
      if (companydata) {
        if (companydata['password'] == formdata['password']) {
          Swal.fire({
            icon: 'success',
            title: 'Great!',
            text: 'Successfully Loggedin',
          }).then(() => {
            this.companyService.loggedin = true;
            sessionStorage.setItem('company', JSON.stringify(companydata));
            this.companyService.currentCompany = companydata;

            if (companydata['iscompany']) {
              this.router.navigate(['/company']);
            } else {
              this.router.navigate(['/user']);
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: "Email and Password does't match",
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: "Email and Password does't match",
        });             
      }
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}