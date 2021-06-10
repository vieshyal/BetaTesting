import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BetaService } from 'src/app/services/beta.service';
import { UserService } from 'src/app/services/user.service';
import { CompanyService } from 'src/app/services/company.service';
import { app_config } from 'src/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css'],
})
export class EnrolledComponent implements OnInit {
  betaList: any;
  loadingBeta = true;
  companysList: any;
  loadingCompanys = true;

  url = app_config.api_url + '/';
  constructor(
    private betaService: BetaService,
    private router: Router,
    private toastrServices: NbToastrService,
    private userService: UserService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.fetchTests();
  }

  fetchTests() {
    this.betaService
      .getByUser(this.userService.currentUser._id)
      .subscribe((data) => {
        console.log(data);
        this.betaList = data;
        this.loadingBeta = false;
      });
    this.companyService.getAll().subscribe((res) => {
      this.companysList = res;
      this.loadingCompanys = false;
    });
  }

  expired(date) {
    return date < new Date();
  }

  hasUnfilled(users) {
    return users.includes(this.userService.currentUser._id);
  }
}
